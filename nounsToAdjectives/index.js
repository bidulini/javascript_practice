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

//let's delete one key

delete nouns.smartphone;
console.log(3, nouns);

//delete second key on the list

delete nouns[Object.keys(nouns)[1]]
console.log(4, nouns);

//print all adjectives in the object
console.log(5, Object.values(nouns));
console.log();

//overwrite the adjectives stored in ANY of the keys

nouns['car'] = ['big','modern'];
console.log(6, nouns);
console.log();