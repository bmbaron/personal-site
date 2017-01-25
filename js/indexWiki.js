
$(document).ready(function() {
        alert("Hi");

        
  initialize();
  document.getElementById('wikiEmpty').innerHTML = '';
  $("#search").keyup(function(event){
    if(event.keyCode == 13){
      
        $(".wikiEmpty").hide();
        summonJSON();
        
        document.getElementById('input-area').style.setProperty("-webkit-transition", "top .75s 1s ease-out");
        document.getElementById('input-area').style.top = "-100%";  
        
        $("html, body").animate({ scrollTop: 200}, 1000);
        return false;
    }
    if (document.getElementById('search').value == '') {
      
      document.getElementById('input-area').style.setProperty("-webkit-transition", "top 1s 3s ease-out");
      document.getElementById('input-area').style.top = "0%"; 
      
      $(".wikiEntry").fadeOut(1000);
      //$(".wikiEntry").hide();
      $(".wikiEmpty").hide();
    }
});  
  
$("#search-button").on("click", function(e) {
        
  $(".wikiEmpty").hide();
  summonJSON();
  
  document.getElementById('input-area').style.setProperty("-webkit-transition", "top .75s 1s ease-out");
  document.getElementById('input-area').style.top = "-100%";  
  
  $("html, body").animate({ scrollTop: 200}, 1000);
  
});                           
                           
  
  
  //When the tweet button (id = tweet-quote) is clicked, create a temporary string variable to store the current quote and author
  //and append it to the twitter tweet posting URL so the user can tweet the quote and author in one tweet
  $("#random-article").on("click", function(e) {
    
    window.open("https://en.wikipedia.org/wiki/Special:Random");

  });  
  
  
});




  //this function uses ajax to set up a call to the wikipedia api. Because it uses JSONP, the data can be accessed cross-domains, and 
  //the callback function, processJSON which handles the JSON and displays the desired data will be called upon completion
  function summonJSON() {        
    $.ajax({
      url: "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + document.getElementById('search').value + "&format=json",
      dataType: "jsonp",
      jsonpCallback: "processJSON"
    });  
  }


//The function which receives a JSON object from the source, uses its quote and author data, and processes the data to be more
//presentable and to be displayed in HTML
function initialize() {  
      
    
      var numberThem = 1;
      //make 10 divs to hold the JSON results, each div having an "a" href inside
      for (var x = 1; x < 11; x++) {
        
          var div = document.createElement('div');
          document.body.appendChild(div);
          div.className = 'wikiEntry';
          div.id = 'holder' + x.toString();
          //div.parentNode('wikiData');
          
          //create an 'a' to have the href for the wiki link and the description
          var a = document.createElement('a');
          a.className = 'links';
          a.id = 'wikiEntry' + x.toString();
        
          div.appendChild(a);          

      }

      $(".wikiEntry").hide();

  }
  

//The function which receives a JSON object from the source, uses its quote and author data, and processes the data to be more
//presentable and to be displayed in HTML
function processJSON(json) { 
    
    //check if the json from wikimedia has content. If not, the search returned no results
    if(json[2] != '') {
      
      //update the search title with the new searched word
      //document.getElementById('wikiSearch').innerHTML = 'Search results for <br>"' + document.getElementById('search').value + '"';    
      //$("#wikiSearch").show();
  
      var numberThem = 1;  
      //cycle through the new json from wikimedia
      for (var i in json[2]) {
        if (json[2].hasOwnProperty(i)) {
            if(json[2][i].toString() != '') {

            //update the values of the previously created divs to reflect the current search
            //document.getElementById('wikiEntry' + numberThem.toString()).innerHTML = ''; 
            document.getElementById('wikiEntry' + numberThem.toString()).innerHTML = numberThem.toString() + '.  ' + json[2][i].toString(); 
            document.getElementById('wikiEntry' + numberThem.toString()).href = "" + json[3][i].toString() + "";    

            $("#holder" + numberThem.toString()).show();

          }
          
          else {
            var hider = numberThem;
            for (hider; hider<11;hider++) {
                            
               $("#holder" + hider.toString()).hide();  

            }
            numberThem--;
          }        
          numberThem++;
        }
       }  
       //alert(numberThem);
       document.getElementById('holder' + (numberThem-1).toString()).style.marginBottom = "60px";
      
      
    }
    //the json has no content, so the search returned no results
    else{
        document.getElementById('wikiEmpty').innerHTML = 'Search returned no results.';    
        $(".wikiEntry").hide();
        $("#wikiEmpty").show();
        return;

      }
  
}
