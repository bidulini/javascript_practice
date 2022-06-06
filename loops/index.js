function checkNumbers()
{
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var displayElement = document.getElementById("display");

    var firstNumber=first.value;
    var secondNumber=second.value;

    if(firstNumber===secondNumber)
    {
        displayElement.innerHTML = "Brojevi su jednaki!";
    }
    else if(firstNumber!==secondNumber)
    {
        displayElement.innerHTML = "Brojevi nisu jednaki!";
    }

}