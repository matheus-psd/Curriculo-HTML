function toggleExperiences() {
    var moreExperiences = document.getElementById("more-experiences");
    var toggleButton = document.getElementById("toggle-experiences");
    
    if (moreExperiences.style.display === "none") {
        moreExperiences.style.display = "block";
        toggleButton.innerText = "Mostrar menos";
    } else {
        moreExperiences.style.display = "none";
        toggleButton.innerText = "Mostrar mais";
    }
}
