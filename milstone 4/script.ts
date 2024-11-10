// get references to the form and display area
const form = document.getElementById('Resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('Resume-Display') as HTMLDivElement;

// handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload                                                                                      

    // collect input values
    const Name = (document.getElementById('Name') as HTMLInputElement).value;
    const Email = (document.getElementById('Email') as HTMLInputElement).value;
    const Phone = (document.getElementById('Phone') as HTMLInputElement).value;
    const Education = (document.getElementById('Education') as HTMLTextAreaElement).value;
    const Experience = (document.getElementById('Experience') as HTMLTextAreaElement).value;
    const Skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${Name}<span></p>
    <p><b>Email:</b><span contenteditable="true"> ${Email}<span></p>
    <p><b>Phone:</b><span contenteditable="true">${Phone}<span></p>

    <h3>Education</h3>
    <p contenteditable="true">${Education}</p>

    <h3>Experience</h3>
    <pcontenteditable="true">${Experience}</p>

    <h3>Skills</h3>
    <pcontenteditable="true">${Skills}</p>
    `;

    // display the generated resume 
    resumeDisplayElement.innerHTML = resumeHTML;
});
