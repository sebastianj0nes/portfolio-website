$(document).ready(function(){



// Carousel buttons
var nextBtn = $("#nextBtn");
var prevBtn = $("#prevBtn");


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


// Add event listener for button click
$("#work-btn").on("click",function(){
})

nextBtn.on("click",function(event){
    event.preventDefault();
    console.log("Next button");

    // Create function to change carousel to next slide in set  
    // On click
        // Change 
})

prevBtn.on("click",function(event){
    event.preventDefault();
    console.log("Previous button");
})



});
