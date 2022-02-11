const mobileMenuHandle = document.querySelector('.mobile-menu');

mobileMenuHandle.addEventListener('click', function() {
  const menu = document.querySelector('.navigation-list');
  menu.classList.toggle('mobile-menu-shown');
});

let mobileMenuFooter = document.querySelector('.mobile-menu-footer');

mobileMenuFooter.addEventListener('click', function() {
  let menuFooter = document.querySelector('.navigation-list-footer');
  menuFooter.classList.toggle('mobile-menu-footer-shown');
});

 // Add and remove Class

function gg() {
  var pica = document.querySelector(".background-intro").classList.toggle("bis");
  if (pica == true) {
     pica = false;
  } else {
     pica = true;
  }
}

var ves = setInterval("gg()", 6000);

// First hidden text when press house icon
var hidOne = document.querySelector(".firstHidden");
hidOne.style.display = "none";
function ShowHidOne() {
  if ( hidOne.style.display === "none") {
    hidOne.style.display = "block";
  } else if ( hidOne.style.display === "block") {
    hidOne.style.display = "none";
  }
}

// Second hidden text when press house icon
var hidTwo = document.querySelector(".secondHidden");
hidTwo.style.display = "none";
function ShowHidTwo() {
  if ( hidTwo.style.display === "none") {
    hidTwo.style.display = "block";
  } else if ( hidTwo.style.display === "block") {
    hidTwo.style.display = "none";
  }
}