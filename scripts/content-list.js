const allSectionItems = document.querySelectorAll('#goods__types__list > li > ul > li');
const sections = document.querySelectorAll('#goods__types__list > li');

function sectionOnclick(section, event) {
    allSectionItems.forEach(child => child.style.display = 'none');

    if (section.id !== event.target.id) {
        const element = document.getElementById(event.target.id);
        Array.from(element.parentElement.children[1].children).forEach(child => child.style.display = 'list-item');
    }
}

sections.forEach(section => {
    section.addEventListener('click', (event) => sectionOnclick(section, event));
})