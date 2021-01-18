

function createMenu(className) {
    const parentDiv = document.createElement('div');
    parentDiv.className = "menu-parent";

    const menu = document.createElement('img');
    menu.className = className;
    menu.src = '../dist/imgs/Menu-Desktop.svg';

    parentDiv.appendChild(menu);
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

    const menuGrid = createMenu('menu-img');
    menuTab.appendChild(menuGrid);
}

export default loadMenu;