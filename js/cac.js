//Mobile menu
const mobileMenuHandle = document.querySelector('.mobile-menu');

mobileMenuHandle.addEventListener('click', function () {
  const menu = document.querySelector('.navigation-list');
  menu.classList.toggle('mobile-menu-shown');
});

// Button HTML
function prHtml() {
  var btnHTML = document.querySelector(".menu-html");
  if (btnHTML.style.display === "block") {
    btnHTML.style.display = "none";
  } else {
    btnHTML.style.display = "block";
  }
}

// Button CSS
function prCss() {
  var btnCSS = document.querySelector(".menu-css");
  if (btnCSS.style.display === "block") {
    btnCSS.style.display = "none";
  } else {
    btnCSS.style.display = "block";
  }
}

// Button Java Script
function prJs() {
  var btnJS = document.querySelector(".menu-js");
  if (btnJS.style.display === "block") {
    btnJS.style.display = "none";
  } else {
    btnJS.style.display = "block";
  }
}

// Change the Img when press button
// var btnsImg = document.querySelectorAll(".btn-img")
// btnsImg.forEach(function(element){
//   element.addEventListener("click", function(){
//     var val = element.getAttribute("data-value");
//     if (val == "h1") {
//       document.querySelector(".img-cac").src = "pictures/Courses/HTML/HTML_Essential_Training.JPG";
//     } else if (val == "h2"){
//       document.querySelector(".img-cac").src = "pictures/Courses/HTML/HTML_Metadata_In_The_Head.jpg";
//     } else if (val == "h3") {
//       document.querySelector(".img-cac").src = "pictures/Courses/HTML/Learning_Web_Audio_And_Video.jpg";
//     } else if (val == "c1") {
//       document.querySelector(".img-cac").src = "pictures/Courses/CSS/Bootstrap_4_Essential_Training.jpg";
//     } else if (val == "c2") {
//       document.querySelector(".img-cac").src = "pictures/Courses/CSS/CSS_Layouts.jpg";
//     } else if (val == "c3") {
//       document.querySelector(".img-cac").src = "pictures/Courses/CSS/CSS_Design_Systems_And_Architectures.jpg";
//     } else if (val == "c4") {
//       document.querySelector(".img-cac").src = "pictures/Courses/CSS/CSS_Essential_Training.jpg";
//     } else if (val == "c5") {
//       document.querySelector(".img-cac").src = "pictures/Courses/CSS/Essentials_of_CSS_For_React_Developers.jpg";
//     } else if (val == "c6") {
//       document.querySelector(".img-cac").src = "pictures/Courses/CSS/Introduction_To_CSS.jpg";
//     } else if (val == "c7") {
//       document.querySelector(".img-cac").src = "pictures/Courses/CSS/Sass_Essential_Training.jpg";
//     } else if (val == "c8") {
//       document.querySelector(".img-cac").src = "pictures/Courses/CSS/Advanced_CSS_Media_Queries.jpg";
//     } else if (val == "j1") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/Interactive_Animations_With_CSS_and_JavaScript.jpg";
//     } else if (val == "j2") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/JavaScript_Async.jpg";
//     } else if (val == "j3") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/JavaScript_Best_Practices_For_Data.jpg";
//     } else if (val == "j4") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/JavaScript_Classes.jpg";
//     } else if (val == "j5") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/JavaScript_Enhancing_The_DOM.jpg";
//     } else if (val == "j6") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/JavaScript_Essential_Training.jpg";
//     } else if (val == "j7") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/JavaScript_Patterns.jpg";
//     } else if (val == "j8") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/JavaScript_Test-Driven_Development_ES6.jpg";
//     } else if (val == "j9") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/JavaScript_Web_Form_Programming.jpg";
//     } else if (val == "j10") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/Learning_ECMAScript_6+_ES6.jpg";
//     } else if (val == "j11") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/Learning_The_JavaScript_Language.jpg";
//     } else if (val == "j12") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/Learning_Vuex.jpg";
//     } else if (val == "j13") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/Vue_js_Working_With_Apis.jpg";
//     } else if (val == "j14") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/Vue_js_Essential_Training.jpg";
//     } else if (val == "j15") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/JQuery_Essential_Training.jpg";
//     } else if (val == "j16") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/JQuery_Building_An_Interface.jpg";
//     } else if (val == "j17") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/React_js_Building_An_Interface.jpg";
//     } else if (val = "j18") {
//       document.querySelector(".img-cac").src = "pictures/Courses/JS/React_js_Essential_Training.jpg";
//     }
//   })
// })
// function imgCac() {
//   var val = element.getAttribute("data-value");
//   if (val == "1") {
//     document.querySelector(".img-cac").src = "pictures/Courses/HTML/HTML_Essential_Training.JPG";
//   }  
// }

const btnsImg = document.querySelectorAll('.btn-img')

btnsImg.forEach(function (element) {
  element.addEventListener('click', function () {
    const basePath = 'pictures/courses/';
    const val = element.getAttribute('data-value');
    let picSrc = '';

    switch (val) {
      case 'h1':
        picSrc = 'html/h1.JPG';
        break;
      case 'h2':
        picSrc = 'html/h2.JPG';
        break;
      case 'h3':
        picSrc = 'html/h3.JPG';
        break;
      case 'c1':
        picSrc = 'css/c1.JPG';
        break;
      case 'c2':
        picSrc = 'css/c2.JPG';
        break;
      case 'c3':
        picSrc = 'css/c3.JPG';
        break;
      case 'c4':
        picSrc = 'css/c4.JPG';
        break;
      case 'c5':
        picSrc = 'css/c5.JPG';
        break;
      case 'c6':
        picSrc = 'css/c6.JPG';
        break;
      case 'c7':
        picSrc = 'css/c7.JPG';
        break;
      case 'c8':
        picSrc = 'css/c8.JPG';
        break;
      case 'j1':
        picSrc = 'js/interactive_animations_with_css_and_javascript.JPG';
        break;
      case 'j2':
        picSrc = 'js/javascript_async.JPG';
        break;
      case 'j3':
        picSrc = 'js/javascript_best_practices_for_data.JPG';
        break;
      case 'j4':
        picSrc = 'js/javascript_classes.JPG';
        break;
      case 'j5':
        picSrc = 'js/javascript_enhancing_the_dom.JPG';
        break;
      case 'j6':
        picSrc = 'js/javascript_essential_training.JPG';
        break;
      case 'j7':
        picSrc = 'js/javascript_patterns.JPG';
        break;
      case 'j8':
        picSrc = 'js/javascript_test-driven_development_es6.JPG';
        break;
      case 'j9':
        picSrc = 'js/javascript_web_form_programming.JPG';
        break;
      case 'j10':
        picSrc = 'js/learning_ecmascript_6+_es6.JPG';
        break;
      case 'j11':
        picSrc = 'js/learning_the_javascript_language.JPG';
        break;
      case 'j12':
        picSrc = 'js/learning_vuex.JPG';
        break;
      case 'j13':
        picSrc = 'js/vue_js_working_with_apis.JPG';
        break;
      case 'j14':
        picSrc = 'js/vue_js_essential_training.JPG';
        break;
      case 'j15':
        picSrc = 'js/jquery_essential_training.JPG';
        break;
      case 'j16':
        picSrc = 'js/jquery_building_an_interface.JPG';
        break;
      case 'j17':
        picSrc = 'js/react_js_building_an_interface.JPG';
        break;
      case 'j18':
        picSrc = 'js/react_js_essential_training.JPG';
        break;

      default:
        console.log('An error occurred: check the data-value attributes');
    }

    document.querySelector('.img-cac').src = basePath + picSrc;
  })
});