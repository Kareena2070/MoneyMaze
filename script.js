function toggleContent() {
    var extraContent = document.getElementById("extra-content");
    if (extraContent.style.display === "block") {
        extraContent.style.display = "none"; // Hide the content
    } else {
        extraContent.style.display = "block"; // Show the content
    }
}
