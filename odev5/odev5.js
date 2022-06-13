//ÖDEV-5
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren arrow function algoritmasını yazalım switch-case   new Date().getDay() 0=pazar 1=pazartesi

var day = new Date().getDay();

let enterDay = (day) =>{

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
}

enterDay(day);