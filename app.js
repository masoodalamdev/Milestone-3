// Function to generate the resume based on form input
var generateResume = function () {
    var _a, _b;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    if (name != "" && email != "" && phone != "" && education != "" && workExperience != "" && skills != "") {
        // Update the resume sections with the form data
        document.getElementById('resume-name').textContent = name;
        document.getElementById('resume-email').textContent = "Email: ".concat(email);
        document.getElementById('resume-phone').textContent = "Phone: ".concat(phone);
        document.getElementById('resume-education').textContent = education;
        document.getElementById('resume-work-experience').textContent = workExperience;
        document.getElementById('resume-skills').textContent = skills;
        // Show the resume section and hide the form
        (_a = document.getElementById('resume')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
        (_b = document.getElementById('resume-form')) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
    }
    else {
        alert("Please fill the form completely to generate resume");
    }
};
// Add event listener to the button
var button = document.getElementById('generate-resume');
if (button) {
    button.addEventListener('click', generateResume);
}
