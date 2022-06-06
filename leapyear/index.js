function leapYear()
{
    var year = document.getElementById("nmr").value;

    var display=document.getElementById("write");

    if((year%4)===0)
    {
        display.innerHTML="This is a leap year!";
    }
    if((year%4)!==0)
    {
        display.innerHTML="This is NOT a leap year!";
    }
}