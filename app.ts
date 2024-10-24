// checkbox hide/show 
let section_checkbox: object = document.querySelectorAll(".menu-item")
Object.keys(section_checkbox).forEach(key => {
    section_checkbox[key].children[0].addEventListener("click", function () {
        let targetDiv: HTMLElement | null = document.getElementById(`${this.dataset.id}`)
        targetDiv ? (targetDiv.style.display != "none") ? targetDiv.style.display = "none" : targetDiv.style.display = "block" : ""
        if (key === "0") {
            let targetForm = document.getElementById("language-section")
            targetForm ? targetForm.style.display = (targetForm.style.display == "none") ? "block" : "none" : ""
        } else if (key === "1") {
            let targetForm = document.getElementById("skill-section")
            targetForm ? targetForm.style.display = (targetForm.style.display == "none") ? "block" : "none" : ""
        } else if (key === "2") {
            let targetForm = document.getElementById("award-section")
            targetForm ? targetForm.style.display = (targetForm.style.display == "none") ? "block" : "none" : ""
        }
    })
})

// form accordion section 
let formHeader: object = document.querySelectorAll(".form-header")
Object.keys(formHeader).forEach(key => {
    formHeader[key].addEventListener("click", function () {
        let targetFormSection = document.getElementById(`${this.dataset.id}`)
        let formHeaderArrow = formHeader[key].children[1].children[0]
        targetFormSection ? targetFormSection.style.display = (targetFormSection.style.display == "block") ? "none" : "block" : ""
        formHeaderArrow ? formHeaderArrow.style.transform = (formHeaderArrow.style.transform == "rotate(180deg)") ? "rotate(0deg)" : "rotate(180deg)" : ""
    })
})

let resumeDetails = (value, fieldName: any) => {
    let targetDiv = document.getElementById(fieldName)
    let flag = fieldName.startsWith("language_star")
    if (flag) {
        value = Number(value) - 1
        let starDiv: any = targetDiv?.children
        for (let star in starDiv) {
            if (star <= value) {
                starDiv[star].style.color = "#F15D67"
            } else {
                starDiv[star].style.color = "#fff"
            }

        }
        return
    }
    targetDiv ? targetDiv.innerHTML = value : ""
}

let addEducationBtn = <HTMLInputElement>document.getElementById("educationBtn")
let education = 1
addEducationBtn?.addEventListener("click", function (e) {
    e.preventDefault()
    education++
    if (education <= 2) {
        let eduContentDiv = document.getElementById("education-body")
        eduContentDiv ? eduContentDiv.insertAdjacentHTML("beforeend", `<div class="education-item">
                                <h4 id="degree_name_${education}">Degree Name Here</h4>
                                <p id="institute_name_${education}">
                                    Institute Name Here
                                </p>
                                <p id="year"><span id="start_year_${education}">Start</span> -
                                    <span id="end_year_${education}">End</span>
                                </p>
                            </div>`) : ""
        let eduFormDiv = document.getElementById("education-details")
        eduFormDiv ? eduFormDiv.insertAdjacentHTML("beforeend", `<div>
                                    <div class="form-section">
                                        <label for="">Degree Name : </label>
                                        <input type="text" placeholder="Enter your Degree Name" data-id="degree_name_${education}"
                                            maxlength="50" oninput="resumeDetails(this.value,this.dataset.id)" required>
                                    </div>
                                    <div class="form-section">
                                        <label for="">Institute Name : </label>
                                        <input type="text" placeholder="Enter Institute Name"
                                            oninput="resumeDetails(this.value,this.dataset.id)"
                                            data-id="institute_name_${education}" maxlength="30" required>
                                    </div>
                                    <div class="form-section">
                                        <label for="">Start Year : </label>
                                        <input type="text" data-id="start_year_${education}"
                                            oninput="resumeDetails(this.value,this.dataset.id)" placeholder="Start Year"
                                            maxlength="4" required>
                                    </div>
                                    <div class="form-section">
                                        <label for="">End Year : </label>
                                        <input type="text" data-id="end_year_${education}"
                                            oninput="resumeDetails(this.value,this.dataset.id)" placeholder="End Year"
                                            maxlength="4" required>
                                    </div>
                                </div>`) : ""
    } else {
        this.disabled = true
    }
})


let addLanguageBtn = <HTMLInputElement>document.getElementById("languageBtn")
let language = 1
addLanguageBtn.addEventListener("click", (e) => {
    e.preventDefault()
    language++
    if (language <= 3) {
        let langContentDiv = document.getElementById("languages-body")
        langContentDiv ? langContentDiv.insertAdjacentHTML("beforeend", `
            <div class="language">
                                <p id="language_${language}">Language</p>
                                <span id="language_star_${language}">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </div>`) : ""
        let langFormDiv = document.getElementById("language-details")
        langFormDiv ? langFormDiv.insertAdjacentHTML("beforeend", `<div>
                                    <div class="form-section">
                                        <label for="">Language Name : </label>
                                        <input type="text" oninput="resumeDetails(this.value,this.dataset.id)"
                                            placeholder="Enter Language Name" data-id="language_${language}" maxlength="50">
                                    </div>
                                    <div class="form-section">
                                        <label for="">Star Count : </label>
                                        <input type="number" oninput="resumeDetails(this.value,this.dataset.id)"
                                            placeholder="Star Count (1-5)" data-id="language_star_${language}" min="1" max="5">
                                    </div>
                                </div>`) : ""
    } else {
        this.disabled = true
    }
})


let addskillBtn = document.getElementById("skillBtn")
let skill = 1
addskillBtn?.addEventListener("click", (e) => {
    e.preventDefault()
    skill++
    if (skill <= 5) {
        let skillContentDiv = document.getElementById("skills-body")
        skillContentDiv?.insertAdjacentHTML("beforeend", `<div class="skill">
                                <p id="skill_${skill}">Skill # ${skill}</p>
                            </div>`)
        let langFormDiv = document.getElementById("skill-details")
        langFormDiv?.insertAdjacentHTML("beforeend", `<div>
                                    <div class="form-section">
                                        <label for="">Skill Name : </label>
                                        <input type="text" oninput="resumeDetails(this.value,this.dataset.id)" placeholder="Enter Skill" data-id="skill_${skill}" maxlength="50">
                                    </div>
                                </div>`)
    } else {
        this.disabled = true
    }
})


let addAwardBtn = document.getElementById("awardBtn")
let award = 1
addAwardBtn?.addEventListener("click", (e) => {
    e.preventDefault()
    award++
    if (award <= 2) {
        let awardContentDiv = document.getElementById("awards-body")
        awardContentDiv?.insertAdjacentHTML("beforeend", `<div class="award">
                                <h4 id="award_${award}">Award Name Here</h4>
                                <p id="awardOrg_${award}" style="display: inline-block;">Institute Name</p>, 
                                <span id="year_${award}">Year</span>
                            </div>`)
        let awardFormDiv = document.getElementById("award-details")
        awardFormDiv?.insertAdjacentHTML("beforeend", `<div>
                                    <div class="form-section">
                                        <label for="">Award Name : </label>
                                        <input type="text" oninput="resumeDetails(this.value,this.dataset.id)" placeholder="Enter Award" data-id="award_${award}" maxlength="50">
                                    </div>
                                    <div class="form-section">
                                        <label for="">Organization Name : </label>
                                        <input type="text" oninput="resumeDetails(this.value,this.dataset.id)" placeholder="Enter Organization" data-id="awardOrg_${award}"
                                            maxlength="50">
                                    </div>
                                    <div class="form-section">
                                        <label for="">Year : </label>
                                        <input type="text" oninput="resumeDetails(this.value,this.dataset.id)" placeholder="Enter Year" data-id="year_${award}" maxlength="50">
                                    </div>
                                </div>`)
    } else {
        this.disabled = true
    }
})


let experienceCount = 1
let experience = document.getElementById("experienceBtn")
let experienceBody = document.getElementById("experience-body")
let experienceForm = document.getElementById("experience-form")
experience?.addEventListener("click", (e) => {
    e.preventDefault()
    experienceCount++
    if (experienceCount <= 2) {
        experienceForm?.insertAdjacentHTML("beforeend", `<div>
                                    <div class="form-section">
                                        <label for="">Organization Name : </label>
                                        <input type="text" oninput="resumeDetails(this.value,this.dataset.id)" placeholder="Enter Company Name" data-id="org_name_${experienceCount}"
                                            maxlength="30">
                                    </div>
                                    <div class="form-section">
                                        <label for="">Designation : </label>
                                        <input type="text" oninput="resumeDetails(this.value,this.dataset.id)" placeholder="Enter Designation" data-id="org_designation_${experienceCount}"
                                            maxlength="30">
                                    </div>
                                    <div class="form-section">
                                        <label for="">Start Year : </label>
                                        <input type="text" oninput="resumeDetails(this.value,this.dataset.id)" placeholder="Start Year" data-id="org_start_year_${experienceCount}"
                                            maxlength="30">
                                    </div>
                                    <div class="form-section">
                                        <label for="">End Year : </label>
                                        <input type="text" oninput="resumeDetails(this.value,this.dataset.id)" placeholder="Current Year" data-id="org_end_year_${experienceCount}"
                                            maxlength="30">
                                    </div>
                                    <div id="keyPoints">
                                        <div class="form-section">
                                            <label for="">Key Point # 01 : </label>
                                            <input type="text" placeholder="Enter Key Points 1" oninput="resumeDetails(this.value,this.dataset.id)" data-id="keyPoint_${experienceCount}_1"
                                                maxlength="80">
                                        </div>
                                        <div class="form-section">
                                            <label for="">Key Point # 02 : </label>
                                            <input type="text" placeholder="Enter Key Points 2" oninput="resumeDetails(this.value,this.dataset.id)" data-id="keyPoint_${experienceCount}_2"
                                                maxlength="80">
                                        </div>
                                        <div class="form-section">
                                            <label for="">Key Point # 03 : </label>
                                            <input type="text" placeholder="Enter Key Points 3" oninput="resumeDetails(this.value,this.dataset.id)" data-id="keyPoint_${experienceCount}_3"
                                                maxlength="80">
                                        </div>
                                    </div>
                                </div>`)
        experienceBody?.insertAdjacentHTML("beforeend", `<div class="organization">
                                <h4 id="org_name_${experienceCount}">Company Name Here</h4>
                                <p id="org_designation_${experienceCount}">Your Designation Here</p>
                                <p id="year"><span id="org_start_year_${experienceCount}">Start Year</span> - <span id="org_end_year_${experienceCount}">End Year</span></p>
                                <div class="key-points" id="key-points">
                                    <ul>
                                        <li id="keyPoint_${experienceCount}_1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae autem.</li>
                                    </ul>
                                    <ul>
                                        <li id="keyPoint_${experienceCount}_2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae autem.</li>
                                    </ul>
                                    <ul>
                                        <li id="keyPoint_${experienceCount}_3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae autem.</li>
                                    </ul>
                                </div>
                            </div>`)
    } else {
        this.disabled = false
    }
})