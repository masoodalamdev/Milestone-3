// Function to generate the resume based on form input
const generateResume = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    if(name != "" && email != "" && phone != "" && education != "" &&workExperience != "" && skills != ""){

        // Update the resume sections with the form data
        (document.getElementById('resume-name') as HTMLHeadingElement).textContent = name;
        (document.getElementById('resume-email') as HTMLParagraphElement).textContent = `Email: ${email}`;
        (document.getElementById('resume-phone') as HTMLParagraphElement).textContent = `Phone: ${phone}`;
        (document.getElementById('resume-education') as HTMLParagraphElement).textContent = education;
        (document.getElementById('resume-work-experience') as HTMLParagraphElement).textContent = workExperience;
        (document.getElementById('resume-skills') as HTMLParagraphElement).textContent = skills;
        
        // Show the resume section and hide the form
        document.getElementById('resume')?.classList.remove('hidden');
        document.getElementById('resume-form')?.classList.add('hidden');
    }else{
        alert("Please fill the form completely to generate resume")
    }
};

// Add event listener to the button
const button = document.getElementById('generate-resume');
if (button) {
    button.addEventListener('click', generateResume);
}
