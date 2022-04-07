let pageList;
let curPageIndex;
let paginationItemList = [];

const showPage = (page) => {
    page.style.display = 'grid';
}

const hidePage = (page) => {
    page.style.display = 'none';
}

const initGoods = () => {
    curPageIndex = 0;
    pageList = document.querySelectorAll('.goods__grid');
    pageList.forEach(page => hidePage(page));    
    
    paginationItemList = document.querySelectorAll('#goods__pagination p');
    paginationItemList[0].setAttribute('id', 'current__page');

    paginationItemList.forEach(item => item.addEventListener('click', pageClickHandler));

    showPage(pageList[curPageIndex]);
}

const findIndexByPredicate = (list, predicate) => {
    let index = 0;
    for (let item of list) {
        if (predicate(item))
            return index;
        index++;    
    }
}

const pageClickHandler = (event) => {
    let prevPageIndex = curPageIndex;
    let newPageIndex = findIndexByPredicate(paginationItemList, (item) => item === event.target);
    console.log(newPageIndex);
    console.log(prevPageIndex === newPageIndex)

    if (prevPageIndex === newPageIndex)
        return;

    paginationItemList[prevPageIndex].setAttribute('id', '');
    paginationItemList[newPageIndex].setAttribute('id', 'current__page');

    hidePage(pageList[prevPageIndex]);
    showPage(pageList[newPageIndex]);

    curPageIndex = newPageIndex;
}

window.addEventListener('load', initGoods);