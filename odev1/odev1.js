//ÖDEV-1
//y=3x+4k ==> 1.dereceden 2 bilinmyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?



var x= Number(prompt("x değeri giriniz :"));
var k= Number(prompt("k değeri giriniz :"));


function calculate(x,k){

    document.write("y=3x+4k denklemi için girilen x ve k değerli aşağıdadır:"+"<br/>");
    document.write("Girilen x değeri :" + x + "<br/>");
    document.write("Girilen k değeri :" + k + "<br/>");

    return 3*x + 4*k;
}

document.write("y=" + calculate(x,k));