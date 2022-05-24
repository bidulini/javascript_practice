var a=prompt("Unesite prvu promenljivu:");
a=parseInt(a);

var b=prompt("Unesite drugu promenljivu:");
b=parseInt(b);

var operator=prompt("Unesite operator:");

var mainCondition= typeof(a)==="number" 
                   && typeof(b)==="number"
                   && !isNaN(a) && !isNaN(b);

if(mainCondition)
{
    var result;
    if(operator==="+")
    {   
        result=a+b;
    }
    else if(operator==="-")
    {
        result=a-b;
    }
    else if(operator==="*"){
        result=a*b;
    }
    else if(operator==="/")
    {
        result=a/b;
    }
    console.log("Rezultat je:" +result);
}
else{
    console.log("Unete vrednosti nisu brojevi!");
}

