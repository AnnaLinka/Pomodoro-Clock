$(document).ready(function() {

  var addition = $('#plus5Clock');
  var subtraction = $('#minus5Clock');
  var minutesSession = $("#num");
  var sessionTitle = $('#sessionTitle');
  var count = parseInt(minutesSession.html());

  var additionBreak = $('#add5Break');
  var subtractionBreak = $('#minus5Break');
  var minutesBreak = $("#breakNum");
  var breakTitle = $('#breakTitle');
  var countBreak = parseInt(minutesBreak.html() );

  var start = $('#start');
  var reset = $('#reset')

//On click susbtracts 5 minutes from session time
  subtraction.click(function (){
    //can not have negative time, so time have  to be more than 0
    if (count>5) {
      count-=5;
      minutesSession.html(count);
    }
  });

//On click adds 5 minutes to session time
  addition.click(function (){
      count+=5;
      minutesSession.html(count);
  });

//On click susbtracts 5 minutes from break time
  subtractionBreak.click(function (){
    //can not have negative time, so time have to be more than 0
    if (countBreak>5) {
      countBreak-=5;
      minutesBreak.html(countBreak);
    }
  });

//On click adds 5 minutes to break time
  additionBreak.click(function (){
      countBreak+=5;
      minutesBreak.html(countBreak);
  });

//Counts down the session time, after click on start
  start.click( function() {
    //Hides unecessery buttons
    reset.hide();
    start.hide();
    addition.hide();
    subtraction.hide();
    additionBreak.hide();
    subtractionBreak.hide();
    minutesBreak.hide();
    breakTitle.hide();

    var counter = setInterval (timer, 1000);
    count*=60;
    countBreak*=60;

    function timer() {
      count-=1;
      if (count===0) {
        clearInterval(counter);
        var startBreak = setInterval (breakTimer, 1000);
      }

      //changing counting into minutes and seconds
      if (count%60 >= 10){
        minutesSession.html(Math.floor(count/60) + ":" + count%60);
      } else {
        minutesSession.html(Math.floor(count/60) + "0" + ":" + "0"+ count%60);
      }

      // Counts down the break time, when session gets to 0
      function breakTimer(){

        sessionTitle.hide();
        breakTitle.show();
        minutesBreak.show();
        countBreak-=1;

        if (countBreak===0) {
          clearInterval(startBreak);
          reset.show();
        }

        if (countBreak%60 >= 10){
          minutesBreak.html(Math.floor(count/60) + ":" + count%60);
        } else {
          minutesBreak.html(Math.floor(count/60) + "0" + ":" + count%60);
        }
      }

    }

  });

  reset.click(function(){
    start.show();
    addition.show();
    subtraction.show();
    additionBreak.show();
    subtractionBreak.show();
    minutesBreak.show();
    breakTitle.show();
    count = 5;
    countBreak = 1;
    reset.hide();
  });




});
