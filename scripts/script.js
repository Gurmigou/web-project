const links = document.getQuerySelectorAll('#nav__links > li > a');

console.log(document.querySelector('header'))

links.forEach(link => link.addEventListener('click', () => {
    document.querySelector('header').scrollIntoView({
        behavior: 'smooth'
    });
}));