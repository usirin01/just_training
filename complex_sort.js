function PushButton()
{

var a = document.getElementById("number-1").value;
var b = document.getElementById("number-2").value;
var c = document.getElementById("number-3").value;
var d = document.getElementById("number-4").value;

var dizi = new Array(a, b, c);
document.write(dizi.sort(function(a,b){return b-a}));
console.log(dizi);

}
