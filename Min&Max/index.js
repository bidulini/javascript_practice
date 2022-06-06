function MinMax()
{
    var inputNumber=document.getElementById("nmbrInput").value;

    var numberArray=inputNumber.split(" ");

    for (let index = 0; index < numberArray.length; index++) {
        numberArray[index]=parseInt(numberArray[index]);
    }

    var min=numberArray[0];
    var max=numberArray[0];

    for (let index = 0; index < numberArray.length; index++) {
        if(numberArray[index]>max)
        {
            max=numberArray[index];
        }
        if(numberArray[index]<min)
        {
            min=numberArray[index];
        }
    }

    document.getElementById("display").innerHTML="Najmanji clan niza je: "+min+", a najveci: "+max;

}