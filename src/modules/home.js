
function createTextDiv(id) {
    const homeMenuText = document.createElement('div');
    homeMenuText.setAttribute('id', id);
    return homeMenuText;
}

function createHomePageHeading(id) {
    const heading = document.createElement('h2');
    heading.innerText = "This is The Pizza Bar"
    heading.setAttribute('id', id);
    heading.setAttribute('class', 'heading');
    return heading;
}

function createCopyContent(id) {
    const copy = document.createElement('p');
    copy.setAttribute('id', id);
    copy.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum efficitur maximus. " + 
                        "Nulla mollis leo dui, et volutpat nulla ultrices ac. Ut venenatis quis felis aliquam porta. " + 
                        "Morbi eu vulputate nulla. Mauris pulvinar, urna id rhoncus tempor, enim mauris porta mi, eget " 
                        "dignissim neque magna in arcu. Curabitur convallis nunc ac sollicitudin consectetur.";
    return copy;
}

function addImagesToHome(className) {
    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('class', 'images');

    const imgOne = document.createElement('img');
    const imgTwo = document.createElement('img');
    const imgThree = document.createElement('img');

    imgOne.setAttribute('class', className);
    imgOne.setAttribute('id', 'pizza');

    imgTwo.setAttribute('class', className);
    imgTwo.setAttribute('id', 'chef');

    imgThree.setAttribute('class', className);
    imgThree.setAttribute('id', 'drink');

    imgOne.src = '../dist/imgs/rustic-pizza.jpeg';
    imgTwo.src = '../dist/imgs/chef.jpeg';
    imgThree.src = '../dist/imgs/drink.jpeg';

    imgDiv.appendChild(imgOne);
    imgDiv.appendChild(imgTwo);
    imgDiv.appendChild(imgThree);

    return imgDiv;
}


function loadHome() {
    const openTab = document.getElementById('homeMenu');

    const textDiv = createTextDiv('home-text-box');  
    const copy = createCopyContent('home-copy');
    const heading = createHomePageHeading('home-heading');
    const imgs = addImagesToHome('home-img');

    textDiv.appendChild(heading);
    textDiv.appendChild(copy);
    openTab.appendChild(imgs);
    openTab.appendChild(textDiv);

    openTab.style.display = 'flex';
}

export default loadHome;