$(document).ready(function() {

  //Defaults player's turn is X, while computer's is O
  var personTurn="X";
  var computersTurn="O";
  //Array stores values, that we will check later for a winner
  var turns=["#","#","#","#","#","#","#","#","#"];
  //Keeps track if it is the computer's turn (false when person's turn)
  var gameOn = false;
  //Keeps track of all spots, max = 9
  var count = 0;

  //Reset the game after each win or square
  function reset() {
    turns = ["#","#","#","#","#","#","#","#","#"];
    count = 0;
    $('.tic').text("#").css("background-color", "#46484a");
    setTimeout(function() {
      $("h2").text("");
    }, 1500);
    gameOn = true;
  };

  //Change player's turn to O and computer's to X
  $('#turnO').click(function() {
    personTurn="O";
    computersTurn = "X";
    $('#turnX').removeClass('btn-active');
    $('#turnO').addClass('btn-active');
    reset();
  });

  //Change player's turn to X and computer's to O
  $('#turnX').click(function() {
    personTurn="X";
    computersTurn="O";
    $('#turnO').removeClass('btn-active');
    $('#turnX').addClass('btn-active');
    reset();
  });

  //Player choosing spot
  $('.tic').click(function() {
    var slot = $(this).attr('id');
    playerTurn (personTurn, slot);
  });

  //Person plays
  function playerTurn (personTurn, id) {
    var spotTaken = $("#"+id).text();
    if (spotTaken === "#") {
      count++;
      $("#" + id).text(personTurn);
      $("#"+ id).css("background-color", "rgba(45, 86, 134, 0.77)");
      var taken = true;
      turns[id] = personTurn;

      winCondition (turns, personTurn);

      if (gameOn===false) {
        computerTurn();
        winCondition(turns, computersTurn);
      }
    }
  };

  //Computer plays
  function computerTurn() {
    //Used to brake while loop
    var taken = false;
    while(taken === false && count !== 5) {
      //Generate computer's random turn
      var computersMove = (Math.random()*10).toFixed();
      var move = $("#"+ computersMove).text();
      if (move === "#") {
        $("#"+ computersMove).text(computersTurn);
        $("#"+ computersMove).css("background-color", "rgba(45, 86, 134, 0.77)");
        taken=true;
        turns[computersMove] = computersTurn;
      }
    }
  }

  function winCondition (turnArray, currentTurn) {
    var infoText = $('h2');
    // Option 1: All the same in top row
    if (turnArray[0]===currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
      gameOn = true;
      reset();
      infoText.text("Player " +currentTurn + " wins");
    }
    // Option 2: All the same in middle row
    else if (turnArray[3]===currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
      gameOn = true;
      reset();
      infoText.text("Player " +currentTurn + " wins");
    }
    // Option 3: All the same in bottom row
    else if (turnArray[6]===currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      infoText.text("Player " +currentTurn + " wins");
    }
    // Option 4: All the same in left column
    else if (turnArray[0]===currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
      gameOn = true;
      reset();
      infoText.text("Player " +currentTurn + " wins");
    }
    // Option 5: All the same in middle column
    else if (turnArray[1]===currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
      gameOn = true;
      reset();
      infoText.text("Player " +currentTurn + " wins");
    }
    // Option 6: All the same in right column
    else if (turnArray[2]===currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      infoText.text("Player " +currentTurn + " wins");
    }
    // Option 7: All the same diagonal left-top to right-bottom
    else if (turnArray[0]===currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      infoText.text("Player " +currentTurn + " wins");
    }
    // Option 8: All the same diagonal right-top to left-bottom
    else if (turnArray[2]===currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
      gameOn = true;
      reset();
      infoText.text("Player " +currentTurn + " wins");
    }
    // Option 9: Tie
    else if (!(turnArray.includes("#"))) {
      gameOn = true;
      reset();
      infoText.text("It's a tie");
    } else {
      gameOn = false;
    }
  }


});
