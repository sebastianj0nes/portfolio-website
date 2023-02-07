$(document).ready(function(){



// Project buttons
var weatherButton = $("#weatherBtn");
var quizButton = $("#quizBtn");
var passwordButton = $("#passGenBtn");

// Project elements
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
    $("#imageContainer").empty();
    projectP.text("");
}


// Change projects displayed when click on buttons

// Weather Dashboard Project
weatherButton.on("click",function(){

    // Clear any previous HTML
    clearContents();

    // Change header text 
    projectHeader.text("Weather Dashboard");

    var weatherImg = $("<img src='./assets/images/weather_dashboard.png' class='projectImg' alt='Image of weather dashboard'>");
    imageContainer.append(weatherImg);
})

// Code Quiz Project
quizButton.on("click",function(){

    clearContents();
    projectHeader.text("Coding Quiz");

})

// Password Generator Project
passwordButton.on("click",function(){

    clearContents();
    projectHeader.text("Password Generator");

})



});
