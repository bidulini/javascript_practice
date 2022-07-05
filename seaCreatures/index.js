const nameToRareness = {
    'whale':9,
    'jellyfish':5,
    'starfish':6,
    'minnow':2
}

const creature = 'squid';

if(creature in nameToRareness) {
    console.log(`Here's how rare ${creature} is:
     ${nameToRareness[creature]}`);
}
else {
    console.log(`We don't have any info about the ${creature}!`);
}

//this way we check if the creature is in our list of keys inside an object
// 'in' looks for keys in objects

console.log(Object.keys(nameToRareness)); //Object.keys gives us info about keys
console.log(Object.values(nameToRareness));//Object.value gives us the value of the key

delete nameToRareness['starfish']; //this is how we delete the key, same as delete nameToRareness.starfish;
console.log(nameToRareness);
