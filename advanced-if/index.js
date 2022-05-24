var a = prompt("Unesite varijablu: ");
a=parseInt(a);

if (a % 2 === 0) {
    console.log("Broj je paran!");
}
else if (a % 2 !== 0) {
    console.log("Broj je neparan!");
}
else { console.log("Uneta vrednost nije broj!"); }