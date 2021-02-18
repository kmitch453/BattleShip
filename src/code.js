$("#myBoard button").click(function() {
  // disable all buttons
  $("#myBoard button").attr("disabled", "true");

  // remove disabled attribute from button clicked
  $(this).removeAttr("disabled");

  // remove class btn-secondary and add class btn-success
  $(this).removeClass("btn-secondary").addClass("btn-success");

  // get id of button clicked
  let clickedId = $(this).attr("id");
  // console.log(clickedId);

  /* Row Code */

  // get id of button one row down
  let rowDownNumber = parseInt(clickedId[1]) + 1;
  let rowDownID = clickedId[0] + "" + rowDownNumber;
  // console.log("rowDownID: " + rowDownID);

  // get id of button one row up
  let rowUpNumber = parseInt(clickedId[1]) - 1;
  // console.log("rowUpNumber: " + rowUpNumber);
  let rowUpID = clickedId[0] + "" + rowUpNumber;
  // console.log("rowUpID: " + rowUpID);

  // remove disabled attribute from button one row down
  let $tiles = $("#myBoard button");
  for (let i = 0; i < $tiles.length; i++) {
    if ($tiles[i].id === rowDownID || $tiles[i].id === rowUpID) {
      $tiles[i].disabled = false;
    }
  }

/* Column Code */


  // get id of button one column down
  let columnDownLetter = clickedId[0].charCodeAt(0);
  columnDownLetter += 1;

  // get back to new letter
  let newLetter1 = String.fromCharCode(columnDownLetter);
  let columnDownID = newLetter1 + "" + clickedId[1];
  // console.log("adjacentColumnID: " + adjacentColumnID);


  // get id of button one column up
  let columnUpLetter = clickedId[0].charCodeAt(0);
  columnUpLetter -= 1;

  // get back to new letter
  let newLetter2 = String.fromCharCode(columnUpLetter);
  let columnUpID = newLetter2 + "" + clickedId[1];


  // remove disabled attribute from button one column down
  for (let i = 0; i < $tiles.length; i++) {
    if ($tiles[i].id === columnDownID || $tiles[i].id === columnUpID) {
      $tiles[i].disabled = false;
    }
  }
});
