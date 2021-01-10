function createCopyContent(id) {
    const copy = document.createElement('p');
    copy.setAttribute('id', id);
    copy.innerHTML = "This resaurant is good";

}



function loadHome() {
    
    const copy = createCopyContent('copy')

}

export default loadHome;