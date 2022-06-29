let array=["asd","asd"];

let newarray=array.map(element => {
        return element.split("").reverse().join("");
    })
    console.log(newarray);


stringArray=["cat","dogfish","whale"];

let cubeArray=stringArray.map((element,index) => {
    return `${index}-${element}-${element.length**2}`;
})
console.log(stringArray);
console.log(cubeArray);

let numberArray=[4,0,2,1,3,3]; //3,4,2,0,1,1 => y[i]=x(x[i])

let modifiedArray=numberArray.map((el,i,arr)=>{
    return arr[el];
    
})
console.log(modifiedArray);