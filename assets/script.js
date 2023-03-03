$(document).ready(function(){

    // Load tooltip for project buttons
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

// Project buttons
var weatherButton = $("#weatherBtn");
var munchifyButton = $("#munchifyBtn");
var quizButton = $("#quizBtn");
var twinCitiesButton = $("#twinCitiesBtn");


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
            checker =+1;
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

// Create timing interval to add description tags based on timer
 /* The speed/duration of the effect in milliseconds */

let i = 0;
let headTxt = "I am a"
let txt = 'developer'; /* The text */
let speed = 50;

var typeWriter = function () {
 
    document.getElementById("leadTag").innerHTML += headTxt.charAt(i);
  if (i < txt.length) {
    document.getElementById("developerTag").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

let pTxt = ['','designer','software engineer','fitness guru'];
let j = 0;
let k = 0;

var typeWriterP = function (){

    // If j less than length of item at index
    if (j < pTxt[k].length){
        // Update text to character at j index
        document.getElementById("subtitleTags").innerHTML += pTxt[k].charAt(j);
        // Increase j by 1
        j++;
        // Time it
        setTimeout(typeWriterP,speed);
    }
}

// Initialise counter
let count = 0;
// Add on click effect for work button
$("#work-btn").on("click",function(){
    if (count == 0){
        typeWriter();
        count++;
    } else{
        k++;
        typeWriterP();
        console.log(k);
    }
    $("#work-btn").text("'click again'");
})

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


    var githubLogo = $("<a href='https://github.com/sebastianj0nes/weather-forecast-app' target='_blank'>Repo</a>");
    imageContainer.append(githubLogo);
})

munchifyButton.on("click",function(){

    clearContents();
    projectHeader.text("Munchify");
    projectHeader.addClass("projectHeader");

    var weatherImg = $("<img src='./assets/images/munchify.png' class='projectImg' alt='Image of munchify loading screen'>");
    imageContainer.append(weatherImg);

    projectP.text("Tech Stack: jQuery, Node.js, Bootstrap, HTML");

    var projectDesc = $("<p>");
    var projectDesc2 = $("<p>");
    projectDesc.text("Generate playlists and recipes together based on user input");
    projectDesc2.text("Calling Spoonacular and Spotify API to call data");
    imageContainer.append(projectDesc,projectDesc2);



    var githubLogo = $("<a href='https://github.com/stuart540/munchify' target='_blank'>Repo</a>");
    imageContainer.append(githubLogo);
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



    var githubLogo = $("<a href='https://github.com/sebastianj0nes/code-quiz' target='_blank'>Repo</a>");
    imageContainer.append(githubLogo);
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

    // Add alert on click of final project button
    $("#projAlert").addClass("show");

})


// Auto-hide tooltip after clicking away
$(document).on("click",function(){
    $('#element').tooltip('hide');
})

$("#closeButton").on("click", function(){
    $("#projAlert").alert("close");
})





});
