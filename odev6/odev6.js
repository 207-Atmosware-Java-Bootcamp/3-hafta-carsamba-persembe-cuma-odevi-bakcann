//ÖDEV-6
//Login userEmail,userPassword kullanıcıdan aldığımız değeri db ile karşılaştıracak eğer doğru ise adminFunction'a gönderecek 4 kalan haktan aşağı doğru düşecek eğer kalan hak sayımız 0 olursa kullanıcı bloke olsun
// dbUserEmail="deneme@gmail.com"
// dbUserPassword="root"

var dbUserEmail ="deneme@gmail.com";
var dbPassword ="root";

var email =prompt("Email giriniz :");
var password=prompt("Password giriniz :");

function checkIfTrue(){
  
    var counter = 4;

    for(var i=1; i<=4; i++){
        if(email==dbUserEmail && password==dbPassword){
            document.write("Giriş başarılı." + "<br/>");
            break;
        }else{
            counter--;
            email=prompt("Tekrardan email giriniz :");
            password=prompt("Tekrardan password giriniz :")
            if(counter==0){
                document.write("Deneme hakkınız kalmamıştır.");
                break;
            }
        }
    }
}

checkIfTrue();