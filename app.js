$(document).ready(function() {

  var addition = $('#plus5Clock');
  var subtraction = $('#minus5Clock');
  var minutesSession = $("#num");
  var count = parseInt(minutesSession.html() );

  var additionBreak = $('#add5Break');
  var subtractionBreak = $('#minus5Break');
  var minutesBreak = $("#breakNum");
  var countBreak = parseInt(minutesBreak.html() );

  var start = $('#start');

  $('#reset').hide();

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
    //Hides buttons: start, + and - 5minutes, and break buttons and time
    start.hide();
    addition.hide();
    subtraction.hide();
    $(".breakDiv").hide();

    var counter = setInterval (timer, 1000);

    function timer() {
      count-=1;
      if (count>=0) {
        minutesSession.html(count);
      } else {
        clearInterval(counter);
      }
    }
  });

// //Counts down the break time, when session time is over
//   start.click( function() {
//     //Hides buttons: start , + and - 5minutes
//     start.hide();
//     additionBreak.hide();
//     subtractionBreak.hide();
//
//     var counter = setInterval (timer, 1000);
//
//     function timer() {
//       countBreak-=1;
//       if (countBreak>=0) {
//         minutesBreak.html(count);
//       } else {
//         clearInterval(counter);
//       }
//     }
//   });


});
