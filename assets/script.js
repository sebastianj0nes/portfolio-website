$(document).ready(function(){



// Project buttons
var weatherButton = $("#weatherBtn");
var quizButton = $("#quizBtn");
var passwordButton = $("#passGenBtn");

// Project elements
var projectRow = $("#projectRow");
var projectHeader = $("#projectHeader");
var imageContainer = $("#imageContainer");
var projectP = $("#projectP");


// Add observer to listen for which elements are viewable
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

// Target sections and add observers to section
var hiddenSec = document.querySelectorAll(".hidden");
hiddenSec.forEach((el) => observer.observe(el));
var hidden1Sec = document.querySelectorAll(".hidden1");
hidden1Sec.forEach((el) => observer.observe(el));


// Function to clear work project content
var clearContents = function(){
    projectHeader.text("");
    imageContainer.removeClass("src");
    projectP.text("");
}


// Change projects displayed when click on buttons
weatherButton.on("click",function(){
    console.log("Load weather project");
    // Clear any previous HTML

    clearContents();
    projectHeader.text("Weather Dashboard");


})
quizButton.on("click",function(){
    console.log("Load quiz project");

    clearContents();
    projectHeader.text("Coding Quiz");

})
passwordButton.on("click",function(){
    console.log("Load password project");

    clearContents();
    projectHeader.text("Password Generator");

})



});
