


function loadContactPage() {
    // Close and clear other menus
    const homeMenu = document.getElementById('homeMenu');
    const menuMenu = document.getElementById('menuMenu');
    homeMenu.innerHTML = "";
    menuMenu.innerHTML = "";
    homeMenu.style.display = 'none';
    menuMenu.style.display = 'none';
    // open and clear this tab
    const contactUsTab = document.getElementById('contactUsMenu'); 
    contactUsTab.innerHTML = "";
    contactUsTab.style.display = 'flex';


}

export default loadContactPage;