//declaration of global variables
var firstvalue = 0;
var userSearch = 0;

//jQuery declaration
$(document).ready(function(){

//getting the value of searchbar to a variable 
  $("#scp").on("click", function(){
    var regExp = /\s+/g;
    firstvalue = $("#sbar").val();
    userSearch = firstvalue.replace(regExp,"%20");
    var n = 0;      
//inserting the value of the searchbar into the url of wikipedia      
    var wiki="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ userSearch +"%20&format=json";
    
//AJAX request    
  $.ajax({
  url: wiki,
    data:{origin:"*"},
  dataType: 'json',
  type: 'GET',
  success: function (data) {
    
    var obj = JSON.parse(JSON.stringify(data));
       
    var outCome="";
   
    obj[1].forEach(createHtml);
    
    function createHtml() {
      
      outCome += "<div class=\"container\" id=\"res\"><div class=\"well\"><a href=\"" + obj[3][n] + "\" target=\"_blank\"><p>" + obj[1][n] + "</p><p>" + obj[2][n] + "</p></a></div></div>";
      n++;
            
      $("#bet").html(outCome);
          }
  } 
    });//AJAX request 

  });//getting the value of searchbar to a variable 
});//jQuery declaration