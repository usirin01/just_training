/**
 * 
 */
let marka = ""; 
let model = "";
let renk = "";
let yil = "";
let mudavim = "";
if (marka == "bmw"){
    if(renk == "kirmizi"){
        if(model >=2010 && model <= 2019){
            console.log("KABUL!!! kirmizi ve 2010<model<2019 ");
        }
        else { console.log("ret") }
    }
 if (marka == "audi"){
        if ((model >= 2005 && model <=2010 ) | (model >= 2014 && model <=2020)){
            console.log("KABUL !!! audi ve 2005<model<2010 veya 2014<model< 2020" );
        }
        else {console.log("ret")}
 if (marka == "vw"){
             if ((renk =="siyah") && (model <= 2018) && (model >=2001)){
                 console.log("KABUL !!! vw ve siyah 2001<model<2018");
             } else {console.log("ret")}
         }
            else if (yil == 2021){
             if(marka == "bmw" && model == 2021 && renk == "siyah"){
                 console.log("KABUl !!! bu yil geldiniz")
             }
            else if (mudavim <= 5){
                 console.log(" KABUL mudavim hosgeldin")
             }
         }
    }
}


 
