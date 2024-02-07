/*price range*/
$(document).ready(function(){
	$(function () {
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
// var x1 = document.getElementsByTagName("body")[0];

// console.log(data);
var x2 = document.getElementById("header")[0];

var NewElement00e = document.createElement('ol');
var NewElement00f = document.createElement('div');
var NewElement00d = document.createElement('div');
var NewElement00c = document.createElement('div');
var NewElement00b = document.createElement('div');
var NewElement00 = document.createElement('div');
var NewElement00a = document.createElement('section');

var NewElement01 = document.createElement('ul');

var NewElement02 = document.createElement('a');
var NewElement03 = document.createElement('a');

var NewElement02a = document.createElement('a');
var NewElement03a = document.createElement('a');

var NewElement02b = document.createElement('i');
var NewElement03b = document.createElement('i');
NewElement00a.id = 'slider1';
NewElement00.id = 'container2';
NewElement00.setAttribute("class",'container');
NewElement00e.id = 'carousel-indicators';
NewElement00e.setAttribute("class","carousel-indicators");
NewElement00d.id = 'slider-carousel';
NewElement00d.classList.add('carousel','slide');
NewElement00f.classList.add('carousel-inner');
NewElement00d.setAttribute("data-ride", "carousel");
NewElement00c.setAttribute("class",'col-sm-12');
NewElement00b.setAttribute("class",'row');
NewElement01.id = 'slideWrap';
NewElement02.id = "prev";
NewElement03.id = "next";
NewElement02.setAttribute("href","#");
NewElement03.setAttribute("href","#");
NewElement02a.setAttribute("href","#slider-carousel");
NewElement02a.setAttribute("data-slide","prev");
NewElement03a.setAttribute("href","#slider-carousel");
NewElement03a.setAttribute("data-slide","next");
NewElement02a.classList.add('left','control-carousel','hidden-xs');
NewElement03a.classList.add('right','control-carousel','hidden-xs');

NewElement02b.classList.add('fa','fa-angle-left');
NewElement03b.classList.add('fa','fa-angle-right');
NewElement02.innerHTML = "≪";
NewElement03.innerHTML = "≫"; 
// NewElement00.innerHTML = JSON.stringify(data.data);
//

NewElement00a.appendAfter(header);


NewElement00a.appendChild(NewElement00);
NewElement00.appendChild(NewElement00b);

NewElement00b.appendChild(NewElement00c);
NewElement00c.appendChild(NewElement00d);
NewElement00d.appendChild(NewElement00e);

NewElement00d.appendChild(NewElement00f);
NewElement00d.appendChild(NewElement01);

NewElement00.appendChild(NewElement02);
NewElement00.appendChild(NewElement03);

NewElement00d.appendChild(NewElement02a);
NewElement00d.appendChild(NewElement03a);

NewElement02a.appendChild(NewElement02b);
NewElement03a.appendChild(NewElement03b);
//  document.write(JSON.stringify(data.data));
data.data.forEach(function(item, ii) {
  
  var dataCount1 = data.data.length; // Count objects in the 'data' array
  globalObjectCount += dataCount1;
  var dude34a = ii++;
  globalObject1 = 1 + dude34a;
  var var01c = document.createElement('div');
  var var01d = document.createElement('div');
  var var01e = document.createElement('h1');
  var var01f = document.createElement('h2');
  var var01g = document.createElement('p');
  var var01b = document.createElement('div');
  var var01 = document.createElement('li');
  var var01a = document.createElement('li');
  var var02 = document.createElement('img');
  var var02a = document.createElement('img');
  var var03 = document.createElement('span');
  var var04 = document.createElement('span');
  var var05 = document.createElement('span');
  var var06 = document.createElement('button');
  var var07 = document.createElement('img');
  var var06a = document.createElement('button');
  var var07a = document.createElement('img');
  var06.setAttribute("type","button");
  var06a.setAttribute("type","button");
  NewElement01.appendChild(var01);
  
  NewElement00e.appendChild(var01a);
  
  NewElement00f.appendChild(var01b);
  var01.appendChild(var02);
  var01.appendChild(var03);
  var01.appendChild(var04);
  var01.appendChild(var05);
  var01.appendChild(var06);
  var01b.appendChild(var01c);
  var01b.appendChild(var01d);
  var01c.appendChild(var01e);
  var01c.appendChild(var01f);
  var01c.appendChild(var01g);
  var01c.appendChild(var06a);
  var01d.appendChild(var02a);
  var01d.appendChild(var07a);
  
  var01.appendChild(var07);
  var01a.setAttribute("data-target","#slider-carousel");
  var01b.classList.add("item");
  if (dude34a < 1){var01b.classList.add("active")};
  var01c.setAttribute("class","col-sm-6");
  var01d.setAttribute("class","col-sm-6");
  var01a.setAttribute("data-slide-to",globalObject1);
  if (dude34a < 1){var01a.setAttribute("class","active")};
  var07.setAttribute("src",'images/home/pricing.png');
  var07a.setAttribute("src",'images/home/pricing.png');
  var07a.setAttribute("class","pricing")
  var02.setAttribute("src",data.data[dude34a].images[0].src);
  var02a.setAttribute("src",data.data[dude34a].images[0].src);
  var02a.classList.add('girl','img-responsive');
  var01e.innerHTML = `<span>E</span>-SHOPPER`;
  var01f.innerHTML = data.data[dude34a].title;
  var03.innerHTML = data.data[dude34a].title;
  var03.classList.add('product_title');
  var04.innerHTML = data.data[dude34a].description;
  var01g.innerHTML = data.data[dude34a].description;
  var01g.classList.add("item99");
  var04.classList.add('product_description');
  
  var05.innerHTML = data.data[dude34a].variants[0].price;
  var05.classList.add('product_price');
  var06.innerHTML = 'Get It Now';
  var06a.innerHTML = 'Get It Now';
  var02.classList.add('girl','img-responsive');
  var06.classList.add('btn','btn-default','get');
  var06a.classList.add('btn','btn-default','get');
  var06a.setAttribute(`onclick`,`location.href='http://www.example.com'`);
  console.log(dude34a);
  console.log(data.data[dude34a].images[0].src);
  })
 
var sliderWidth1 = NewElement00.offsetWidth;
console.log(sliderWidth1);
console.log("this is a count"+globalObject1);
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = globalObject1;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
	//sliderWidth = slider.offsetWidth;
var sliderWidth = NewElement00.offsetWidth;
});

var prevSlide = function() {
if(count > 1) {
  count = count - 2;
  const element = document.getElementById("carousel-indicators");
  let numb = element.childNodes.length;
  slideList.style.left = "-" + count * sliderWidth1 + "px";
  count++;
}
else if(count = 1) {
  count = items - 1;
  slideList.style.left = "-" + count * sliderWidth1 + "px";
  count++;
}
};

var nextSlide = function() {
if(count < items) {
  const element = document.getElementById("carousel-indicators");
  let numb = element.childNodes[count];
  element.childNodes[count].setAttribute('class','active');
  
  
  console.log(numb);
  slideList.style.left = "-" + count * sliderWidth1 + "px";
  count++;
}
else if(count = items) {
  slideList.style.left = "0px";
  count = 1;
  
  const element = document.getElementById("carousel-indicators");
  let numb = element.childNodes[0];
  element.childNodes[0].setAttribute('class','active');
  
  
  console.log(numb);
}
};

next.addEventListener("click", function() {
nextSlide();
});

prev.addEventListener("click", function() {
prevSlide();
});

setInterval(function() {
  $(function(){
    $("#carousel-indicators>li.active").removeClass("active");
  })
nextSlide()
}, 5000);

}).catch(error => {
console.error(error);
});
})
});
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
NewElement1.id = 'container1';
NewElement1.classList.add('container');
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
var NewElement5a = document.createElement('div');
NewElement5a.classList.add('carousel-inner');
//NewElement5a.id = 'carousel-indicators';
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

//	document.getElementById('carousel-indicators').appendChild(valueCell);
//	document.getElementById('carousel-inner').appendChild(valueCell1);
      
    });
  }
};

xhr.onerror = function() {
  alert("Request failed");
};
