//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?

var numb=Number(prompt("Lütfen bir sayı giriniz."));

function calculate(numb){
    if(numb>0){
        document.write("Pozitif bir sayı girdiniz." + "<br/>")
    }else if(numb<0){
        document.write("Negatif bir sayı girdiniz." + "<br/>")
    }else{
        document.write("Lütfen pozitif veya negatif bir sayı giriniz." + "<br/>")
        
    }
}

document.write("Girilen sayı :" + numb + "<br/>")
document.write(calculate(numb) )