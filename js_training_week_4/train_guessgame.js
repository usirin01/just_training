/**
 * First step, we want to entry ny number by user
 */

var wagonnumber, userguess, userright = 1;
wagonnumber = Math.round((Math.random()*10) + 1);
i = 0;


    userguess = parseInt(prompt("please guess, which car ahmet is in ?"));
    if (userguess < wagonnumber)
    {
        //document.getElementById("aaa") = "Ahmet is in front of the wagons of the train <br>";
        document.write("Ahmet is in front of the wagons of the train <br>");
    }
    if (userguess > wagonnumber)
    {
        //document.getElementById("bbb") = "Try again,he is behind the train <br>";
        document.write("Try again,he is behind the train <br>");
    }
    if (userguess == wagonnumber)
    {
        //document.getElementById("ccc") = "<strong>Congratulations You found him !!! <br>";
        document.write("<strong>Congratulations You found him !!!  <br>" + wagonnumber);
        //document.getElementById("ddd") = "Found it on the" + userright + "try your score is" ;
        document.write(userright + "try your score is");
    }
userright ++;

while ((userguess != wagonnumber) && userright < 5)
if (userright > 4)
{
    //document.getElementById("eee") = "<strong>GAME OVER! Try Again !!!" + userattempt + "<br>";
    document.write("<strong>GAME OVER! Try Again !!! Ahmet was in the" + wagonnumber + ". wagon <br>");
}