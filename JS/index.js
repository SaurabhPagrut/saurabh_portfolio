import { navbarjs } from '../Components/navbar.js';
import { homejs } from "../Components/home.js";
import { aboutjs } from "../Components/about.js";
import { skillsjs } from "../Components/skills.js";
import { projectsjs } from "../Components/projects.js";
import { contactjs } from "../Components/contact.js";

var navbardiv = document.querySelector(".navbar, .navbarchange");
navbardiv.innerHTML = navbarjs();

let home = document.getElementById("home");
home.innerHTML = homejs();

let about = document.getElementById("about");
about.innerHTML = aboutjs();

let skills = document.getElementById("skills");
skills.innerHTML = skillsjs();

let projects = document.getElementById("projects");
projects.innerHTML = projectsjs();

let contact = document.getElementById("contact_me");
contact.innerHTML = contactjs();

$(document).ready(function () {
    $(window).scroll(function () {
        let navdiv = $(document).scrollTop();
        if ((navdiv > 660 && navdiv < 1360) || (navdiv > 2010 && navdiv < 4605)) {
            $(".navbar").addClass("navbarchange");
            $(".ac").addClass("achange");
        } else {
            $(".navbar").removeClass("navbarchange");
            $(".ac").removeClass("achange");
        }
    });
});