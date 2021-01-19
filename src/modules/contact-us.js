
function createContactCopy() {
    const copyTextDiv = document.createElement('div');
    copyTextDiv.setAttribute('id', 'contact-copy-div');

    const contactUsHeading = document.createElement('h1');
    contactUsHeading.textContent = "Find Us Here"
    contactUsHeading.setAttribute('id', 'contact-us-heading')
    const days = document.createElement('p');
    const hours = document.createElement('p');
    const address = document.createElement('p');
    days.setAttribute('id', 'days')
    hours.setAttribute('id', 'hours');
    address.setAttribute('id', 'address');
    days.textContent = "Monday - Sunday";
    hours.textContent = "Lunch: 10am - 4pm  |  Dinner: 6pm - 11pm"
    address.textContent = "123 Fake St, Fake York City"

    copyTextDiv.appendChild(contactUsHeading);
    copyTextDiv.appendChild(days);
    copyTextDiv.appendChild(hours);
    copyTextDiv.appendChild(address);


    return copyTextDiv;
}

function addImage() {
    const contactUsImg = document.createElement('img');
    contactUsImg.setAttribute('id', 'contact-img');
    contactUsImg.src = '../dist/imgs/rooftop-bar.jpg';

    return contactUsImg;
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