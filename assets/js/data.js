export const skill_category = [
    'Programming Langs',
    'Frameworks/Libraries',
    'Tools',
]

export const skills = [
    { name: 'Python', icon: 'python.png', category: 0},
    { name: 'Java', icon: 'java.png', category: 0},
    { name: 'HMTL', icon: 'html.png', category: 0},
    { name: 'CSS', icon: 'css.png', category: 0},
    { name: 'Matplotlib', icon: 'matplotlib.png', category: 1},
    { name: 'Seaborn', icon: 'seaborn.svg', category: 1},
    { name: 'Scrapy', icon: 'scrapy.png', category: 1},
    { name: 'Excel', icon: 'excel.png', category: 2},
    { name: 'VS Code', icon: 'vscode.svg', category: 2},
    { name: 'Git', icon: 'git.jpg', category: 2},
    { name: 'Django', icon: 'django.png', category: 1},
    { name: 'Streamlit', icon: 'streamlit.png', category: 1}
];

export const projects = [
    {
        name: 'README Generator AI App',
        description: `
        A modern web application that automatically generates professional README.md files for GitHub repositories using AI. It streamlines documentation creation by analyzing repo metadata and developer input.<br>
        <b style="color: yellow;">Key Features:</b><br>
            ‣ GitHub OAuth integration for secure repo access<br>
            ‣ AI-powered README generation with project-specific sections <br>
            ‣ Live markdown preview and editing <br>
            ‣ One-click download of the generated README <br>
        `,
        img: 'ReadmeGenerator.jpg' ,
        project_link: 'https://readme-generator-ai-app.vercel.app/',
        git_link: 'https://github.com/Kasa-Harendra/Readme-Generator',
        project_doc: "#"
    },
    {
        name: 'Data Tool: No-Code Data Analysis & Editing App ',
        description: `A Streamlit-based web application that enables users to upload, view, edit, analyze, and visualize datasets without writing code. Users can interactively clean data, generate statistics, and plot insights with ease.resulting in an average 60–65% reduction in manual coding time for standard exploratory data analysis (EDA) workflows (as measured against manual pandas scripting for equivalent tasks).<br>
                      <b style="color: yellow;">Tech Stack</b>: Python, Streamlit, Pandas, Matplotlib. <br>
                      <b style="color: yellow;">Features:</b><br>
                    📱 Mobile-friendly: Easily accessible and usable on smartphones for data viewing and lightweight analysis<br>
                    📂 Upload CSV/XLSX datasets<br>
                    ✏️ Edit data interactively in-browser<br>
                    📊 Visualize statistics and missing values<br>
                    📉 Generate bar, line, histogram, and scatter plots<br>
                    💾 Export modified data for reuse`,
        img: 'DataTool.png',
        project_link: 'https://data-tool-harendra.streamlit.app/',
        git_link: 'https://github.com/Kasa-Harendra/Data-Tool',
        project_doc: '#'
    },
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

export const certificates = [
    {
        img: 'CDAC.png', 
        certificate_link: 'CDAC.pdf'
    },{
        img: 'CS50.png', 
        certificate_link: 'CS50_Python.pdf'
    },{
        img: 'DSA_Python.png', 
        certificate_link: 'DSA_Python.pdf'
    },{
        img: 'L4G.png', 
        certificate_link: 'L4G.pdf'
    },{
        img: 'DataScienceCC.png', 
        certificate_link: 'DataScienceCC.pdf'
    },{
        img: 'OET.png', 
        certificate_link: 'OET.pdf'
    }
]