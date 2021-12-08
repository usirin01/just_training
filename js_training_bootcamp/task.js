/**
 * js bootcamp
 */
//task 1//////////////////////////////////
for (var i=1; i <=100; i++)
{
    if (i%3 == 0)
    {
        console.log(i + "--czz");
    }
    if (i%5 == 0)
    {
        console.log(i + "--bzz");
    }
    if (i%3 == 0 && i%5 == 0)
    {
        console.log(i + "<--czz_bzz>");
    }

}

// task 2//////////////////////////////////
let star = "*" ;

for (let index = 0; index <= 5; index++)
{
    console.log(star.repeat(index));
}
    
//task 3////////////////////////////////// eger bu islemi "let degiskeni ile yapmis olsaydik kod calismaz"
let sayi, bolen 

for (sayi = 2; sayi < 100; sayi ++)
{
    for (bolen = 2; bolen < 100; bolen ++)
    {
        if (sayi % bolen === 0)
        break;
    }
    if (sayi == bolen)
    {
        console.log(sayi);
    }
}












