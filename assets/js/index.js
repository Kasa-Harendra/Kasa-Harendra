import { skills } from './data.js';
import { projects } from './data.js';
import { certificates } from './data.js';
import { skill_category } from './data.js';



const contentContainer = document.getElementById('content-container');
const projectsContainer = document.getElementById('projects-container');
const skillsButton = document.getElementById('skills');
const certificatesButton = document.getElementById('certifications');

function renderSkills() {
    let _skills = {};
    let content = '<div id="inner-skills-container">';
    for (let skill in skill_category) {
        _skills[String(skill)] = `<div class="skill-container">
                          <h3 class="skill-field">${skill_category[skill]}</h3>
                        `;
    }
    skills.forEach(skill => {
        _skills[String(skill.category)] += `<div class="skill">
                                        <img src=./assets/media/skill_images/${skill.icon} class="skill-icon">
                                        <p class="skill-name">${skill.name}</p>
                                    </div>`;
    });
    for (let skill in _skills) {
        _skills[skill] += '</div>';
        content += _skills[skill];
    }
    content += `</div>`;
    contentContainer.innerHTML = content;
}

let active = 0;

function renderCertificates() {
    if (active < 0) active = 0;
    if (active >= certificates.length) active = certificates.length - 1;

    const activeCert = certificates[active];

    let leftCertHTML = '<div id="left-certificate" style="background-color:transparent;"></div>';
    if (active > 0) {
        const prevCert = certificates[active - 1];
        leftCertHTML = `
            <div id="left-certificate" onclick="left_certificate()">
                <img src="./assets/media/certificate_images/${prevCert.img}" alt="Previous Certificate">
            </div>
        `;
    }

    let rightCertHTML = '<div id="right-certificate" style="background-color:transparent;"></div>';
    if (active < certificates.length - 1) {
        const nextCert = certificates[active + 1];
        rightCertHTML = `
            <div id="right-certificate" onclick="right_certificate()">
                <img src="./assets/media/certificate_images/${nextCert.img}" alt="Next Certificate">
            </div>
        `;
    }

    const content = `
        <div id="certificates">
            ${leftCertHTML}
            <a href="./assets/documents/certificates/${activeCert.certificate_link}" target="_blank">
                <div id="active-certificate">
                    <img src="./assets/media/certificate_images/${activeCert.img}" alt="Active Certificate">
                </div>
            </a>
            ${rightCertHTML}
        </div>
    `;
    contentContainer.innerHTML = content;
}

function renderProjects() {
    let content = '';
    let pos = 'left';
    projects.forEach(project => {
        content += `
            <div class="project-${pos}">
                <a href="${project.project_link}" class="project-link">
                    <img src="./assets/media/project_images/${project.img}" alt="Project 1">
                </a>
                <div class="project-info">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p><br>
                    <div class="links">
                        <a href="${project.git_link}" class="btn">GitHub Link</a>
                        ${((project.project_doc) !== '#' && (project.project_doc) !== '') ? '<a href="./documents/documentations/' + project.project_doc + '" class="btn">Full Doc</a>' : ''}
                        ${((project.project_link) !== '#' && (project.project_link) !== '') ? '<a href="' + project.project_link + '" class="btn">View</a>' : ''}
                    </div>
                </div>
            </div>`;
        if (pos === 'left') {
            pos = 'right';
        } else {
            pos = 'left';
        }
    });
    projectsContainer.innerHTML = content;
}

skillsButton.addEventListener('click', () => {
    contentContainer.classList.add('fade');
    setTimeout(() => {
        renderSkills();
        contentContainer.classList.remove('fade');
    }, 300);
});

certificatesButton.addEventListener('click', () => {
    contentContainer.classList.add('fade');
    setTimeout(() => {
        active = 0;
        renderCertificates();
        contentContainer.classList.remove('fade');
    }, 300);
});

window.right_certificate = function() {
    active++;
    renderCertificates();
}

window.left_certificate = function() {
    active--;
    renderCertificates();
}

if (skillsButton.checked) {
    renderSkills();
}

if (projects.length != 0){
    renderProjects();
}
