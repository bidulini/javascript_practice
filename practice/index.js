// // const otherWay = (n) => {

// //     n = n + "";
// //     return n.split("").reverse().join("");
// // }

// // console.log(otherWay(23335263));

// // const palindrome = (x) => {

// //     const y = x.split("").reverse().join("");
// //     if (x === y) return console.log("PALINDROME!");
// //     else return console.log("NOT A PALINDROME");
// // }

// // palindrome("anavolimilovana");

// // const alphaOrder = (string) => {

// //     return string.split("").sort().join("");
// // }
// // console.log(alphaOrder("Abida"));

// const upperCase = (string) => {

//     let array1 = string.split(" ");
//     let newarray = [];

//     for (let i = 0; i < array1.length; i++) {
//         newarray.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
//     }

//     newarray.join(" ");

//     newarray.forEach(element => {
//         console.log(element);
//     });

// }

// upperCase("abida se zove mala devojcica");

// const longerWord = (string) => {

//     let sentence = string.match(/\w[a-z]{0,}/gi);
//     let maxword = sentence[0];
//     sentence.forEach(element => console.log(element));

//     for (let i = 0; i < sentence.length; i++) {
//         if (maxword.length < sentence[i].length)
//             maxword = sentence[i]
//     }
//     return maxword;


// }
// console.log(longerWord("Love me So Muchhh"));

// const vowelCount = (string) => {

//     vowels = "aeiouAEIOU";
//     let vowCount = 0;

//     for (let i = 0; i < string.length; i++) {
//         if (vowels.indexOf(string[i]) !== -1) vowCount += 1;

//         return vowCount;
//     }
// }

// console.log(vowelCount("Hana je veoma lepa devojcica mamina."));

// const identityMatrix = (n) => {

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i === j) console.log("1");
//             else console.log("0")
//         }
//         console.log("*******");
//     }
// }

// identityMatrix(2);


// const secondMaxMin = (array) => {

//     array.sort();
//     let smin=array[1];
//     let max=array.length-2;
//     let smax=array[max];
//     console.log("Second max is: "+smax+" and second min: "+smin);

// }
// arr=[0,4,2,5,7,5,8,7,9];
// secondMaxMin(arr);

// const largerThanNumber = (n, array) => {

//     newarray = [];
//     array.forEach(element => { if (element > n) newarray.push(element) });

//     newarray.forEach(element => console.log(element))
// }

// niz = [0, 6, 33, 4, 77, 5, 88, 678, 254];
// largerThanNumber(5, niz);


// const checkTheLetter = (string, letter) => {

//     array=string.split('');
//     occ=0;
//     array.forEach(element=> {
//         if (element===letter) occ++;
//     })
//     console.log("Occurence: "+occ);
// }

// checkTheLetter("www.abida.com", "a");

// const sortArray = (array) => {

//     var swapp;
//     var n = array.length-1;
//     var x=array;
//     do {
//         swapp = false;
//         for (var i=0; i < n; i++)
//         {
//             if (x[i] < x[i+1])
//             {
//                var temp = x[i];
//                x[i] = x[i+1];
//                x[i+1] = temp;
//                swapp = true;
//             }
//         }
//         n--;
//     } while (swapp);

//     x.forEach(element => {console.log(element)});
// }
// array = [1, 53, 64, 77, 2, 0, 45, 8, 2, 3, 97];
// sortArray(array);
// console.log(array.sort(function(a,b) {return(b-a)}));

// const exponent = (number, exponent) => {

// }

