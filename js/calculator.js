//Mobile menu
const mobileMenuHandle = document.querySelector('.mobile-menu');

mobileMenuHandle.addEventListener('click', function() {
  const menu = document.querySelector('.navigation-list');
  menu.classList.toggle('mobile-menu-shown');
});

// Calculator functions
var buttons = document.querySelectorAll(".button-calc");
var resultField = document.querySelector(".resultNumber");
var buttonDel = document.querySelector(".button-del");
var operan = document.querySelectorAll(".operation");
var oldNum = "";
var operation = "";
var equal = document.querySelector(".equal");
var finResul = "";

buttons.forEach(function(element) {
element.addEventListener("click", function(){
  if (resultField.textContent == finResul) {
    resultField.textContent = "";
    var temp = element.getAttribute("data-value");
  resultField.textContent = resultField.textContent + temp;
  } else {
    var temp = element.getAttribute("data-value");
    resultField.textContent = resultField.textContent + temp;
  }
})
})


buttonDel.addEventListener("click", function(){
  resultField.textContent = "";
})

operan.forEach(function(element) {
  element.addEventListener("click", function(){
    oldNum = resultField.textContent;
    resultField.textContent = "";
    operation = element.getAttribute("data-operation");
  })
})
// operan.addEventListener("click", function(){
//   oldNum = resultField.textContent;
//   resultField.textContent = "";
//   operation = this.getAttribute("data-operation")
// })

equal.addEventListener("click", function(){
  if (operation === "plus") {
    resul = Number(resultField.textContent);
    oldNum = Number(oldNum);
    finResul = oldNum + resul;
    resultField.textContent = finResul;
  } else if (operation === "minus") {
    resul = Number(resultField.textContent);
    oldNum = Number(oldNum);
    finResul = oldNum - resul;
    resultField.textContent = finResul;
  } else if (operation === "multi") {
    resul = Number(resultField.textContent);
    oldNum = Number(oldNum);
    finResul = oldNum * resul
    resultField.textContent = finResul;
  } else if (operation === "devide") {
    resul = Number(resultField.textContent);
    oldNum = Number(oldNum);
    finResul = oldNum / resul;
    resultField.textContent = finResul;
  }
})