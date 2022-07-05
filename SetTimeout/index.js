console.log("Pisemoooo: ZA 3 SEKUNDEE");

const Pisemo = (ime, prezime) => {
    console.log(`Ispisujemo ${ime} i ${prezime} sa set timeout!`);
}
setTimeout(Pisemo("Abida", "Ganic"), 3000);

let counter = 0;

const increment = () => {
    counter++;
    console.log("Vrednost countera" + counter);
}

const intervalId = setInterval(() => {
    increment();
}, 1000);

//zaustavljamo ponavljanje funkcije iznad - inkrementiranje brojaca
const stop = () => {
    clearInterval(intervalId);
}
const div=document.getElementById("div");

setInterval(() => {
    const color = div.style.backgroundColor;
    if(color==="crimson"){
        div.style.backgroundColor = "green";
    }
    else div.style.backgroundColor = "crimson";
}, 2000);