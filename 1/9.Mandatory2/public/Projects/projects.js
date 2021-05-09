(async function getProjects() {

    const response = await fetch("/api/projects");
    const result = await response.json();

    const projectsDiv = document.getElementById("projects");

    result.projects.map(projects => {
        const projectDiv = document.createElement("div");

        const projectTitle = document.createElement("h2");
        projectTitle.classList.add("project-title");
        projectTitle.innerText = projects.title;

        const projectDescription = document.createElement("p");
        projectDescription.classList.add("project-description");
        projectDescription.innerText = projects.description;

        const projectURL = document.createElement("p");
        projectURL.classList.add("project-URL");
        projectURL.innerText = projects.gitURL;

        const projectTechnologies = document.createElement("p");
        projectTechnologies.classList.add("project-Technologies");
        projectTechnologies.innerText = projects.tecknologiesInvolved;

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectURL);
        projectDiv.appendChild(projectTechnologies);

        projectsDiv.appendChild(projectDiv);

        console.log(projects);

    });
})();