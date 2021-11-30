/**
 * ARRAY METHODS
 * pop()
 * push()
 * shift()
 * unshift()
 * sort()
 * reduce()
 * split()
 * filter()
 * lastIndexOf()
 * includes()
 * map()
 * foreach()
 * reverse()
 * join()
 * slice()
 * some()
 * toString()
 * concat()
 * trim() bosluklari siler
 */

/**
 * STRING METHODS
 * toUpperCase()
 * toLowerCase()
 */



//console.log(nameList[1]);
//console.log(nameList.length);

//nameList.push("Jale");
//console.log(nameList);

//nameList.shift();
//console.log(nameList);

//nameList.unshift();
//console.log(nameList);

//nameList.pop();
//console.log(nameList);

//nameList.sort();
//nameList.reverse();
//console.log(nameList);

let numberList = [4, 6, 1, 9, 0, 23];

numberList.sort(function (a,b) {
    return (a-b);
});

console.log(numberList);

///////////////////////////////////////////



//console.log(nameList.indexOf("Mehmet1"));

//let result = nameList.indexOf("Mehmet1");

//if (result == -1) {
//    console.log("Mehmet burada yok");
//} else{
//    console.log(nameList[1].toUpperCase());
//}

////////////////////////////////////////////

//let result = nameList.lastIndexOf("Mehmet");
//console.log(result);

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

let nameList = ["Ahmet", "Mehmet", "Ayse", "Zeynep"];
//to take some element in the array
// console.log(nameList.slice(1,2));
// console.log(nameList.slice(1,3));
// console.log(nameList.slice(1));
// console.log(nameList.slice(2));
// console.log(nameList.splice(1, 2));

//for one person
nameList[0];
console.log(nameList[0]);
console.log(nameList[0].toUpperCase());
///////////////////////////////////////////

//
for(let i = 0; i < nameList.length; i++){
    console.log(nameList[i].toUpperCase());
}














