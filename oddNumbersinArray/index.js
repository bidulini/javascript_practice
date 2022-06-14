const findOddNumbers = () => {
   
    let number=document.getElementById("inputNumber").value;

    let inputArray=number.split(" ");
    let odd = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if((inputArray[i]%2)!=0){
            odd++;
        }
    }

    document.getElementById("showResult").innerHTML="Number of Odd Numbers is: " + odd;
}