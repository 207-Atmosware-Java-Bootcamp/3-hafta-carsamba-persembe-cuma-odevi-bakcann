//ÖDEV-7
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Immedia function algoritmasını yazalım switch-case   new Date().getDay()
// ()()

var day = new Date().getDay();
(function (enterDay){
    switch(enterDay){
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
})(day)