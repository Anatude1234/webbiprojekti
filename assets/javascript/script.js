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