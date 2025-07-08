const skills = [
    { name: 'Python', icon: 'python.png', category: 'Programming Langs'},
    { name: 'Java', icon: 'java.png', category: 'Programming Langs'},
    { name: 'DataBase', icon: 'db.png', category: 'Data Analysis'},
    { name: 'HMTL', icon: 'html.png', category: 'Programming Langs'},
    { name: 'CSS', icon: 'css.png', category: 'Programming Langs'},
    { name: 'Matplotlib', icon: 'matplotlib.png', category: 'Data Visualization'},
    { name: 'Seaborn', icon: 'seaborn.svg', category: 'Data Visualization'},
    { name: 'Excel', icon: 'excel.jpg', category: 'Data Analysis'}
];

const projects = [
    {
        name: 'Flipkart Scraper',
        description: `<b style="color: yellow;">Tech Stack</b>: Python, Scrapy, PyQt5, Pandas, Matplotlib, CSV, XPath.<br>
                      <b style="color: yellow;">Overview:</b>
                        The Flipkart Scraper is a Python-based desktop application developed to automate the process of extracting product data from Flipkart's e-commerce platform. This project integrates web scraping, data processing, and graphical user interface (GUI) elements into a seamless tool for users to collect and analyze product-related insights—without requiring technical knowledge.`,
        img: 'scraper.png',
        project_link: '#',
        git_link: 'https://github.com/Kasa-Harendra/Web-Scraping-Project',
        project_doc: 'Flipkart_Scraper.pdf'
    },
];

const certificates = [
    {
        img: 'CDAC.png', 
        certificate_link: 'CDAC.pdf'
    },{
        img: 'L4G.png', 
        certificate_link: 'L4G.pdf'
    },{
        img: 'CS50.png', 
        certificate_link: 'CS50_Python.pdf'
    },{
        img: 'DataScienceCC.png', 
        certificate_link: 'DataScienceCC.pdf'
    },{
        img: 'OET.png', 
        certificate_link: 'OET.pdf'
    }
]
const contentContainer = document.getElementById('content-container');
const projectsContainer = document.getElementById('projects-container');
const skillsButton = document.getElementById('skills');
const certificatesButton = document.getElementById('certifications');

function renderSkills() {
    let content = '<div id="inner-skills-container">';
    data_analy_skills = `<div class="skill-container">
                        <h3 class="skill-field">Data Analytics Tools</h3>
                        `;
    program_skills = `<div class="skill-container">
                    <h3 class="skill-field">Programming Languages</h3>
                    `
    data_visualization_skills = `<div class="skill-container">
                    <h3 class="skill-field">Data Visualization Tools</h3>
                    `
    
    skills.forEach(skill => {
        if(skill.category === 'Data Analysis') {
            data_analy_skills += `<div class="skill">
                                        <img src=./assets/media/skill_images/${skill.icon} class="skill-icon">
                                        <p class="skill-name">${skill.name}</p>
                                  </div>`
        }
        if(skill.category === 'Programming Langs') {
            program_skills += `<div class="skill">
                                        <img src=./assets/media/skill_images/${skill.icon} class="skill-icon">
                                        <p class="skill-name">${skill.name}</p>
                               </div>`
        }
        if(skill.category === 'Data Visualization') {
            data_visualization_skills += `<div class="skill">
                                        <img src=./assets/media/skill_images/${skill.icon} class="skill-icon">
                                        <p class="skill-name">${skill.name}</p>
                               </div>`
        }
       
    });

    all_skills = [data_analy_skills, program_skills, data_visualization_skills];
    all_skills.forEach(skills => {
        skills += `</div>`;
        content += skills;
    });

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

skillsButton.addEventListener('change', () => {
    contentContainer.classList.add('fade');
    setTimeout(() => {
        renderSkills();
        contentContainer.classList.remove('fade');
    }, 300);
});

certificatesButton.addEventListener('change', () => {
    contentContainer.classList.add('fade');
    setTimeout(() => {
        active = 0; 
        renderCertificates();
        contentContainer.classList.remove('fade');
    }, 300);
});

function right_certificate(){
    active++;
    renderCertificates();
}

function left_certificate(){
    active--;
    renderCertificates();
}



if (skillsButton.checked) {
    renderSkills();
}

if (projects.length != 0){
    renderProjects();
}
