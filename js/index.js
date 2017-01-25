$(window).load(function() {


$('.button').mouseover(function(){
    $(this).stop().effect('shake', {distance:5}, 1000);
}); //end mouseover shake function

var img;
var width;
  
  
$(".pic").hover(function(){
  
  width = 2*$(this).width(); 
  $(this).width(width); //make the image twice as big
    
}, function(){  
  
   width=.5*width; 
   $(this).width(width); //return image back to original size
    
}); //end pic hover function 
    
}); //end window load function

/*
var element_to_scroll_to = document.getElementById('section1');

$('#Sect1').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional
  element_to_scroll_to.scrollIntoView({behavior: "smooth"});
  console.log("Clicked");
}); 
*/
