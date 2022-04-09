const sections = document.querySelectorAll('#goods__types__list > li > p');
const sectionElements = document.querySelectorAll('#goods__types__list > li > ul');

function sectionOnclick(section) {
    const isOpened = section.classList.contains('open');
    sectionElements.forEach(item => item.style.maxHeight = '0px');
    sections.forEach(item => item.classList.remove('open'));

    if (!isOpened) {
        const listNameP = document.getElementById(section.id);
        listNameP.parentElement.children[1].style.maxHeight = '96px';
        section.classList.add('open');
    } 
}

sections.forEach(section => section.addEventListener('click', () => sectionOnclick(section)));

document.querySelectorAll('#goods__types__list > li > ul > li')
        .forEach(item => item.addEventListener('click',  () => {
            document.getElementById('main__content').scrollIntoView({
                    behavior: 'smooth'
            });
}));