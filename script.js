// Button Click
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
    button.textContent = "Clicked!";
    button.style.backgroundColor = "green";
});

// Hover Effect
button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "lightblue";
});
button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "";
});

// Image Gallery (simple slideshow)
let currentImage = 0;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
setInterval(() => {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById("imageGallery").src = images[currentImage];
}, 3000);

// Tabs/Accordion-style Content
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab-content").forEach(content => {
            content.classList.remove("show");
        });
        document.getElementById(tab.dataset.target).classList.add("show");
    });
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function (e) {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !email || password.length < 8) {
        e.preventDefault();
        alert("Please fill in all fields correctly.");
    }
});

// Real-time Password Feedback
document.getElementById("password").addEventListener("input", () => {
    const password = document.getElementById("password").value;
    if (password.length < 8) {
        document.getElementById("passwordFeedback").textContent = "Password must be at least 8 characters.";
    } else {
        document.getElementById("passwordFeedback").textContent = "Password is valid.";
    }
});
