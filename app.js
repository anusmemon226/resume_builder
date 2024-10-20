var section_checkbox = document.querySelectorAll(".menu-item");
Object.keys(section_checkbox).forEach(function (key) {
    section_checkbox[key].children[0].addEventListener("click", function () {
        var targetDiv = document.getElementById("".concat(this.dataset.id));
        targetDiv ? (targetDiv.style.display != "none") ? targetDiv.style.display = "none" : targetDiv.style.display = "block" : "";
    });
});
