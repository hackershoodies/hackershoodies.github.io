/*price range*/

 $('#sl2').slider();

	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};	
		
/*scroll to top*/

$(document).ready(function(){
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});
	$(function(){
		console.log("working");
		/* Adds Element BEFORE NeighborElement */
Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
}, false;

/* Adds Element AFTER NeighborElement */
Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}, false;

/* Typical Creation and Setup A New Orphaned Element Object */
var NewElement = document.createElement('section');
//NewElement.innerHTML = 'New Element';
NewElement.id = 'slider';

/*  Add NewElement BEFORE -OR- AFTER Using the Aforementioned Prototypes */
NewElement.appendAfter(document.getElementById('header'));
var NewElement1 = document.createElement('div');
NewElement1.classList.add('container');
NewElement1.id = 'container1';
document.getElementById('slider').appendChild(NewElement1);
var NewElement2 = document.createElement('div');
NewElement2.classList.add('row');
NewElement2.id = 'row1';
document.getElementById('container1').appendChild(NewElement2);
var NewElement3 = document.createElement('div');
NewElement3.classList.add('col-sm-12');
NewElement3.id = 'col-sm-121';
document.getElementById('row1').appendChild(NewElement3);
var NewElement4 = document.createElement('div');
NewElement4.classList.add('carousel');
NewElement4.classList.add('slide');
NewElement4.id = 'slider-carousel';
NewElement4.setAttribute("data-ride", "carousel");
document.getElementById('col-sm-121').appendChild(NewElement4);
var NewElement5 = document.createElement('ol');
NewElement5.classList.add('carousel-indicators');
NewElement5.id = 'carousel-indicators';
document.getElementById('slider-carousel').appendChild(NewElement5);
var NewElement6 = document.createElement('div');
NewElement6.classList.add('carousel-inner');
NewElement6.id = 'carousel-inner';
document.getElementById('slider-carousel').appendChild(NewElement6);


	})
});
var xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /api/data
xhr.open('GET', '/js/data1.json', true);

// Send the request over the network
xhr.send();

// This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP response status
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    var data = JSON.parse(xhr.response); // parse JSON response into JavaScript objects

    data.data.forEach(function(item, ii) {
    
	
	var dude34 = ii++;

	console.log(dude34);
	
	  var valueCell2 = document.createElement('div');
	  valueCell2.setAttribute("class","col-sm-6");
	  valueCell2.innerHTML = `<h1><span>E</span>-SHOPPER</h1>
	  <h2>Free E-Commerce Template</h2>
	  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
	  <button type="button" class="btn btn-default get">Get it now</button>`;
	  var valueCell3 = document.createElement('div');
	  valueCell3.setAttribute("class","col-sm-6");
	  valueCell3.innerHTML = `<img src="images/home/girl1.jpg" class="girl img-responsive" alt="">
	  <img src="images/home/pricing.png" class="pricing" alt="">`;
      var valueCell = document.createElement('li');
	  valueCell.setAttribute("data-target","#slider-carousel");
	  valueCell.setAttribute("data-slide-to",dude34);
	  if (dude34 = 0){valueCell.setAttribute("class","active")};
	  var valueCell1 = document.createElement('div');
	  valueCell1.setAttribute("class","item");
valueCell1.appendChild(valueCell2);
valueCell1.appendChild(valueCell3);
	  if (dude34 = 0){valueCell1.setAttribute("class","active")};
    //  valueCell.textContent = item.id

	document.getElementById('carousel-indicators').appendChild(valueCell);
	document.getElementById('carousel-inner').appendChild(valueCell1);
      
    });
  }
};

xhr.onerror = function() {
  alert("Request failed");
};
