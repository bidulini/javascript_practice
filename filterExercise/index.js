class Bug {
    constructor(name, numLegs) {
        this.name = name;
        this.numLegs = numLegs;
    }
}
class Spider extends Bug {
    constructor(name, numLegs = 8, poisonous = false) {
        super(name, numLegs);
        this.poisonous = poisonous; //all spiders are gonna be "not poisonous"
    }
}
class Mosquito extends Bug {
    constructor(name, numLegs = 4, full = true) {
        super(name, numLegs);
        this.full = full;
    }
}
class SuperMosquito extends Mosquito {
    constructor(name) {
        super(name);
        this.full = false;
    }
    yell() {
        console.log('ayayayaaa');
    }
}
const bugs = [
    new Bug('Billy', 52),
    new Spider("Jilly"),
    new Mosquito("Philly", 6),
    new SuperMosquito("Danger Boy"),
    new Spider("Silly", 8, true),
];

// we are filtering all the bugs that meet the following criteria:
//  a bug is dangerous if it is poisonous or it has more than 4 legs, 
//  or if it is a supermosquito.

const dangerous = bugs.filter(el => {
    return (el.poisonous === true || el.numLegs > 4 || el.yell !== undefined); //with the yell property we check if this is a supermosquito
    //we could also check if the element of an array is an instance of SUperMosquito (instanceOf)
})
console.log(dangerous);