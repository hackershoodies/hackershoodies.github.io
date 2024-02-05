/*price range*/

 $('#sl2').slider();

	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};	
		
/*scroll to top*/

const body = document.body;
body.onload = myFunction1;
var globalObjectCount = 0;
function myFunction1() {
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
var NewElement7 = document.createElement('a');
NewElement7.setAttribute("href","#slider-carousel");
document.getElementById('slider-carousel').appendChild(NewElement7);
NewElement7.classList.add('left','control-carousel','hidden-xs');
NewElement7.setAttribute("data-slide", "prev");
var NewElement8 = document.createElement('i');
NewElement8.classList.add('fa','fa-angle-left');
NewElement7.appendChild(NewElement8);
var NewElement9 = document.createElement('a');
NewElement9.setAttribute("href","#slider-carousel");
document.getElementById('slider-carousel').appendChild(NewElement9);
NewElement9.classList.add('right','control-carousel','hidden-xs');
NewElement9.setAttribute("data-slide", "next");
var NewElement10 = document.createElement('i');
NewElement10.classList.add('fa','fa-angle-right');
NewElement9.appendChild(NewElement10);

const getJSON = async url => {
const response = await fetch(url);
if(!response.ok) // check if response worked (no 404 errors etc...)
  throw new Error(response.statusText);

const data = response.json(); // get JSON from the response
return data; // returns a promise, which resolves to this data value
}
getJSON("https://node1-git-main-ju3tin.vercel.app/dude.json").then(data => {
data.data.forEach(function(item, ii) {
	
	var dataCount1 = data.data.length; // Count objects in the 'data' array
	globalObjectCount += dataCount1;
	var dude34a = ii++;
	globalObject1 = 1 + dude34a;
	var NewElement110 = document.createElement('li');
	NewElement110.setAttribute("data-target","#slider-carousel");
	NewElement110.setAttribute("data-slide-to",dude34a);
	var NewElement111 = document.createElement('div');
	NewElement111.setAttribute("class","item");
	var NewElement112 = document.createElement('div');
	NewElement112.setAttribute("class","col-sm-6");
	var NewElement113 = document.createElement('div');
	NewElement113.setAttribute("class","col-sm-6");
	var NewElement114 = document.createElement('h1');
	NewElement114.innerHTML = "<span>E</span>-SHOPPER";
	
	var NewElement115 = document.createElement('h2');
	NewElement115.innerHTML = data.data[dude34a].title;
	
	var NewElement116 = document.createElement('p');
	NewElement116.innerHTML = data.data[dude34a].description;
	var NewElement117 = document.createElement('button');
	NewElement117.innerHTML = "Get it now";
	NewElement117.classList.add("btn","btn-default","get");
	var NewElement118 = document.createElement('img');
	NewElement118.setAttribute("src","images/home/pricing.png");
	NewElement118.classList.add("pricing");
	
	var NewElement119 = document.createElement('img');
	NewElement119.setAttribute("src",data.data[dude34a].images[0].src);
	NewElement119.classList.add("girl","img-responsive");
	//NewElement113.setAttribute("class","col-sm-6");
	if(dude34a == 0){NewElement110.setAttribute("class","active");
	NewElement111.setAttribute("class","active")};
	document.getElementById('carousel-indicators').appendChild(NewElement110);
	document.getElementById('carousel-inner').appendChild(NewElement111);
	NewElement111.appendChild(NewElement112);
	NewElement111.appendChild(NewElement113);
	NewElement112.appendChild(NewElement114);
	NewElement112.appendChild(NewElement115);
	NewElement112.appendChild(NewElement116);
	NewElement112.appendChild(NewElement117);
	NewElement113.appendChild(NewElement119);
	NewElement113.appendChild(NewElement118);
})
})
}

$(document).ready(function(){
	
	var data = {};
	var globalObjectCount = 0;
	var globalObject1 = 0;
	const getJSON = async url => {
		const response = await fetch(url);
		if(!response.ok) // check if response worked (no 404 errors etc...)
		  throw new Error(response.statusText);
	  
		const data = response.json(); // get JSON from the response
		return data; // returns a promise, which resolves to this data value
	  }
	  console.log("Fetching data...");
	  
getJSON("https://node1-git-main-ju3tin.vercel.app/dude.json").then(data => {
	console.log(data);
})	  
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
	
});


