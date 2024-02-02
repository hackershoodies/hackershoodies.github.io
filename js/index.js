
    var globalObjectCount = 0;
var globalObject1 = 0;
$(document).ready(function(){
    $.getJSON('https://corsproxy.org/?https%3A%2F%2Fnode1-git-main-ju3tin.vercel.app%2Fdude.json', function (data) {
                     console.log(data);
                     myJSON = JSON.stringify(data.data)
                       var x = document.getElementsByTagName("body")[0];
                       var x = document.getElementsByTagName("body")[0];
var NewElement = document.createElement('div');
var NewElement1 = document.createElement('ul');
var NewElement2 = document.createElement('a');
var NewElement3 = document.createElement('a');

NewElement2.id = "prev";
NewElement3.id = "next";
NewElement2.setAttribute("href","#");
NewElement3.setAttribute("href","#");
NewElement2.innerHTML = "≪";
NewElement3.innerHTML = "≫";
NewElement.id = 'slider';
NewElement1.id = 'slideWrap';
x.appendChild(NewElement);
var NewElement4 = document.createElement('div');
x.appendChild(NewElement4);
NewElement.appendChild(NewElement1);
NewElement.appendChild(NewElement2);
NewElement.appendChild(NewElement3);
             //    var NewElement99 = document.createElement('div');
             //    NewElement99.innerHTML = myJSON;
             //    x.appendChild(NewElement99);
                 data.data.forEach(function(item, ii) {
    
    var dataCount = data.data.length; // Count objects in the 'data' array
   // globalObjectCount += dataCount;
	var dude34 = ii++;
    globalObject1 = 1 + dude34;
    var var1 = document.createElement('li');
    var var2 = document.createElement('img');
    NewElement1.appendChild(var1);
    var1.appendChild(var2);
    var2.setAttribute("src",data.data[dude34].images[0].src);
	console.log(dude34);
    console.log(data.data[dude34].images[0].src);
    

})
var sliderWidth1 = NewElement.offsetWidth;
console.log(sliderWidth1);
console.log("this is a count"+globalObject1);
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = globalObject1;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});
var sliderWidth1 = NewElement.offsetWidth;
console.log(sliderWidth1);
console.log("this is a count"+globalObject1);
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = globalObject1;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});

var prevSlide = function() {
  if(count > 1) {
    count = count - 2;
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
    slideList.style.left = "-" + count * sliderWidth1 + "px";
    count++;
  }
  else if(count = items) {
    slideList.style.left = "0px";
    count = 1;
  }
};

next.addEventListener("click", function() {
  nextSlide();
});

prev.addEventListener("click", function() {
  prevSlide();
});

setInterval(function() {
  nextSlide()
}, 5000);

                 });
               

});