let array = [1, 4, 35, 4, 6, 234];

array.forEach((element) => console.log(element));

const findmax = (element) => {
    max = element;
    if (element > max) max = element;
}

const output = array.filter(x=>x%2!==0);

console.log(output);
array.forEach((element) => findmax(element));


