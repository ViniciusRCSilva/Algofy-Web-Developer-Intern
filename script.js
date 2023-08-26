/* When the window is scrolled, it's gonna add a class to make the topbar darker */
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        document.getElementById('topbar').classList.add('scrolled');
    } else {
        document.getElementById('topbar').classList.remove('scrolled');
    }
});

document.getElementById('aboutBtn').addEventListener('click', () => {
    if(document.getElementById('content').classList.contains('none')) {
        document.getElementById('arrow').classList.add('active')
        document.getElementById('content').classList.remove('none')
        document.getElementById('content').classList.add('active')
    } else {
        document.getElementById('arrow').classList.remove('active')
        document.getElementById('content').classList.remove('active')
        document.getElementById('content').classList.add('none')
    }
});

fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        data.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project')
            projectDiv.innerHTML = `   
                <h3>${project.name}</h3>
                <img src="${project.image}" alt="Project Image" class="projectImage" />
                <p>${project.description}</p>
                <div class="linkToProject">                
                    <img src="images/github-icon.png" alt="GitHub Logo" style="width: 20px;" />
                    <a href="${project.link}" target="_blank" style="font-weight: bold;">
                        Link to GitHub
                    </a>
                </div>
            `;
            document.getElementById('projects').appendChild(projectDiv);
        });
    })
    .catch(error => console.error('Error to load the JSON file:', error));