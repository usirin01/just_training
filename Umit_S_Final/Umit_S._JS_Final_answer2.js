/**
 * Harf Degerleri
 * 0 -55 "F"
 * 56-65 "E"
 * 66-75 "D"
 * 76-85 "C"
 * 86-95 "B"
 * 96-100 "A"
 */

const students = [
    "Halil", 80,
    "Mahmut", 77,
    "Hülya", 88,
    "Hayri", 95,
    "Ali", 68
];
var point1 = students.splice(1,1);
var point2 = students.splice(2,1);
var point3 = students.splice(3,1);
var point4 = students.splice(4,1);
var point5 = students.splice(5,1);

let p1 = Number(point1);
let p2 = Number(point2);
let p3 = Number(point3);
let p4 = Number(point4);
let p5 = Number(point5);

var person = students.length

var average = (p1 + p2 + p3 + p4 + p5)/person

console.log(average);

for (var i = 0; i < person; i ++){
    if ( 0 < average <= 55){
        console.log("F")
    }
    if ( 55 < average <= 65){
        console.log("E")
    }
    if ( 65 < average <= 75){
        console.log("D")
    }
    if ( 75 < average <= 85){
        console.log("C")
    }
    if ( 85 < average <= 95){
        console.log("B")
    }
    if ( 96 < average <= 100){
        console.log("A")
    }

}
