

$(document).ready(function() {

  //execute this code with gets a quote from the source through JSONP when the Get Another (id = fetch-quote)
  //button is clicked. When the JSON is received, it is processed to remove trailing spaces from the quote
  //and quotation marks from the author. Then, those data are displayed through HTML in two divs 
  $("#fetch-quote").on("click", function(e) {    
    $.ajax({
      
      type: 'GET',
      dataType: "jsonp",
      url: "//api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&key=10&lang=en&jsonp=?",
      jsonpCallback: "parseQuote" 

    });    
  });
  
  //When the tweet button (id = tweet-quote) is clicked, create a temporary string variable to store the current quote and author
  //and append it to the twitter tweet posting URL so the user can tweet the quote and author in one tweet
  $("#tweet-quote").on("click", function(e) {
    var quoteDiv = document.getElementById('quote-text');
    var quoteHTML = quoteDiv.innerHTML;
    
    var authorDiv = document.getElementById('quote-author');
    var authorHTML = authorDiv.innerHTML;    
    
    var quoteAndAuthor = quoteHTML + " " + authorHTML;
    
    window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + quoteAndAuthor);

  });  
  
  //Produce an initial virtual "click" on the Find Another (id = fetch-quote) button so the page will load with a quote and author displayed  
  document.getElementById('fetch-quote').click();  
});



//The function which receives a JSON object from the source, uses its quote and author data, and processes the data to be more
//presentable and to be displayed in HTML
function parseQuote(json) {

  var quote = JSON.stringify(json.quoteText);
  quote = JSON.parse(quote);
  
  //remove the trailing space from the end of the quotes
  quote = quote.slice(0, -1);  
  
  //handle the case where there is another trailing space at the end of quote
  if(quote[quote.length-1] == " ") {
    quote = quote.slice(0,-1);
    
  }
  
  $(".quote-text").html('"' + quote + '"'); 
  
  var author = JSON.stringify(json.quoteAuthor);      
  //Check if the author field is blank. If not, then use it to be displayed
  if(author.length > 2) {  
    $(".quote-author").html('-' + JSON.parse(author));   
  }
  //If the author field is blank, credit the quote as "-author unknown"
  else {
    $(".quote-author").html('-author unknown');
  }
}
