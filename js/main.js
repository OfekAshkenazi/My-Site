'use strict'
console.log('we start')
const myProjects = []
const stoarge_key = 'myProjects'

/// dont forgot to add todo and book shop
$(onInit)

function onInit() {
    createProjects()
    renderProjects()
    renderModels()
    addEvListenersForForms()

}

function createProjects() {
    createProcject('minesweeper', 'minesweeper', 'made by ofek ashkenazi', 'this project was alot of fun creative and think out of the box', 'https://ofekashkenazi.github.io/ofekMineSweeper/', '1669635185')
    createProcject('TouchNums', 'TouchNums', 'made by ofek ashkenazi', 'this project was very fun :)', 'https://ofekashkenazi.github.io/ofekSortNums/', '1669030385')
    createProcject('BallBoard', 'BallBoard', 'made by ofek ashkenazi', 'this project is the first keyboard game i made', 'https://ofekashkenazi.github.io/ballBoard/', '1668425585')
    createProcject('PacMan', 'PacMan', 'made by ofek ashkenazi', 'short style of my pacman', 'https://ofekashkenazi.github.io/ofekPacMan/', '1669030385')
    createProcject('ToDo', 'ToDo', 'made by ofek ashkenazi', 'To Do App very useful', 'https://ofekashkenazi.github.io/To-Do-App/', '1669030385')
    createProcject('book-App', 'book-App', 'made by ofek ashkenazi', 'book mangement App ', 'https://ofekashkenazi.github.io/booksShop/', '1669030385')
}

function createProcject(name, id, title, desc, url, publishAt) {
    return myProjects.push({
        name,
        id,
        title,
        desc,
        url,
        publishAt
    })
}


function renderProjects() {
    const strHtmls = myProjects.map(project => {
        return `
        <div class="card col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}">
            <div class="portfolio-hover">
            <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
            </div>
        </div>
            <img class="img-fluid" src="img/project-photos/${project.id}.jpg" alt="">
        </a>
            <div class="portfolio-caption">
                <h4>${project.name}</h4>
                <p class="text-muted">${project.desc}</p>
            </div>
        </div>
        `
    })
    const elProjectContainer = document.querySelector('.my-projects')
    elProjectContainer.innerHTML = strHtmls.join('')

}




function renderModels() {
    const strHtmls = myProjects.map(project => {
        return `
        <div class="portfolio-modal modal fade" id="portfolioModal${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    ${project.desc}
                    <h2>${project.title}</h2>
                    <p class="item-intro text-muted">${project.desc}</p>
                    <img class="d-block mx-auto" src="img/project-photos/${project.id}.jpg" alt="">
                    <p>${project.desc}</p>
                    <ul class="list-style">
                        <li>Link to project: <a href="${project.url}" target="_blank">${project.name}</a></li>
                        <li>Date: ${project.publishAt}</li>
                        <li>Client: Me</li>
                        <li>Category: Learn Basic Appliction</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        ` 
    })

    const elModel = document.querySelector('.my-modal')
    elModel.innerHTML = strHtmls.join('')

}
