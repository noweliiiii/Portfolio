// Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", function () {
    const fadeIns = document.querySelectorAll(".fade-in");

    function checkFadeIn() {
        fadeIns.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkFadeIn);
    checkFadeIn(); // Run on page load
});

// Contact Form Handling
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("formMessage");

    if (name && email && message) {
        formMessage.textContent = "Thank you, " + name + "! Your message has been sent.";
        formMessage.style.color = "pink";

        // Clear form fields
        document.getElementById("contactForm").reset();
    } else {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "pink";
    }
});
function confirmDownload() {
    alert("Your resume is downloading. Thank you!");
}


