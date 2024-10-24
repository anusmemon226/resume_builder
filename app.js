var _this = this;
// checkbox hide/show 
var section_checkbox = document.querySelectorAll(".menu-item");
Object.keys(section_checkbox).forEach(function (key) {
    section_checkbox[key].children[0].addEventListener("click", function () {
        var targetDiv = document.getElementById("".concat(this.dataset.id));
        targetDiv ? (targetDiv.style.display != "none") ? targetDiv.style.display = "none" : targetDiv.style.display = "block" : "";
        if (key === "0") {
            var targetForm = document.getElementById("language-section");
            targetForm ? targetForm.style.display = (targetForm.style.display == "none") ? "block" : "none" : "";
        }
        else if (key === "1") {
            var targetForm = document.getElementById("skill-section");
            targetForm ? targetForm.style.display = (targetForm.style.display == "none") ? "block" : "none" : "";
        }
        else if (key === "2") {
            var targetForm = document.getElementById("award-section");
            targetForm ? targetForm.style.display = (targetForm.style.display == "none") ? "block" : "none" : "";
        }
    });
});
// form accordion section 
var formHeader = document.querySelectorAll(".form-header");
Object.keys(formHeader).forEach(function (key) {
    formHeader[key].addEventListener("click", function () {
        var targetFormSection = document.getElementById("".concat(this.dataset.id));
        var formHeaderArrow = formHeader[key].children[1].children[0];
        targetFormSection ? targetFormSection.style.display = (targetFormSection.style.display == "block") ? "none" : "block" : "";
        formHeaderArrow ? formHeaderArrow.style.transform = (formHeaderArrow.style.transform == "rotate(180deg)") ? "rotate(0deg)" : "rotate(180deg)" : "";
    });
});
var resumeDetails = function (value, fieldName) {
    var targetDiv = document.getElementById(fieldName);
    var flag = fieldName.startsWith("language_star");
    if (flag) {
        value = Number(value) - 1;
        var starDiv = targetDiv === null || targetDiv === void 0 ? void 0 : targetDiv.children;
        for (var star in starDiv) {
            if (star <= value) {
                starDiv[star].style.color = "#F15D67";
            }
            else {
                starDiv[star].style.color = "#fff";
            }
        }
        return;
    }
    targetDiv ? targetDiv.innerHTML = value : "";
};
var addEducationBtn = document.getElementById("educationBtn");
var education = 1;
addEducationBtn === null || addEducationBtn === void 0 ? void 0 : addEducationBtn.addEventListener("click", function (e) {
    e.preventDefault();
    education++;
    if (education <= 2) {
        var eduContentDiv = document.getElementById("education-body");
        eduContentDiv ? eduContentDiv.insertAdjacentHTML("beforeend", "<div class=\"education-item\">\n                                <h4 id=\"degree_name_".concat(education, "\">Degree Name Here</h4>\n                                <p id=\"institute_name_").concat(education, "\">\n                                    Institute Name Here\n                                </p>\n                                <p id=\"year\"><span id=\"start_year_").concat(education, "\">Start</span> -\n                                    <span id=\"end_year_").concat(education, "\">End</span>\n                                </p>\n                            </div>")) : "";
        var eduFormDiv = document.getElementById("education-details");
        eduFormDiv ? eduFormDiv.insertAdjacentHTML("beforeend", "<div>\n                                    <div class=\"form-section\">\n                                        <label for=\"\">Degree Name : </label>\n                                        <input type=\"text\" placeholder=\"Enter your Degree Name\" data-id=\"degree_name_".concat(education, "\"\n                                            maxlength=\"50\" oninput=\"resumeDetails(this.value,this.dataset.id)\" required>\n                                    </div>\n                                    <div class=\"form-section\">\n                                        <label for=\"\">Institute Name : </label>\n                                        <input type=\"text\" placeholder=\"Enter Institute Name\"\n                                            oninput=\"resumeDetails(this.value,this.dataset.id)\"\n                                            data-id=\"institute_name_").concat(education, "\" maxlength=\"30\" required>\n                                    </div>\n                                    <div class=\"form-section\">\n                                        <label for=\"\">Start Year : </label>\n                                        <input type=\"text\" data-id=\"start_year_").concat(education, "\"\n                                            oninput=\"resumeDetails(this.value,this.dataset.id)\" placeholder=\"Start Year\"\n                                            maxlength=\"4\" required>\n                                    </div>\n                                    <div class=\"form-section\">\n                                        <label for=\"\">End Year : </label>\n                                        <input type=\"text\" data-id=\"end_year_").concat(education, "\"\n                                            oninput=\"resumeDetails(this.value,this.dataset.id)\" placeholder=\"End Year\"\n                                            maxlength=\"4\" required>\n                                    </div>\n                                </div>")) : "";
    }
    else {
        this.disabled = true;
    }
});
var addLanguageBtn = document.getElementById("languageBtn");
var language = 1;
addLanguageBtn.addEventListener("click", function (e) {
    e.preventDefault();
    language++;
    if (language <= 3) {
        var langContentDiv = document.getElementById("languages-body");
        langContentDiv ? langContentDiv.insertAdjacentHTML("beforeend", "\n            <div class=\"language\">\n                                <p id=\"language_".concat(language, "\">Language</p>\n                                <span id=\"language_star_").concat(language, "\">\n                                    <i class=\"fa-solid fa-star\"></i>\n                                    <i class=\"fa-solid fa-star\"></i>\n                                    <i class=\"fa-solid fa-star\"></i>\n                                    <i class=\"fa-solid fa-star\"></i>\n                                    <i class=\"fa-solid fa-star\"></i>\n                                </span>\n                            </div>")) : "";
        var langFormDiv = document.getElementById("language-details");
        langFormDiv ? langFormDiv.insertAdjacentHTML("beforeend", "<div>\n                                    <div class=\"form-section\">\n                                        <label for=\"\">Language Name : </label>\n                                        <input type=\"text\" oninput=\"resumeDetails(this.value,this.dataset.id)\"\n                                            placeholder=\"Enter Language Name\" data-id=\"language_".concat(language, "\" maxlength=\"50\">\n                                    </div>\n                                    <div class=\"form-section\">\n                                        <label for=\"\">Star Count : </label>\n                                        <input type=\"number\" oninput=\"resumeDetails(this.value,this.dataset.id)\"\n                                            placeholder=\"Star Count (1-5)\" data-id=\"language_star_").concat(language, "\" min=\"1\" max=\"5\">\n                                    </div>\n                                </div>")) : "";
    }
    else {
        _this.disabled = true;
    }
});
var addskillBtn = document.getElementById("skillBtn");
var skill = 1;
addskillBtn === null || addskillBtn === void 0 ? void 0 : addskillBtn.addEventListener("click", function (e) {
    e.preventDefault();
    skill++;
    if (skill <= 5) {
        var skillContentDiv = document.getElementById("skills-body");
        skillContentDiv === null || skillContentDiv === void 0 ? void 0 : skillContentDiv.insertAdjacentHTML("beforeend", "<div class=\"skill\">\n                                <p id=\"skill_".concat(skill, "\">Skill # ").concat(skill, "</p>\n                            </div>"));
        var langFormDiv = document.getElementById("skill-details");
        langFormDiv === null || langFormDiv === void 0 ? void 0 : langFormDiv.insertAdjacentHTML("beforeend", "<div>\n                                    <div class=\"form-section\">\n                                        <label for=\"\">Skill Name : </label>\n                                        <input type=\"text\" oninput=\"resumeDetails(this.value,this.dataset.id)\" placeholder=\"Enter Skill\" data-id=\"skill_".concat(skill, "\" maxlength=\"50\">\n                                    </div>\n                                </div>"));
    }
    else {
        _this.disabled = true;
    }
});
var addAwardBtn = document.getElementById("awardBtn");
var award = 1;
addAwardBtn === null || addAwardBtn === void 0 ? void 0 : addAwardBtn.addEventListener("click", function (e) {
    e.preventDefault();
    award++;
    if (award <= 2) {
        var awardContentDiv = document.getElementById("awards-body");
        awardContentDiv === null || awardContentDiv === void 0 ? void 0 : awardContentDiv.insertAdjacentHTML("beforeend", "<div class=\"award\">\n                                <h4 id=\"award_".concat(award, "\">Award Name Here</h4>\n                                <p id=\"awardOrg_").concat(award, "\" style=\"display: inline-block;\">Institute Name</p>, \n                                <span id=\"year_").concat(award, "\">Year</span>\n                            </div>"));
        var awardFormDiv = document.getElementById("award-details");
        awardFormDiv === null || awardFormDiv === void 0 ? void 0 : awardFormDiv.insertAdjacentHTML("beforeend", "<div>\n                                    <div class=\"form-section\">\n                                        <label for=\"\">Award Name : </label>\n                                        <input type=\"text\" oninput=\"resumeDetails(this.value,this.dataset.id)\" placeholder=\"Enter Award\" data-id=\"award_".concat(award, "\" maxlength=\"50\">\n                                    </div>\n                                    <div class=\"form-section\">\n                                        <label for=\"\">Organization Name : </label>\n                                        <input type=\"text\" oninput=\"resumeDetails(this.value,this.dataset.id)\" placeholder=\"Enter Organization\" data-id=\"awardOrg_").concat(award, "\"\n                                            maxlength=\"50\">\n                                    </div>\n                                    <div class=\"form-section\">\n                                        <label for=\"\">Year : </label>\n                                        <input type=\"text\" oninput=\"resumeDetails(this.value,this.dataset.id)\" placeholder=\"Enter Year\" data-id=\"year_").concat(award, "\" maxlength=\"50\">\n                                    </div>\n                                </div>"));
    }
    else {
        _this.disabled = true;
    }
});
var experienceCount = 1;
var experience = document.getElementById("experienceBtn");
var experienceBody = document.getElementById("experience-body");
var experienceForm = document.getElementById("experience-form");
experience === null || experience === void 0 ? void 0 : experience.addEventListener("click", function (e) {
    e.preventDefault();
    experienceCount++;
    if (experienceCount <= 2) {
        experienceForm === null || experienceForm === void 0 ? void 0 : experienceForm.insertAdjacentHTML("beforeend", "<div>\n                                    <div class=\"form-section\">\n                                        <label for=\"\">Organization Name : </label>\n                                        <input type=\"text\" oninput=\"resumeDetails(this.value,this.dataset.id)\" placeholder=\"Enter Company Name\" data-id=\"org_name_".concat(experienceCount, "\"\n                                            maxlength=\"30\">\n                                    </div>\n                                    <div class=\"form-section\">\n                                        <label for=\"\">Designation : </label>\n                                        <input type=\"text\" oninput=\"resumeDetails(this.value,this.dataset.id)\" placeholder=\"Enter Designation\" data-id=\"org_designation_").concat(experienceCount, "\"\n                                            maxlength=\"30\">\n                                    </div>\n                                    <div class=\"form-section\">\n                                        <label for=\"\">Start Year : </label>\n                                        <input type=\"text\" oninput=\"resumeDetails(this.value,this.dataset.id)\" placeholder=\"Start Year\" data-id=\"org_start_year_").concat(experienceCount, "\"\n                                            maxlength=\"30\">\n                                    </div>\n                                    <div class=\"form-section\">\n                                        <label for=\"\">End Year : </label>\n                                        <input type=\"text\" oninput=\"resumeDetails(this.value,this.dataset.id)\" placeholder=\"Current Year\" data-id=\"org_end_year_").concat(experienceCount, "\"\n                                            maxlength=\"30\">\n                                    </div>\n                                    <div id=\"keyPoints\">\n                                        <div class=\"form-section\">\n                                            <label for=\"\">Key Point # 01 : </label>\n                                            <input type=\"text\" placeholder=\"Enter Key Points 1\" oninput=\"resumeDetails(this.value,this.dataset.id)\" data-id=\"keyPoint_").concat(experienceCount, "_1\"\n                                                maxlength=\"80\">\n                                        </div>\n                                        <div class=\"form-section\">\n                                            <label for=\"\">Key Point # 02 : </label>\n                                            <input type=\"text\" placeholder=\"Enter Key Points 2\" oninput=\"resumeDetails(this.value,this.dataset.id)\" data-id=\"keyPoint_").concat(experienceCount, "_2\"\n                                                maxlength=\"80\">\n                                        </div>\n                                        <div class=\"form-section\">\n                                            <label for=\"\">Key Point # 03 : </label>\n                                            <input type=\"text\" placeholder=\"Enter Key Points 3\" oninput=\"resumeDetails(this.value,this.dataset.id)\" data-id=\"keyPoint_").concat(experienceCount, "_3\"\n                                                maxlength=\"80\">\n                                        </div>\n                                    </div>\n                                </div>"));
        experienceBody === null || experienceBody === void 0 ? void 0 : experienceBody.insertAdjacentHTML("beforeend", "<div class=\"organization\">\n                                <h4 id=\"org_name_".concat(experienceCount, "\">Company Name Here</h4>\n                                <p id=\"org_designation_").concat(experienceCount, "\">Your Designation Here</p>\n                                <p id=\"year\"><span id=\"org_start_year_").concat(experienceCount, "\">Start Year</span> - <span id=\"org_end_year_").concat(experienceCount, "\">End Year</span></p>\n                                <div class=\"key-points\" id=\"key-points\">\n                                    <ul>\n                                        <li id=\"keyPoint_").concat(experienceCount, "_1\">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae autem.</li>\n                                    </ul>\n                                    <ul>\n                                        <li id=\"keyPoint_").concat(experienceCount, "_2\">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae autem.</li>\n                                    </ul>\n                                    <ul>\n                                        <li id=\"keyPoint_").concat(experienceCount, "_3\">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae autem.</li>\n                                    </ul>\n                                </div>\n                            </div>"));
    }
    else {
        _this.disabled = false;
    }
});
