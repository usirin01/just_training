
// let nameList = ["Red", "Green", "White", "Black"];
// console.log(nameList);
// console.log((nameList.join("+")).toLowerCase());


// var dizi = ["1", "2", "3","4","5","6","7","8","9"]; // 9 değerli dizi oluşturuyoruz
// var can = Math.floor(Math.random() * dizi.length); // değişkene dizi uzunluğunda rasgele değer seçtiriyoruz
// console.log(can);  // ekrana yazdırıyoruz.




//Verilen iki Array'in elemanlarini karsilastiriniz ve iki dizide de ortak olan elemanlarin toplamini bulunuz. 

let array1 = [1,5,2,-6,23,100];
let array2 = [1,15,32,-6,213,100];
var toplam = 0;

for (var index = 0; index < array1.length; index++) {
    if (array2.includes(array1[index])) 
    {
        //console.log(index);
        //console.log(array1[index]);
        toplam = toplam + array1[index];
        console.log(toplam);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Verilen bir cümlede verilen bir kelimenin kaç defa geçtiğini bulan bir program yazınız. 
//Yapilan programda aranan kelimeyi ve kaynak cümleyi gireceğiniz input alanlari oluşturacaksınız.

// let sentence = "HiCoders gönüllüleri, HiCoders egitmenleri, HiCoders yöneticileri ve HiCoders ögrencileri olarak, HiCoders JS BootCamp’i icra ediyoruz."
// let clue = sentence.split(" ")
// let toplam = 0;
// console.log(sentence); //deneme amacli degisken ve alttaki kod split otomatik olarak dizi olarak atandi console da özelik farki görünüyor
// console.log(clue);

// for (let index = 0; index < clue.length; index++) 
// {
    
//     if (clue[index].includes("HiCoders"))
//     {
//         toplam ++;
//         console.log(toplam);
        
//     }
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////