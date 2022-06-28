class person {
    constructor(nameArg, surnameArg) {
        this.name = nameArg;
        this.surname = surnameArg;
        this.fullName = this.returnFullName();
    }
    giveFullName() {
        console.log(this.fullName);
    }
    introduce(greeting) {
        console.log(this.name + " " + this.surname + greeting);
    }
    returnFullName(){
        return this.name + " " + this.surname;
    }
}

const camil = new person("Camil", "Plojovic ");
camil.introduce("je selam.");

class T_shirt {
    constructor(sizeFromArgument, colorFromArgument, materialFromArgument) {
        this.size = sizeFromArgument;
        this.color = colorFromArgument;
        this.material = materialFromArgument;
    }
}
const poloTshirt = new T_shirt("XL", "red", "cotton");
const poloTshirt2 = {
    size: "L",
    color: "green",
    material: "polyester",
}
console.log(poloTshirt.size);
console.log(poloTshirt.color);
console.log(poloTshirt.material);

console.log(poloTshirt2.size);
console.log(poloTshirt2.color);
console.log(poloTshirt2.material);

