function EvenOrOdd()
{

    var nmr=document.getElementById("number").value;
    var displayResult=document.getElementById("preview");

    if((nmr%2)===0)
    {
        displayResult.innerHTML="Number is even!";
    }
    else if((nmr%2)!==0)
    {
        displayResult.innerHTML="Number is odd!";
    }
}