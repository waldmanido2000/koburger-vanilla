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
const priceElement = document.getElementById("total");
// create elements in dom //
const koburgerUi = document.getElementById("main");
function addElement(parentId, cost) {
  const parent = document.getElementById(parentId);
  const numOfChildren = Number(parent.childElementCount);
  const element = document.createElement("div");
  element.setAttribute("id", parentId + numOfChildren);
  parent.appendChild(element);
  parent.style.height = "fit-content";
  totalCost = totalCost + cost;
  reprice();
}
// remove elements in dom //
function removeElement(parentId, cost) {
  const parent = document.getElementById(parentId);
  const numOfChildren = Number(parent.childElementCount);
  if (numOfChildren > 0) {
    parent.removeChild(parent.lastChild);
    totalCost = totalCost - cost;
    reprice();
  }
}
//price calculation //
function reprice() {
  priceElement.innerHTML = totalCost;
}
// confirmation //
function confirm() {
  const vegan = Number(
    document.getElementById("canvas-vegan").childElementCount
  );
  const meat = Number(document.getElementById("canvas-meat").childElementCount);
  if (vegan + meat === 0) {
    alert("you must add at least one patty");
  } else {
    const order = document.createElement("div");
    order.setAttribute("id", "order-details");
    const closeButton = document.createElement("span");
    closeButton.setAttribute("id", "close-button");
    closeButton.setAttribute("onclick", "reset()");
    closeButton.innerHTML = "X";
    const orderHeader = document.createElement("h3");
    orderHeader.innerHTML = "your order details";
    const orderDetails = document.createElement("p");
    orderDetails.innerHTML = "you order cost is: " + totalCost;
    order.append(closeButton, orderHeader, orderDetails);

    const lettuce = Number(
      document.getElementById("canvas-lettuce").childElementCount
    );
    koburgerUi.appendChild(order);
  }
}
// reset //
function reset() {
  const canvas = document.getElementById("canvas");
  totalCost = 0;
  priceElement.innerHTML = totalCost;
  canvas.innerHTML = "";
  document.getElementById("order-details").remove();
  canvas.insertAdjacentHTML(
    "afterbegin",
    `<div id="top-bun"></div>
                    <div id="canvas-supplements">
                        <div id="canvas-lettuce"></div>
                        <div id="canvas-onion"></div>
                        <div id="canvas-tomato"></div>
                        <div id="canvas-cheese"></div>
                        <div id="canvas-pickles"></div>
                    </div>
                
                    <div id="canvas-patties">
                        <div id="canvas-vegan"></div>
                        <div id="canvas-meat"></div>
                    </div>
                    <div id="bottom-bun"></div>`
  );
}
