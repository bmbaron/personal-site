//$(window).load(function() {


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

$(".pic").on("click", function(e) {
    
    var projectLink = $(this).attr('id').toString();
    window.open(projectLink);

});  
  
    
//}); //end window load function

