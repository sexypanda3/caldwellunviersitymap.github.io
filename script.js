'use strict'

function othername() {
  const artkotha = ["","CS 301","CS 504", "CS 123", "CS 31","CS 04", "CS 23"];
 
  var input = document.getElementById("userInput").value;  
  var userkotha = jQuery.inArray(input, artkotha);
  var anka = Object.values(artkotha)[userkotha];
 
  if (anka == "CS 301") {  
  window.open('albertus.html'); 
  }

    else if (anka == "") {
      alert("Please Enter a CS Class Number!"); 
   }
   
   else {
    $("h1").remove();
   }
   return true;
}

