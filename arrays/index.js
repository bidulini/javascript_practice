var a=[null, null, null, null, null];
a[0]=parseInt(prompt("Unesite prvi clan niza:"));
a[1]=parseInt(prompt("Unesite drugi clan niza:"));
a[2]=parseInt(prompt("Unesite treci clan niza:"));
a[3]=parseInt(prompt("Unesite cetvrti clan niza:"));
a[4]=parseInt(prompt("Unesite peti clan niza:"));

uslov1= typeof(a[0])==="number" && !isNaN(a[0]);
uslov2= typeof(a[1])==="number" && !isNaN(a[1]);
uslov3= typeof(a[2])==="number" && !isNaN(a[2]);
uslov4= typeof(a[3])==="number" && !isNaN(a[3]);
uslov5= typeof(a[4])==="number" && !isNaN(a[4]);

if(uslov1 && uslov2 && uslov3 && uslov4)
{
    console.log("Svi nizovi su brojevi!");
}
else if (uslov1 || uslov2 || uslov3 || uslov4)
{
    console.log("Bar jedan clan je broj!");
}
else {console.log("Clanovi niza nisu brojevi!");}