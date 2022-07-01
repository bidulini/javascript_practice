// writing a program for a magical bear beast
// should have five properties
// number, string, boolean, array, function

const roar = () => {
    console.log("wRaaAAAaaAAR!");
}
const color="brown";
//we will add the color to the properties below

const bear = {
    
    name:"felix",
    age: "32",
    hungry: true,
    color,
    kidsAge:[3,2,3],
    makeSound: roar,
    
};
bear.makeSound(); //we're invoking the function with the name from the object