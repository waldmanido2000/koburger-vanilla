// mobile menu starts //
function mobileMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// mobile menu ends //

// back to top starts //
// Get the button
let myButton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// back to top ends //

let totalCost = 0;
// create elements in dom //
const koburgerUi = document.getElementById("main");
function addElement(parentId, cost) {
  const parent = document.getElementById(parentId);
  const numOfChildren = Number(parent.childElementCount);
  const element = document.createElement("div");
  element.setAttribute("id", parentId + numOfChildren);
  parent.appendChild(element);
  parent.style.height = 'fit-content';
  totalCost = totalCost + cost;
  alert(totalCost);
}
// remove elements in dom //
function removeElement(parentId, cost) {
  const parent = document.getElementById(parentId);
  const numOfChildren = Number(parent.childElementCount);
  if(numOfChildren>0){
    parent.removeChild(parent.lastChild);
    totalCost = totalCost - cost;
  }
}
//price calculation //

