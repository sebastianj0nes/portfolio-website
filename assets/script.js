$(document).ready(function(){


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



    var hiddenSec = document.querySelectorAll(".hidden");
    hiddenSec.forEach((el) => observer.observe(el));
    var hidden1Sec = document.querySelectorAll(".hidden1");
    hidden1Sec.forEach((el) => observer.observe(el));

});
