// When the user clicks on the dots, open the popup

// function handlePopup(event) {
//   // To use this function replace all of the "onclick" elements in spectrum that call popupFunction# with onclick="handlePopup(event)";
//   resetPopups();

//   var elementID = event.target.id;
//   var popupPosition = elementID.substr(elementID.length - 1);

//   var popupElement = document.getElementById("myPopup" + popupPosition);
//   popupElement.classList.toggle("show" + popupPosition);
// }

function popUpFunction1() {
  resetPopups();
  var popup1 = document.getElementById("myPopup1");
  popup1.classList.toggle("show1");
}

function popUpFunction2() {
  resetPopups();
  var popup2 = document.getElementById("myPopup2");
  popup2.classList.toggle("show2");
}

function popUpFunction3() {
  resetPopups();
  var popup3 = document.getElementById("myPopup3");
  popup3.classList.toggle("show3");
}

function popUpFunction4() {
  resetPopups();
  var popup4 = document.getElementById("myPopup4");
  popup4.classList.toggle("show4");
}

function popUpFunction5() {
  resetPopups();
  var popup5 = document.getElementById("myPopup5");
  popup5.classList.toggle("show5");
}

// Close the popups when a new one is opened

function resetPopups() {
  var popup1 = document.getElementById("myPopup1");
  popup1.classList.remove("show1");
  var popup2 = document.getElementById("myPopup2");
  popup2.classList.remove("show2");
  var popup3 = document.getElementById("myPopup3");
  popup3.classList.remove("show3");
  var popup4 = document.getElementById("myPopup4"); 
  popup4.classList.remove("show4");
  var popup5 = document.getElementById("myPopup5"); 
  popup5.classList.remove("show5");
}



