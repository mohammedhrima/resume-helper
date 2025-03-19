const educationData = {
  cs: {
    title: "Computer Science",
    date: "Jan 2025 | Ben Guerir",
    skills: [
      "Learned algorithms, data structures, and software development principles",
      "Gained hands-on experience through project-based learning inspired by the 42 Network pedagogy"
    ]
  },
  sd: {
    title: "Software Developer",
    date: "Jan 2025 | Ben Guerir",
    skills: [
      "Learned algorithms, data structures, and software development principles",
      "Gained hands-on experience through project-based learning inspired by the 42 Network pedagogy"
    ]
  }
};

const experienceData = {
  cpp: {
    title: "Software Engineer (Bootcamp) at GoQuant",
    date: "Feb 2025 | 4 Weeks",
    details: [
      "Built low-latency trading algorithms in C++ using multithreading for optimal performance.",
      "Contributed to company projects by developing scalable, real-time trading solutions.",
      "Collaborated in a team environment to deliver high-performance systems.",
      "Gained hands-on experience with financial markets and algorithmic trading strategies."
    ]
  },
  "low-latency": {
    title: "Software Engineer (Bootcamp) at GoQuant",
    date: "Feb 2025 | 4 Weeks",
    details: [
      "Built low-latency trading algorithms in C++ using multithreading for optimal performance.",
      "Contributed to company projects by developing scalable, real-time trading solutions.",
      "Collaborated in a team environment to deliver high-performance systems.",
      "Gained hands-on experience with financial markets and algorithmic trading strategies."
    ]
  },
  python: {
    title: "Software Developer (Freelance)",
    date: "Jan 2022 – Mar 2022",
    details: [
      "Developed a Python desktop application for cross-shift team communication.",
      "Designed and implemented a user-friendly interface using Tkinter.",
      "Deployed the application for use in a manufacturing environment."
    ]
  },
  "ms-project": {
    title: "Method Preparation Technician at LPF Casablanca 2 (Aerospace Industry)",
    date: "Jan 2021 – Jan 2022",
    details: [
      "Optimized project scheduling using MS Project.",
      "Conducted meetings with clients such as SAFRAN and Rolls-Royce to discuss project requirements.",
      "Created 3D designs for control and manufacturing tools using TopSolid.",
      "Collaborated with cross-functional teams to ensure project milestones were met."
    ]
  },
  cad: {
    title: "CNC Machinist at LPF Casablanca 1 (Aerospace Industry)",
    date: "Nov 2019 – Mar 2020",
    details: [
      "Operated and programmed CNC machines for precision manufacturing.",
      "Performed quality checks to ensure parts met design specifications.",
      "Maintained and troubleshooted CNC equipment to minimize downtime."
    ]
  }
};

const skillData = {
  "web-dev": "Web Development",
  "problem-solving": "Problem Solving",
  python: "Python Programming",
  c: "C Programming",
  cpp: "C++ Programming",
  assembly: "Assembly Language",
  "low-latency": "Low Latency Systems",
  "js-ts": "JavaScript / TypeScript",
  cad: "CAD Design"
};

const projectData = {
  urajs: {
    title: "Frontend Framework (UraJS)",
    description: "Developed custom JavaScript/TypeScript framework inspired by ReactJS and NextJS. Implemented real-time rendering. Created Dockerfile and Nginx config generation for easy deployment.",
    technologies: ["JavaScript", "TypeScript", "ExpressJS", "Docker", "Nginx"]
  },
  aiImageClassifier: {
    title: "AI-Powered Image Classifier",
    description: "Developed using Python, deep learning, and CNNs with TensorFlow. Achieved accurate image recognition across categories with AI models. Integrated OpenCV for real-time AI-driven image prediction.",
    technologies: ["Python", "TensorFlow", "OpenCV"]
  },
  onlineChatPlatform: {
    title: "Online Chat Platform",
    description: "Built a full-stack web app with real-time messaging using React, Node.js, and Express. Used PostgreSQL for efficient data storage. Designed a responsive UI for a smooth user experience.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL"]
  },
  patientsManagement: {
    title: "Patients Management",
    description: "RESTful API built with Node.js and Express for managing patient records. Uses MySQL for storing patient data, supporting CRUD operations. Enables efficient patient management in a healthcare system.",
    technologies: ["Node.js", "Express.js", "MySQL"]
  },
  dashboard: {
    title: "Dashboard",
    description: "Built a real-time data dashboard with React and Express.js. Used SQLite with Prisma for smooth database interactions. Designed an interactive, responsive UI for clear data insights.",
    technologies: ["React", "Express.js", "SQLite", "Prisma"]
  },
  raytracer: {
    title: "Raytracer",
    description: "Built a C++ raytracer to render 3D scenes with realistic lighting, reflections, and shadows. Optimized performance using multithreading for faster rendering. Developed camera controls (zoom, rotate, pan) for interactive scene navigation using mouse and keyboard.",
    technologies: ["C++"]
  },
  orderExecutionSystem: {
    title: "Order Execution and Management System",
    description: "Implemented core features: place, cancel, modify orders, and view orderbook using C++. Integrated WebSocket server for real-time market data updates.",
    technologies: ["C++", "WebSocket"]
  },
  httpWebServer: {
    title: "HTTP WebServer",
    description: "Built a high-performance C++ HTTP webserver based on RFC standards. Designed to serve static content efficiently, with architecture similar to Nginx. Created a tester to simulate client requests, ensuring the server's reliability in various use cases.",
    technologies: ["C++", "Nginx"]
  },
  wolfC: {
    title: "Compiler (wolf-c)",
    description: "Designed a Python-like language with types using C. Implemented optimization algorithms using the Intermediate Representation. Generated assembly code directly, eliminating reliance on third-party frameworks.",
    technologies: ["C"]
  },
  interpreter: {
    title: "Interpreter",
    description: "Developed an interpreter that executes instructions line by line in C. Implemented a recursive descent parser to process and run code efficiently.",
    technologies: ["C"]
  }
};

const projectsForm = document.getElementById('projects-form');
Object.entries(projectData).forEach(([key, project]) => {
  const label = document.createElement('label');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.name = 'technology';
  input.value = key;
  const text = document.createTextNode(project.title);
  label.appendChild(input);
  label.appendChild(text);
  projectsForm.appendChild(label);
});

function updateEducation() {
  const educationValues = Array.from(document.querySelectorAll('#education-form input:checked')).map((cb) => cb.value);
  const education = document.getElementById("education");
  education.innerHTML = `<h2>Education.</h2>`;
  if (educationValues.length == 0) {
    education.innerHTML += `<p>No item selected.</p>`;
  }
  else {
    educationValues.forEach(key => {
      if (educationData[key]) {
        const obj = educationData[key];
        education.innerHTML += `<div class="education-item">
                                <h3>${obj.title}</h3> <p><strong>Date:</strong> ${obj.date}</p>
                                <ul>${obj.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
                                </div>`
      }
    })
  }
}

function updateSkills() {
  const skillValues = Array.from(document.querySelectorAll('#skill-form input:checked')).map((cb) => cb.value);
  const skillsSection = document.getElementById("skills");
  skillsSection.innerHTML = `<h2>Skills</h2>`;
  if (skillValues.length === 0) {
    skillsSection.innerHTML += `<p>No skills selected.</p>`;
  } else {
    skillValues.forEach((key) => {
      if (skillData[key]) {
        skillsSection.innerHTML += `<div class="skill-item">
                                    <p>${skillData[key]}</p>
                                  </div>`;
      }
    });
  }
}

function updateExperience() {
  const experienceValues = Array.from(document.querySelectorAll('#experience-form input:checked')).map((cb) => cb.value);
  const experienceSection = document.getElementById("experience");

  experienceSection.innerHTML = `<h2>Experience</h2>`;
  if (experienceValues.length === 0) {
    experienceSection.innerHTML += `<p>No experience selected.</p>`;
  } else {
    experienceValues.forEach((key) => {
      if (experienceData[key]) {
        const experience = experienceData[key];
        experienceSection.innerHTML += `
          <div class="experience-item">
            <h3>${experience.title}</h3>
            <p><strong>Date:</strong> ${experience.date}</p>
            <ul>
              ${experience.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
          </div>
        `;
      }
    });
  }
}

function updateProjects() {
  const selectedProjectKeys = Array.from(document.querySelectorAll('#projects-form input:checked')).map((cb) => cb.value);
  const projectsSection = document.getElementById("projects");
  projectsSection.innerHTML = `<h2>Projects</h2>`;
  if (selectedProjectKeys.length === 0) {
    projectsSection.innerHTML += `<p>No projects selected.</p>`;
  } else {
    const filteredProjects = selectedProjectKeys.map((key) => projectData[key]);
    if (filteredProjects.length === 0) {
      projectsSection.innerHTML += `<p>No projects found for the selected keys.</p>`;
    } else {
      filteredProjects.forEach((project) => {
        projectsSection.innerHTML += `
          <div class="project-item">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
          </div>
        `;
      });
    }
  }
}

function updateContent() {
  updateEducation()
  updateSkills()
  updateExperience();
  updateProjects();
}

document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', updateContent);
});

updateContent();