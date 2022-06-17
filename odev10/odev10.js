//ÖDEV-10
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye çalışalım bizim tahmin sayımız 5 olsun eğer biz sayıdan büyükse büyük tahmin eğer sayıdan küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?

var counter =1;
var number,random;

number=Number(prompt("1ile 10 arasında bir sayı giriniz :"));
random=Math.round(Math.random()*9+1);

function checkIfTrue(number){
    while(random!=number){
        if(number<random){
            counter++;
            alert("Küçük bir sayı girdiniz.Lütfen tekrar sayı giriniz.");
            number=Number(prompt(+number+"Bu sayıdan daha büyük bir sayı giriniz."));
        }else{
            counter++;
            alert("Büyük bir sayı girdiniz. Lütfen tekrar sayı giriniz.")
            number=Number(prompt(+number+"Bu sayıdan daha küçük bir sayı giriniz."));
        }
    }
    document.write("Doğru tahminde bulundunuz:"+number+"<br/>" +counter+". deneyişinizde tahmin edebildiniz.");
}

checkIfTrue(number);
