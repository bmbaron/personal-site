//$(window).onload(function() {
//	$(".rightZone").fadeIn(2000);
//}

window.onload = function() {
	
$(".navigateFade").delay(1000).animate({ opacity: 1 }, 2000);
$(".contactFade").delay(2000).animate({ opacity: 1 }, 3000);


$(".navigateFade").delay(1000).animate({ opacity: 0 }, 2000);
$(".contactFade").delay(1000).animate({ opacity: 0 }, 1000);
}



var img;
var width;
  
  
$(".pic").hover(function(){
  $(this).css('cursor','pointer');
  $(this).css('cursor','hand');
  
  width = 2*$(this).width(); 
  $(this).width(width); //make the image twice as big
    
}, function(){  
  
   width=.5*width; 
   $(this).width(width); //return image back to original size
    
}); //end pic hover function 



$(".travelPic").hover(function(){
  $(this).css('cursor','pointer');
  $(this).css('cursor','hand');
  
  width = 2*$(this).width(); 
  $(this).width(width); //make the image twice as big
    
}, function(){  
  
   width=.5*width; 
   $(this).width(width); //return image back to original size
    
}); //end pic hover function 


$(".pic").on("click", function(e) {
    
    var projectLink = $(this).attr('id').toString();
    window.open(projectLink);

});  

$(".travelPic").on("click", function(e) {
    
    window.open("https://bmbaron.github.io/photos");

});  
  
  
window.onscroll = function (e) {
//$(".button").effect( "shake", 5, "fast" );
//$(".panelLeft").shake(2000);

}


	
	
    
//}); //end window load function

