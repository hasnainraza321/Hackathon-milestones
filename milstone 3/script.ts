// Get references to the form and display area
const form = document.getElementById('Resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('Resume-Display') as HTMLDivElement;

// Check if form and resumeDisplayElement are available
if (form && resumeDisplayElement) {
    // Handle form submission
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent page reload

        // Collect input values
        const name = (document.getElementById('Name') as HTMLInputElement).value;
        const email = (document.getElementById('Email') as HTMLInputElement).value;
        const phone = (document.getElementById('Phone') as HTMLInputElement).value;
        const education = (document.getElementById('Education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('Experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;

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
} else {
    console.error('Form or Resume display element not found.');
}
