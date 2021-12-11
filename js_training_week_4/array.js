/**
 * ARRAY METHODS
 * pop()------------------------
 * push()-----------------------
 * shift()----------------------
 * unshift()
 * sort()------------------------
 * reduce()
 * split()
 * filter()
 * indexOf()---------------------
 * lastIndexOf()-----------------
 * includes()--------------------
 * map()
 * foreach()
 * reverse()
 * join()------------------------
 * slice()
 * some()
 * toString()
 * concat()----------------------
 * trim() bosluklari siler
 */

 let nameList = ["Ahmet", "Mehmet", "Ayse", "Zeynep"];

//console.log(nameList[1]);
//console.log(nameList.length);

//nameList.push("Jale");
//console.log(nameList);

//nameList.shift();
//console.log(nameList); "shift" ilk elemani cikariyor "pop" son elemani cikariyor

nameList.unshift();
console.log(nameList);

//nameList.pop();
//console.log(nameList);

//nameList.sort();
//nameList.reverse();
//console.log(nameList);

// let numberList = [4, 6, 1, 9, 0, 23];

// numberList.sort(function (a,b) {
//     return (a-b);
// });

// console.log(numberList);

///////////////////////////////////////////



//console.log(nameList.indexOf("Mehmet1"));

//let result = nameList.indexOf("Mehmet1");

//if (result == -1) {
//    console.log("Mehmet burada yok");
//} else{
//    console.log(nameList[1].toUpperCase());
//}

////////////////////////////////////////////

let result = nameList.lastIndexOf("Mehmet");
console.log(result);

//let result = nameList.includes("Mehmet");
//console.log(result);

// let nameList2 = ["Osman", "Bedir"];
// console.log(nameList.concat(nameList2));
// //now arrays are seperate
// console.log(nameList2);
// console.log(nameList);

// //but now arrays together
// let newNameList = nameList.concat(nameList2);
// console.log(newNameList);


//to take some element in the array
// console.log(nameList.slice(1,2));
// console.log(nameList.slice(1,3));
// console.log(nameList.slice(1));
// console.log(nameList.slice(2));
// console.log(nameList.splice(1, 2));

//for one person
// nameList[0];
// console.log(nameList[0]);
// console.log(nameList[0].toUpperCase());
// ///////////////////////////////////////////

// //
for(let i = 0; i < nameList.length; i++){
    console.log(nameList[i].toUpperCase());
}

/**
 * STRING METHODS
 * toUpperCase()
 * toLowerCase()
 */

// let fruit = "Apple";
// //to choose element
// console.log(fruit.charAt(2));
// //element unique code
// console.log(fruit.charCodeAt(4))
// //you can change element to other element
// console.log(fruit.replace("p", "x"));

// let myUrl = "üstad";

// let result = myUrl.indexOf("ü");

// if(result == -1){
//     //ü harfi yok baska islem yapmiyorum
// }else{
//     myUrl = myUrl.replace("ü", "u");
// }
// console.log(myUrl);

let myText = "007";
let result = myText.padStart(5,"00" );
console.log(result);














