  /* available places to shoot */
  const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  /* functions to verify input */

  let checkLetter = (value) => {
    for (let i = 0; i < columns.length; i++) {
      if (value[0] === columns[i]) {
        return true;
      }
    }

    return false;
  };

  let checkNumber = (value) => {
    for (let i = 0; i < rows.length; i++) {
      if (value[1] === rows[i]) {
        return true;
      }
    }

    return false;
  };

  /* place ships */
  if (location.pathname.split("BattleShip")[1] == "/player1.html") {
    /* Make the modal not close clicking on outside of modal : Stack Overflow https://stackoverflow.com/questions/22207377/disable-click-outside-of-bootstrap-modal-area-to-close-modal#:~:text=On%20Options%20chapter%2C%20in%20the,will%20prevent%20closing%20the%20modal. */
    $('.modal').modal({backdrop: "static", keyboard: false});
    let numberOfShips = 0;

    document.getElementById("placeShips").onclick = function() {
      numberOfShips = document.getElementById("numberOfShips").value;

      if (numberOfShips > 0 && numberOfShips < 7) {
        $(".modal").modal("hide");
        // call placeShips() method
        // after placeShips()

        for (let i = 1; i <= numberOfShips; i++) {
          let column = '<div class="col-md-4"><h3>Ship ' + i + '</h3><form><div class="form-group"><label for="startingCoordinate-' + i + '">Starting Coordinate:</label><input type="text" class="form-control" id="startingCoordinate-' + i + '" placeholder="Enter starting coordinate for ship (i.e. \'A1\')"></div><div class="form-group"><label for="formGroupExampleInput2">Orientation:</label><input type="text" class="form-control" id="formGroupExampleInput2" placeholder="type \'horizontal\' or \'vertical\'"></div><button id="shipButton-'+ i + '" type="button" class="btn btn-primary">Place!</button></form></div>';
          $("#placeShipsRow").append(column);
        }
      }
      else if (document.getElementById("modalBody").lastChild !== document.querySelector(".modalError")) {
        let p = document.createElement("p");
        p.innerText = "Please give an integer between 1 and 6 (inclusive).";
        p.classList.add("modalError");

        document.getElementById("modalBody").append(p);
      }
    };

    /* when ship buttons are clicked */
      document.querySelector(".btn-primary").onhover = function() {
        console.log("Hello World");
      };

      $("button").hover(function() {
        console.log("JJ");
      });


  }


  /* Place Ships should make with no button */

  document.querySelector("#place-box .btn").onclick = function() {
    let value = document.getElementById("shipPlacement").value.toUpperCase();
    let isValidLetter = checkLetter(value);
    let isValidNumber = checkNumber(value);

    if (value.length !== 2) {
      alert("You must enter a string of exactly two characters that comprises a letter followed by a number (for example 'A1')");
    }
    else if (!isValidLetter) {
      alert("You entered an invalid first character. Your first character must be a letter from A-J");
    }
    else if (!isValidNumber) {
      alert("You entered an invalid second character. Your second character must be a number from 1-10");
    }
    else if (document.getElementById(value).classList.contains("btn-success")) {
      alert("There is already a ship on " + value);
    }
    else {
      /* How to add a class to an element in JavaScript : https://stackoverflow.com/questions/507138/how-do-i-add-a-class-to-a-given-element */
      document.getElementById(value).classList.remove("btn-secondary");
      document.getElementById(value).classList.add("btn-success");
    }

    document.getElementById("shipPlacement").value = "";
  }

  /* Fire at Opponent Ships */

  document.querySelector("#fire-box .btn").onclick = function() {
    let value = document.getElementById("playerGuess").value.toUpperCase();
    let isValidLetter = checkLetter(value);
    let isValidNumber = checkNumber(value);

    if (value.length !== 2) {
      alert("You must enter a string of exactly two characters that comprises a letter followed by a number (for example 'A1')");
    }
    else if (!isValidLetter) {
      alert("You entered an invalid first character. Your first character must be a letter from A-J");
    }
    else if (!isValidNumber) {
      alert("You entered an invalid second character. Your second character must be a number from 1-10");
    }
    else {
      alert("You entered a valid shot");
      // Call fire/miss methods

      function changePlayerTurn(url) {
        window.location.href = url;
      }

      /* When player turn is over */

      /* How to update page href,  Stack Overflow https://stackoverflow.com/questions/9029881/open-page-automatically-using-javascript/9029931 */
      if (location.pathname.split("BattleShip")[1] == "/player1.html" || location.pathname.split("BattleShip")[1] == "/new_player1.html") {
        setTimeout(changePlayerTurn, 750, "./player2.html");
      }
      else if (location.pathname.split("BattleShip")[1] == "/player2.html") {
        setTimeout(changePlayerTurn, 750, "./new_player1.html");
      }

    }

    document.getElementById("playerGuess").value = "";
  }
