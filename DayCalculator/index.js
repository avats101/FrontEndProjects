var day="";
var sum=0;
var date=23;
var month=8;
var year=2020;
var month_number=0;
var year_number=0;
function leap(year)
{
if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
    return true;
else
    return false; 
}
function month_calculate(month)
{
if(month==1)
{if (leap(year))
        month_number=5
 else
 month_number=6
}
else if (month==2)
{if (leap(year))
        month_number=1
 else
 month_number=2
}
else if (month==3)
month_number=2;
else if (month==4)
month_number=5;
else if (month==5)
month_number=0;
else if (month==6)
month_number=3;
else if (month==7)
month_number=5;
else if (month==8)
month_number=1;
else if (month==9)
month_number=4;
else if (month==10)
month_number=6;
else if (month==11)
month_number=2;
else
month_number=4;
}
function year_calculate(year)
{ 
    var a=year%100;
    var y=year-a;
    if ((y/100)%4==1)
    year_number=5;
    else if ((y/100)%4==2)
    year_number=3;
    else if ((y/100)%4==3)
    year_number=1;  
    else
    year_number=0;
    for (var i=y+1;i<=year;i++)
    {
    if (leap(i))
    year_number+=2;
    else
    year_number+=1;
    }   
}

function day_calculate(sum)
{
    if(sum%7==0)
{
    day ="Sunday";
}
else if (sum%7==1)
{
    day ="Monday";
}
else if (sum%7==2)
{
    day ="Tuesday";
}else if (sum%7==3)
{
    day ="Wednesday";
}else if (sum%7==4)
{
    day ="Thursday";
}
else if (sum%7==5)
{
    day ="Friday";
}
else
{
    day ="Saturday";
}
}

function yo()
{
date =parseInt(document.getElementById("Date").value);
month=parseInt(document.getElementById("Month").value);
year= parseInt(document.getElementById("Year").value);
month_calculate(month);
year_calculate(year);
sum=date+month_number+year_number;
day_calculate(sum);
document.querySelector("h3").textContent="It's a "+day+"!";
}