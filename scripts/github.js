const repositories = document.querySelector('#repos');
const pLanguages = document.querySelector('#langs');


function apiGithub() {
    fetch('https://api.github.com/users/lukajlp/repos')
    .then(async res => {
        if(!res.ok) {
            throw new Error(res.status);
        }
        let data = await res.json();
        let languages = [];
        data.map(item => {
            item.language && !languages.includes(item.language) && languages.push(item.language);

            let project = document.createElement('div');
            let imgUrl = `https://raw.githubusercontent.com/lukajlp/${item.name}/main/assets/images/UML.png`;

            project.innerHTML = `
            <div class="card mb-3 bg-body-secondary">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${imgUrl}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8 d-flex">
                        <div class="card-body d-flex align-items-center justify-content-center flex-column">
                            <h4 class="card-title">${ item.name}</h4>
                            <p class="card-text">${ item.description}</p>
                            <a href="${ item.html_url}" class="text-decoration-none" target="_blank">
                            View Project <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `
            repositories.appendChild(project);
        })
        console.log(languages);
        languages.map(language => {
            let skill = document.createElement('li');

            skill.innerHTML = `
                <li class="list-group-item d-inline-block m-3 bg-body-tertiary">
                    ${ language}
                </li>

            `
            pLanguages.appendChild(skill);
        })

    })
}

apiGithub()
