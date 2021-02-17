import numberOfShips from "./src/placeShips";

console.log(numberOfShips);

if (location.pathname.split("BattleShip")[1] == "/player1.html" || location.pathname.split("BattleShip")[1] == "/player2.html") {

  /* available places to shoot */
  const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  /* When player turn is over */

  /* How to update page href,  Stack Overflow https://stackoverflow.com/questions/9029881/open-page-automatically-using-javascript/9029931 */

  /* window.location.href = "http://externalpage.com"; */

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

      if (location.pathname.split("BattleShip")[1] == "/player1.html") {
        console.log(location.pathname.split("BattleShip"));
        setTimeout(changePlayerTurn, 2000, "./player2.html");
      }
      else if (location.pathname.split("BattleShip")[1] == "/player2.html") {
        setTimeout(changePlayerTurn, 2000, "./player1.html");
      }

    }

    document.getElementById("playerGuess").value = "";
  }
}
