document.addEventListener("DOMContentLoaded", function () {

    const goToTopButton = document.getElementById("goToTop");
    const goToEndButton = document.getElementById("goToEnd");

   
    goToTopButton.addEventListener("click", scrollToTop);
    goToEndButton.addEventListener("click", scrollToEnd);

  
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

   
    function scrollToEnd() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const passwordScreen = document.getElementById("password-screen");
    const websiteContent = document.getElementById("website-content");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submit-password");

   
    const correctPassword = "109";
    const verificationQuestion = "What is the answer?";

    submitButton.addEventListener("click", function () {
        const userAnswer = passwordInput.value.trim();

        if (userAnswer.toLowerCase() === correctPassword.toLowerCase()) {
            passwordScreen.style.display = "none"; 
            websiteContent.style.display = "block"; 
        } else {
            alert("Incorrect answer. Try again.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const showAnswerButton = document.getElementById("show-answer");
  
  
    const correctAnswerDiv = document.getElementById("correct-answer");
  
    showAnswerButton.addEventListener("click", function () {
      correctAnswerDiv.style.display = "block";
    });
  });