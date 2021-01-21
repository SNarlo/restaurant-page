

function createMenu(className) {
    const parentDiv = document.createElement('div');
    parentDiv.className = "menu-parent";

    const menu = document.createElement('img');
    menu.className = className;
    menu.src = '../dist/imgs/Menu-Desktop.svg';

    parentDiv.appendChild(menu);
    return parentDiv;
}

function createMobileMenu() {
    const mobileMenuDiv = document.createElement('div');
    mobileMenuDiv.setAttribute('class', 'mobile-menu');

    const lunchMenu = document.createElement('img');
    lunchMenu.src = '../dist/imgs/Lunch.png';
    lunchMenu.setAttribute('id', 'lunch');

    const dinnerMenu = document.createElement('img');
    dinnerMenu.src = '../dist/imgs/Dinner.png';
    dinnerMenu.setAttribute('id', 'dinner');

    const drinksMenu = document.createElement('img');
    drinksMenu.src = '../dist/imgs/Drinks.png';
    drinksMenu.setAttribute('id', 'drinks');

    mobileMenuDiv.appendChild(lunchMenu);
    mobileMenuDiv.appendChild(dinnerMenu);
    mobileMenuDiv.appendChild(drinksMenu);

    return mobileMenuDiv;
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

    //normal menu
    const menuGrid = createMenu('menu-img');
    menuTab.appendChild(menuGrid);
    
    //mobile menus
    const mobileMenus = createMobileMenu();
    menuTab.appendChild(mobileMenus);
}

export default loadMenu;