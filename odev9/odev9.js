//ÖDEV-9
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Anonymous function algoritmasını yazalım switch-case   new Date().getDay()
// let deneme= function (){ }

let day = new Date().getDay();

var enterDay = function(day){
    switch(day){

        case 0:
            document.write("Sunday");
            break;

        case 1:
            document.write("Monday");
            break;

        case 2:
            document.write("Tuesday");
            break;

        case 3:
            document.write("Wednesday");
            break;

        case 4:
            document.write("Thursday");
            break;

        case 5:
            document.write("Friday");
            break;

        case 6:
            document.write("Saturday");
            break;


    }

};

enterDay(day);