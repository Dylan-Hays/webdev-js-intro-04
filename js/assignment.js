"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input");
const submissionBtn = document.getElementById("submission-btn");
const responseParagraph = document.getElementById("response");

// Create a mutable variable clled age and do not assign it a value.
let age;

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value, 10);
    // Write your own code below


    // Check if the age is valid
    if (isNaN(age) || age < 0) {
        responseParagraph.textContent = "Please enter a valid age.";
        return;
    }

    // Conditional logic
    if (age >= 21) {
        responseParagraph.textContent = "You can vote and purchase alcohol.";
    } else if (age >= 18) {
        responseParagraph.textContent = "You can vote, but you cannot purchase alcohol.";
    } else {
        responseParagraph.textContent = "You cannot vote and you cannot purchase alcohol.";
    }
}

// Event listener for the submit button
submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});

// Validate input to prevent invalid characters
function validateInput(event) {
    const invalidCharacters = ["e", "E", ".", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
