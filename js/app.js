
"use strict"
$(document).ready(function() {



var equals = $("#equals");
var calcScreen = $("#screen");
var clear = $("#clear");
var span = $("span");

span.on("click", function(){
  // console.log($(this).html());

if ($(this).text() === "C" || $(this).text() === "=") {
  clear.on("click", function(){
    calcScreen.empty();
   var answer = (calcScreen.text());
    calcScreen.append(answer);
}); //double click, so it will double event 'click'

}else {
  calcScreen.append($(this).text());
}
});

equals.on("click", function(){
  try {
    var answer = eval(calcScreen.text().replace("÷","/").replace("x", "*"));
    calcScreen.empty();
    calcScreen.append(answer);
  }
  catch (e) {  //e every exeption, frowwing an error
    calcScreen.empty();
    calcScreen.text("ERROR");
  }
})

});
