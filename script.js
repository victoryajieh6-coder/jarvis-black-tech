// JARVIS BLACK TECH

document.addEventListener("DOMContentLoaded", function () {

console.log("JARVIS BLACK TECH is running successfully.");

const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Navigating to: " + link.textContent);
    });
});

});
