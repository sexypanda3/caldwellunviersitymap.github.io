'use strict'

function haita() {
  const artkotha = ["CS 196 003","CS 196 002","CS 115 001","CS 115 002", "CS 115 500", "CS 195 001","CS 195 002", "CS 196 001"];
 
  var input = document.getElementById("userInput").value;  
  var userkotha = jQuery.inArray(input, artkotha);
  var anka = Object.values(artkotha)[userkotha];

    if (anka === "CS 115 001") {  
    window.open('albertus115001.html'); 
    }
    if (anka === "CS 115 002") {  
    window.open('albertus115002.html'); 
    }
    if (anka === "CS 115 500") {  
      window.open('albertus115500.html'); 
    }
    if (anka === "CS 195 001") {  
      window.open('albertus195001.html'); 
      }
      if (anka === "CS 195 002") {  
      window.open('albertus195002.html'); 
      }
      if (anka === "CS 196 001") {  
        window.open('albertus196001.html'); 
      }
      if (anka === "CS 196 002") {  
        window.open('albertus196002.html'); 
      }
      if (anka === "CS 196 003") {  
        window.open('albertus196003.html'); 
      }
    else if (anka === "") {
      alert("Please Enter a Class Number!"); 
   }

   else {
    alert("Please Enter a CS Class Number!"); 
   }
   return false;
  }