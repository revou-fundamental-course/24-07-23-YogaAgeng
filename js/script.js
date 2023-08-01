// JavaScript code for auto slide banner
var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("banner");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// JavaScript validation for contact form
function validateForm() {
    // Simple validation logic
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var destination = document.getElementById('destination').value;

    if (name.trim() === '' || email.trim() === '' || destination.trim() === '') {
        alert('Please fill in all the fields.');
        return false;
    }

    // Add more complex validation logic here if needed.

    // If all fields are filled, return true to submit the form.
    return true;
}
