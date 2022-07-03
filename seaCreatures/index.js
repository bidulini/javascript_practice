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