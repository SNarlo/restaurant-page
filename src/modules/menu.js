function createGridLayout(className) {
    const parentDiv = document.createElement('div');
    parentDiv.className = "menu-parent";

    const columnOne = document.createElement('div');
    columnOne.className = className;
    columnOne.id = "one";
    const columnTwo = document.createElement('div');
    columnTwo.className = className;
    columnTwo.id = "two";
    parentDiv.appendChild(columnOne);
    parentDiv.appendChild(columnTwo);

    return parentDiv;
}

function loadMenu() {
    // Close and clear other menus
    const homeMenu = document.getElementById('homeMenu');
    const contactMenu = document.getElementById('contactUsMenu');
    homeMenu.innerHTML = "";
    contactMenu.innerHTML = "";
    homeMenu.style.display = 'none';
    contactMenu.style.display = 'none';
    // open and clear this tab
    const menuTab = document.getElementById('menuMenu'); 
    menuTab.innerHTML = "";
    menuTab.style.display = 'flex';

    const menuGrid = createGridLayout('menu-columns');
    menuTab.appendChild(menuGrid);
}

export default loadMenu;