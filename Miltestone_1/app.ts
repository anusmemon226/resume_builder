let section_checkbox : object = document.querySelectorAll(".menu-item")

Object.keys(section_checkbox).forEach(key => {
    section_checkbox[key].children[0].addEventListener("click", function () {
        let targetDiv: HTMLElement | null = document.getElementById(`${this.dataset.id}`)
        targetDiv ? (targetDiv.style.display != "none") ? targetDiv.style.display = "none" : targetDiv.style.display = "block" : ""
    })
})