
declare var jsPDF: any;


interface ResumeData {
  username: string;
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  skills: string;
}

// Function to collect form data and generate the resume
function generateResume() {
  // Getting input values from the form
  const username = (document.getElementById('Username') as HTMLInputElement).value;
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Creating the resume data object
  const resumeData: ResumeData = {
    username,
    name,
    email,
    phone,
    education,
    experience,
    skills,
  };

  // Injecting the data into the resume display section
  const resumeDisplay = document.getElementById('resume-display');
  if (resumeDisplay) {
    resumeDisplay.innerHTML = `
      <h2>${resumeData.name}'s Resume</h2>
      <p><strong>Username:</strong> ${resumeData.username}</p>
      <p><strong>Email:</strong> ${resumeData.email}</p>
      <p><strong>Phone:</strong> ${resumeData.phone}</p>
      <h3>Education</h3>
      <p>${resumeData.education}</p>
      <h3>Experience</h3>
      <p>${resumeData.experience}</p>
      <h3>Skills</h3>
      <p>${resumeData.skills}</p>
    `;
  }

  // Creating the shareable link
  const shareableLinkContainer = document.getElementById('Shareable-link-container');
  const shareableLink = document.getElementById('Shareable-link') as HTMLAnchorElement;

  if (shareableLink && shareableLinkContainer) {
    const uniqueLink = `https://resume-builder.com/view?name=${encodeURIComponent(resumeData.name)}`;
    shareableLink.href = uniqueLink;
    shareableLink.innerText = uniqueLink;
    shareableLinkContainer.style.display = 'block'; // Show the shareable link section
  }
}

// Function to download the resume as PDF
function downloadResumeAsPDF() {
  const resumeDisplay = document.getElementById('resume-display');
  if (resumeDisplay) {
    const doc = new jsPDF(); // Create a new jsPDF instance

    // Adding content to the PDF from the resume section
    doc.text(resumeDisplay.innerText, 10, 10); // Position (10,10) and adding text from resume

    // Save the generated PDF with the filename "resume.pdf"
    doc.save('resume.pdf');
  }
}

// Event Listeners
document.getElementById('resume-form')?.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from reloading the page
  generateResume();
});

document.getElementById('download-pdf')?.addEventListener('click', downloadResumeAsPDF);
