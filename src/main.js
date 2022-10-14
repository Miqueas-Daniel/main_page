// Se aplica a la sección Trabajos cuando el viewport baja de los 399px.
const backgroundJob = document.querySelector('.background__job');
const deplomenJobsBtn = document.querySelector('.deplomen__jobs');
const deplomenIcon = document.querySelector('.deplomen__jobs__icon');


deplomenJobsBtn.addEventListener('click', () => {
    deplomenIcon.classList.toggle('deplomen__jobs__icon--hidden');
    backgroundJob.classList.toggle('background__job--hidden');
});






// Se aplica en el footer.
const projects = document.querySelectorAll('.project');
const containerInfo = document.querySelector('.footer__projects__description');


projects.forEach((e, i) => {
    e.addEventListener('click', (e) => {
        if (e.target.className == 'project__btn') {
            containerInfo.innerHTML = `
            <div class="projects__description">
                <h3 class="description__title">${projectsInfo[i].title}</h3>

                <div class="description__container__info">
                    <div class="description__container__img">
                        <img class="description__img" src="${projectsInfo[i].img}" title="${projectsInfo[i].imgTitle}" draggable="false">
                    </div>

                    <div class="description__container__text">${projectsInfo[i].description}</div>
                </div>
            </div>`;
        }
    });
})