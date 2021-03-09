var countDownDate=new Date("feb 26 2021 19:53:23").getTime();
//update the count down every second
var x=setInterval(function(){
    //get todays date and time
    var now=new Date().getTime();
    //find the distance between now and the count down
    var distance=countDownDate-now;
    //time calculations for the days hours ,minutes and second
    var days= Math.floor(distance/(1000*60*60*24));
    var hours=Math.floor((distance%(distance*60*60*24))/(1000*60*60));
    var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
    var second=Math.floor((distance%(1000*60))/1000);
    //display the result in an element
    // document.getElementById('demo').innerHTML = days +"d" + hours + "h"+ minutes + "m" + second + "s";
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + second + "s ";

    // if the countdown is finish write this
    if(distance<0){
        clearInterval(x);
        document.getElementById('demo').innerHTML='EXPIRED';
    }

},1000);