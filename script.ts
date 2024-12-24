// Select form and output elements
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

// Function to generate the resume
function generateResume(event: Event): void {
    event.preventDefault(); // Prevent form submission and page reload

    // Get input values from the form
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Generate the HTML structure for the resume
    const resumeHTML: string = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Experience</h3>
        <p>${experience.replace(/\n/g, "<br>")}</p>
        <h3>Skills</h3>
        <p>${skills.replace(/\n/g, "<br>")}</p>
    `;

    // Display the resume output
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeHTML;
        resumeOutput.style.display = "block";
    }
}

// Attach event listener to the form
if (resumeForm) {
    resumeForm.addEventListener("submit", generateResume);
}