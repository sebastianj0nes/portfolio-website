$(document).ready(function(){



// Project buttons
var weatherButton = $("#weatherBtn");
var quizButton = $("#quizBtn");
var twinCitiesButton = $("#twinCitiesBtn");
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
    projectHeader.addClass("projectHeader");

    var weatherImg = $("<img src='./assets/images/weather_dashboard.png' class='projectImg' alt='Image of weather dashboard'>");
    imageContainer.append(weatherImg);

    projectP.text("Tech Stack: jQuery, Bootstrap, HTML");

    var projectDesc = $("<p>");
    var projectDesc2 = $("<p>");
    projectDesc.text("Weather Dashboard using OpenWeatherMap API and Javascript to create dynamic HTML");
    projectDesc2.text("Using client storage to save previous searches");
    imageContainer.append(projectDesc,projectDesc2);


})

// Code Quiz Project
quizButton.on("click",function(){

    clearContents();
    projectHeader.text("Coding Quiz");
    projectHeader.addClass("projectHeader");

    var weatherImg = $("<img src='./assets/images/code_quiz.png' class='projectImg' alt='Image of coding quiz'>");
    imageContainer.append(weatherImg);

    projectP.text("Tech Stack: jQuery, Bootstrap, HTML");

    var projectDesc = $("<p>");
    var projectDesc2 = $("<p>");
    projectDesc.text("Coding quiz using functions and methods to quiz a user about topics");
    projectDesc2.text("Using client storage to save user score");
    imageContainer.append(projectDesc,projectDesc2);


})

// Twin Cities Project
twinCitiesButton.on("click",function(){

    // Clear any previous HTML
    clearContents();

    // Change header text 
    projectHeader.text("Twin Cities Application (WIP)");
    projectHeader.addClass("projectHeader");

    var weatherImg = $("<img src='./assets/images/twinCityImage.png' class='projectImg' alt='Image of twin cities app'>");
    imageContainer.append(weatherImg);

    projectP.text("Tech Stack: PHP, Javascript, mySQL, Bootstrap, HTML");

    var projectDesc = $("<p>");
    var projectDesc2 = $("<p>");
    projectDesc.text("Map & weather dashboard to display information about twin cities, Munich & Edinburgh");
    projectDesc2.text("Using mySQL database to store cities data");
    imageContainer.append(projectDesc,projectDesc2);


})


// Password Generator Project
passwordButton.on("click",function(){

    clearContents();
    projectHeader.text("Password Generator");
    projectHeader.addClass("projectHeader");

    var weatherImg = $("<img src='./assets/images/pass-generator.png' class='projectImg' alt='Image of password generator application'>");
    imageContainer.append(weatherImg);

    projectP.text("Tech Stack: jQuery, HTML");

    var projectDesc = $("<p>");
    var projectDesc2 = $("<p>");
    projectDesc.text("Using alerts to gather user input to create a secure randomly generated password");
    imageContainer.append(projectDesc,projectDesc2);


})



});
