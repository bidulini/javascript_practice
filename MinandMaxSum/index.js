function calculate() {

    var inputNumber=document.getElementById("nmbrInput").value;

    var numberArray=inputNumber.split(" ");
    var sumArray=[];

    for (let index = 0; index < 5; index++) {
        numberArray[index]=parseInt(numberArray[index]);
    }

    for (let index = 0; index < 5; index++) {
        
        sumArray[index]=numberArray[0]+numberArray[1]+numberArray[2]+numberArray[3]+numberArray[4];
        sumArray[index]=sumArray[index]-numberArray[index];
    }

    var min=sumArray[0];
    var max=sumArray[0];

    for (let index = 0; index < sumArray.length; index++) {
        if(sumArray[index]>max)
        {
            max=sumArray[index];
        }
        if(sumArray[index]<min)
        {
            min=sumArray[index];
        }
    }

    document.getElementById("solution").innerHTML=min+" "+max;
}