
window.jsPDF = window.jspdf.jsPDF
// Get references to the form and input elements
const form = document.querySelector("#resume-form");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const addressInput = document.querySelector("#address");
const schoolNameInput = document.querySelector("#school-name");
const degreeInput = document.querySelector("#degree");
const fieldOfStudyInput = document.querySelector("#field-of-study");
const graduationDateInput = document.querySelector("#graduation-date");
const jobTitleInput = document.querySelector("#job-title");
const employerInput = document.querySelector("#employer");
const employmentDateInput = document.querySelector("#employment-date");
const jobDescriptionInput = document.querySelector("#job-description");
const skill1Input = document.querySelector("#skill-1");
const skill2Input = document.querySelector("#skill-2");
const skill3Input = document.querySelector("#skill-3");

// Listen for the form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the input values
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const address = addressInput.value;
  const schoolName = schoolNameInput.value;
  const degree = degreeInput.value;
  const fieldOfStudy = fieldOfStudyInput.value;
  const graduationDate = graduationDateInput.value;
  const jobTitle = jobTitleInput.value;
  const employer = employerInput.value;
  const employmentDate = employmentDateInput.value;
  const jobDescription = jobDescriptionInput.value;
  const skill1 = skill1Input.value;
  const skill2 = skill2Input.value;
  const skill3 = skill3Input.value;

  // Create the PDF document
  const doc = new jsPDF();

  // Set the document font size and style
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");

  // Add the heading to the document
  doc.text(`Resume - ${firstName} ${lastName}`, 15, 15);

  // Set the font size and style for the content
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  // Add the content to the document
  doc.text(`Email: ${email}`, 15, 30);
  doc.text(`Phone: ${phone}`, 15, 35);
  doc.text(`Address: ${address}`, 15, 40);
  doc.text(`Education`, 15, 55);
  doc.text(`School Name: ${schoolName}`, 20, 65);
  doc.text(`Degree: ${degree}`, 20, 70);
  doc.text(`Field of Study: ${fieldOfStudy}`, 20, 75);
  doc.text(`Graduation Date: ${graduationDate}`, 20, 80);
  doc.text(`Work Experience`, 15, 95);
  doc.text(`Job Title: ${jobTitle}`, 20, 105);
  doc.text(`Employer: ${employer}`, 20, 110);
  doc.text(`Employment Date: ${employmentDate}`, 20, 115);
  doc.text(`Job Description: ${jobDescription}`, 20, 120);
  doc.text(`Skills`, 15, 135);
  doc.text(`Skill 1: ${skill1}`, 20, 145);
  doc.text(`Skill 2: ${skill2}`, 20, 150);
  doc.text(`Skill 3: ${skill3}`, 20, 155);

  // Save the document as a PDF file
  doc.save(`${firstName} ${lastName} - Resume.pdf`);
});

















// // Get the form element from the HTML
// const resumeForm = document.querySelector('#resume-form');

// // Add an event listener for when the form is submitted
// resumeForm.addEventListener('submit', function(e) {
//   e.preventDefault(); // Prevent the form from submitting and refreshing the page

//   // Get the input values from the form
//   const firstName = document.querySelector('#first-name').value;
//   const lastName = document.querySelector('#last-name').value;
//   const email = document.querySelector('#email').value;
//   const phone = document.querySelector('#phone').value;
//   const address = document.querySelector('#address').value;
//   const schoolName = document.querySelector('#school-name').value;
//   const degree = document.querySelector('#degree').value;
//   const fieldOfStudy = document.querySelector('#field-of-study').value;
//   const graduationDate = document.querySelector('#graduation-date').value;
//   const jobTitle = document.querySelector('#job-title').value;
//   const employer = document.querySelector('#employer').value;
//   const employmentDate = document.querySelector('#employment-date').value;
//   const jobDescription = document.querySelector('#job-description').value;
//   const skill1 = document.querySelector('#skill-1').value;
//   const skill2 = document.querySelector('#skill-2').value;
//   const skill3 = document.querySelector('#skill-3').value;

//   // Generate the PDF content using the input values
//   const pdfContent = `
//     <h1>${firstName} ${lastName}</h1>
//     <p>Email: ${email}</p>
//     <p>Phone: ${phone}</p>
//     <p>Address: ${address}</p>
//     <h2>Education</h2>
//     <p>${degree} in ${fieldOfStudy} from ${schoolName} - Graduated ${graduationDate}</p>
//     <h2>Work Experience</h2>
//     <h3>${jobTitle} at ${employer}</h3>
//     <p>${employmentDate}</p>
//     <p>${jobDescription}</p>
//     <h2>Skills</h2>
//     <ul>
//       <li>${skill1}</li>
//       <li>${skill2}</li>
//       <li>${skill3}</li>
//     </ul>
//   `;

//   // Generate the PDF using the pdfmake library
//   pdfMake.createPdf({
//     content: [{
//       html: pdfContent
//     }]
//   }).download("resume.pdf"); // Download the PDF file with the name "resume.pdf"
// });














// // Get references to the form and input elements
// const form = document.querySelector("form");
// const firstNameInput = document.querySelector("#first-name");
// const lastNameInput = document.querySelector("#last-name");
// const emailInput = document.querySelector("#email");
// const phoneInput = document.querySelector("#phone");
// const summaryInput = document.querySelector("#summary");

// // Listen for the form submission
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   // Get the input values
//   const firstName = firstNameInput.value;
//   const lastName = lastNameInput.value;
//   const email = emailInput.value;
//   const phone = phoneInput.value;
//   const summary = summaryInput.value;

//   // Create the PDF document
//   const doc = new jsPDF();

//   // Set the document font size and style
//   doc.setFontSize(20);
//   doc.setFont("helvetica", "bold");

//   // Add the heading to the document
//   doc.text(`Resume - ${firstName} ${lastName}`, 15, 15);

//   // Set the font size and style for the content
//   doc.setFontSize(12);
//   doc.setFont("helvetica", "normal");

//   // Add the content to the document
//   doc.text(`Email: ${email}`, 15, 30);
//   doc.text(`Phone: ${phone}`, 15, 35);
//   doc.text(`Summary: ${summary}`, 15, 50);

//   // Save the document as a PDF file
//   doc.save(`${firstName} ${lastName} - Resume.pdf`);
// });
