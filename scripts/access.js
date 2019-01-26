/* exported myFunction */
"use strict";

function myFunction() {
    var person = prompt("Please enter your name", " ");
    if (person != null) {
        document.getElementById("demo").innerHTML = "ACCESS GRANTED " + person + ", WELCOME.";
    }
}