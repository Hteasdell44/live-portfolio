// Global Variables //

var homeIcon = document.getElementById("home-icon");
var aboutIcon = document.getElementById("about-icon");
var toolkitIcon = document.getElementById("toolkit-icon");
var projectsIcon = document.getElementById("projects-icon");
var contactIcon = document.getElementById("contact-icon");

var heroSection = document.getElementById("hero");
var aboutSection = document.getElementById("about");
var toolkitIcon = document.getElementById("toolkit");
var projectsIcon = document.getElementById("projects");
var contactIcon = document.getElementById("contact");

var resumeButton = document.getElementById("resume-button");
var linkedinButton = document.getElementById("linkedin-button");
var githubButton = document.getElementById("github-button");

var homeHover = document.getElementById("home-hover");
var homeAnchor = document.getElementById("home-anchor");

// Code Executed At Runtime //

resumeButton.onclick = function() {

    location.href = "www.google.com";
}

linkedinButton.onclick = function() {

    location.href = "https://www.linkedin.com/in/hteasdell";
}

githubButton.onclick = function() {

    location.href = "https://github.com/Hteasdell44";
}

homeIcon.addEventListener('click', displayHomeHover);

// Functions

function displayHomeHover() {

    homeHover.style.display = "block";
    homeHover.style.backgroundColor = "magenta";
}