"use strict";
// Get references to the form and display area
const form = document.getElementById('Resume-form');
const resumeDisplayElement = document.getElementById('Resume-Display');
// Check if form and resumeDisplayElement are available
if (form && resumeDisplayElement) {
    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload
        // Collect input values
        const name = document.getElementById('Name').value;
        const email = document.getElementById('Email').value;
        const phone = document.getElementById('Phone').value;
        const education = document.getElementById('Education').value;
        const experience = document.getElementById('Experience').value;
        const skills = document.getElementById('Skills').value;
        // Generate the resume content dynamically
        const resumeHTML = `
            <h2><b>Resume</b></h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Experience</h3>
            <p>${experience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>
        `;
        // Display the generated resume
        resumeDisplayElement.innerHTML = resumeHTML;
    });
}
else {
    console.error('Form or Resume display element not found.');
}
