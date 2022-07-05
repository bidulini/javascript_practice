const nouns = {
    car: ['expensive','red','comfy'],
    house: ['small','minimalistic','contemporary'],
    laptop: ['heavy','out of date','cheap'],
    smartphone:['terrible','redmi','laggy'],
    oven:['low capacity','bad','dirty'],
}
const noun='water';
if(noun in nouns){
    console.log(`The ${noun} is on the noun list!`);
}
else console.log(`The ${noun} isn't on the list!`)