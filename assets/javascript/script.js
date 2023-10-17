document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons
    const goToTopButton = document.getElementById("goToTop");
    const goToEndButton = document.getElementById("goToEnd");

    // Add click event listeners to the buttons
    goToTopButton.addEventListener("click", scrollToTop);
    goToEndButton.addEventListener("click", scrollToEnd);

    // Function to scroll to the top of the page
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Function to scroll to the end of the page
    function scrollToEnd() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const passwordScreen = document.getElementById("password-screen");
    const websiteContent = document.getElementById("website-content");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submit-password");

    // Set your desired password and verification question
    const correctPassword = "109";
    const verificationQuestion = "What is the answer?";

    submitButton.addEventListener("click", function () {
        const userAnswer = passwordInput.value.trim();

        if (userAnswer.toLowerCase() === correctPassword.toLowerCase()) {
            passwordScreen.style.display = "none"; // Hide password screen
            websiteContent.style.display = "block"; // Show website content
        } else {
            alert("Incorrect answer. Try again.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Your existing code...
  
    // Reference to the "Show Answer" button
    const showAnswerButton = document.getElementById("show-answer");
  
    // Reference to the element displaying the correct answer
    const correctAnswerDiv = document.getElementById("correct-answer");
  
    showAnswerButton.addEventListener("click", function () {
      correctAnswerDiv.style.display = "block";
    });
  });