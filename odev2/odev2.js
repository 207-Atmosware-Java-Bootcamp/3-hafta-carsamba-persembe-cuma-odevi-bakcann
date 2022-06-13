//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(x*9/5)+32

var derece = Number(prompt("Lütfen bir derece giriniz :"));
var fahrenheit ;

function calculate(derece){
    fahrenheit=(derece*(9/5)+32);
    return fahrenheit;

}
document.write("Girilen santigrat cinsinden derece :" + derece + "<br/>");
document.write("Fahrenheit karşılığı :" + calculate(derece) + "<br/>");