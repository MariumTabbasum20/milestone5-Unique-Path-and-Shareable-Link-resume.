var _a, _b;
// Function to collect form data and generate the resume
function generateResume() {
    // Getting input values from the form
    var username = document.getElementById('Username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Creating the resume data object
    var resumeData = {
        username: username,
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills,
    };
    // Injecting the data into the resume display section
    var resumeDisplay = document.getElementById('resume-display');
    if (resumeDisplay) {
        resumeDisplay.innerHTML = "\n      <h2>".concat(resumeData.name, "'s Resume</h2>\n      <p><strong>Username:</strong> ").concat(resumeData.username, "</p>\n      <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n      <p><strong>Phone:</strong> ").concat(resumeData.phone, "</p>\n      <h3>Education</h3>\n      <p>").concat(resumeData.education, "</p>\n      <h3>Experience</h3>\n      <p>").concat(resumeData.experience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(resumeData.skills, "</p>\n    ");
    }
    // Creating the shareable link
    var shareableLinkContainer = document.getElementById('Shareable-link-container');
    var shareableLink = document.getElementById('Shareable-link');
    if (shareableLink && shareableLinkContainer) {
        var uniqueLink = "https://resume-builder.com/view?name=".concat(encodeURIComponent(resumeData.name));
        shareableLink.href = uniqueLink;
        shareableLink.innerText = uniqueLink;
        shareableLinkContainer.style.display = 'block'; // Show the shareable link section
    }
}
// Function to download the resume as PDF
function downloadResumeAsPDF() {
    var resumeDisplay = document.getElementById('resume-display');
    if (resumeDisplay) {
        var doc = new jsPDF(); // Create a new jsPDF instance
        // Adding content to the PDF from the resume section
        doc.text(resumeDisplay.innerText, 10, 10); // Position (10,10) and adding text from resume
        // Save the generated PDF with the filename "resume.pdf"
        doc.save('resume.pdf');
    }
}
// Event Listeners
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page
    generateResume();
});
(_b = document.getElementById('download-pdf')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', downloadResumeAsPDF);
