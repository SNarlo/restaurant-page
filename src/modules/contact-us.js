
function createContactCopy() {
    const copyTextDiv = document.createElement('div');
    copyTextDiv.setAttribute('id', 'contact-copy-div');

    const contactUsHeading = document.createElement('h1');
    const copyText = document.createElement('p');
    contactUsHeading.setAttribute('id', 'contact-us-heading')
    copyText.setAttribute('id', 'contact-us-text')

    copyTextDiv.appendChild(contactUsHeading);
    copyTextDiv.appendChild(copyText);

    return copyTextDiv;
}

function addImage() {
    const contactUsImg = document.createElement('img');
    contactUsImg.setAttribute('id', 'contact-img');
    contactUsImg.src = '..dist/imgs/rooftop-bar.jpg';

}

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
    // Add page attributes 
    const textBox = createContactCopy();
    contactUsTab.appendChild(textBox);

    const rooftopBarImg = addImage();
    rooftopBarImg.setAttribute('id', 'bar-img');
    contactUsTab.appendChild(rooftopBarImg);
}

export default loadContactPage;