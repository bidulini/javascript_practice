function calculate()
{
    var inputtedNums=document.getElementById("nmbInput").value;

    var potentialNumberArray=inputtedNums.split(", ");

    var unseparatedNumbers=potentialNumberArray[2].split(",h ");

    var separatedNumberArray=[];

    for (let index = 0; index < 5; index++) {
        if(index<2){
            separatedNumberArray.push(potentialNumberArray[index]);
        }
        else {
            separatedNumberArray.push(unseparatedNumbers[index-2]);
        } 
        separatedNumberArray[index]=parseInt(separatedNumberArray[index]);      
    }
     
    var positiveNums=0;
    var negativeNums=0;
    var zeroNums=0;

    for (let index = 0; index < separatedNumberArray.length; index++) {
        if(separatedNumberArray[index]>0){positiveNums++;}
        else if(separatedNumberArray[index]<0){negativeNums++;}
        else {zeroNums++;}       
    }
    var positivePercentage=positiveNums/separatedNumberArray.length;
    positivePercentage=(positivePercentage*100)+"%";

    var negativePercentage=negativeNums/separatedNumberArray.length;
    negativePercentage=(negativePercentage*100)+"%";

    var zeroPercentage=zeroNums/separatedNumberArray.length;
    zeroPercentage=(zeroPercentage*100)+"%";
    
    document.getElementById("display").innerHTML = "Positive: "+positivePercentage+", Negative: "+negativePercentage+", Zeros: "+zeroPercentage;

}