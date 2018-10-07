// Initialize three column slider
var slider = tns ({
  "container": "#three_slider",
  "slideBy": "page",
  "mouseDrag": true,
  "swipeAngle": false,
  "gutter": 20,
  "speed": 700,
  "items": 3,
  "responsive": {
    "480": {
      "items": 2
    },
    "768": {
      "items": 3
    }
  },
});


// Prevent all null in console
function insertAfter(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

var threeSliderContainer = document.querySelector('.tns-ovh');
var sliderBullets = document.querySelector('.tns-nav');

if (threeSliderContainer !== null && sliderBullets !== null) {
  insertAfter(sliderBullets, threeSliderContainer);  
}

