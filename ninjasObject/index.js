const createNinja = (name, weapon, dangerLevel) => ({
    name,
    weapon,
    dangerLevel,
});

const ninjaArray = [
    createNinja('jayla', 'katana', 9000),
    createNinja('bobby', 'stick', 100),
    createNinja('zach', 'leftover chocolate', (-5)),
];
console.log(ninjaArray[0].dangerLevel);

//finding ninjas by specific name and danger level

let foundNinja = 1;
const specialName = 'bobby';
// for (let i = 0; i < ninjaArray.length; i++) {
//     if (ninjaArray[i].name === specialName) {
//         foundNinja = ninjaArray[i];
//         break;
//     }
//     console.log(`${specialName} danger level: ${foundNinja.dangerLevel}`);

// }
const ninjasByName = {
    jayla: createNinja('jayla', 'katana', 9000),
    bobby: createNinja("bobby", 'stick',100),
    zach: createNinja("zach","leftover chocolate", -5),
};
console.log(ninjasByName[specialName].dangerLevel);
console.log(ninjasByName.jayla.dangerLevel);

//we can use find function on an array 
// array.find(el => el===something)
console.log(ninjaArray.find(ninja=> ninja.name===specialName));
//or find an index with findindex
// array.findindex(el=> el==='something')
console.log(ninjaArray.findIndex(ninja=> ninja.name===specialName));

