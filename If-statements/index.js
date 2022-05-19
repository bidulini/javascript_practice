var input = prompt("Unesite aritmeticki operator: ");
var a = parseInt(prompt ("Unesite prvi broj: "));
var b = parseInt(prompt ("Unesite drugi broj: "));

if (a>b){
    console.log("Prvi broj", a ,"je veci.");
}
if (a<b) {
    console.log("Drugi broj", b ,"je veci.");
}

if(input=='-'){
    console.log("Razlika brojeva je:",(a-b));
}
else if (input=='/'){
    console.log("Kolicnik brojeva je:",(a/b));
}
else if (input=='*'){
    console.log("Proizvod brojeva je:",(a*b));
}
else if (input=='%'){
    console.log("Moduo brojeva je:",(a%b));
}
else {
    console.log("Zbir brojeva je:",(a+b));
}