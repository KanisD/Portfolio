function showHiddenImage() {
    const hiddenImage = document.querySelector('.hidden-image');
    const hiddenText = document.querySelector('.hiddenText');
    const h1Element = document.querySelector('h1.visibleText');
    const pirmasButton = document.querySelector('.pirmas');

    hiddenImage.style.display = 'block';
    hiddenText.style.display = 'block';
    pirmasButton.style.position = 'absolute';

    if (h1Element) {
        h1Element.style.display = 'none';
    }

    document.querySelector('.animacija').style.display = 'none';
    document.querySelector('.mygtukai').style.display = 'none';
}



const buttonHeight = 30;
const buttonWidth = 70;
const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

function moveButtonRandomly() {
    const antrasButton = document.querySelector('.antras');

    const leftPosition = Math.ceil(Math.random() * (maxWidth - buttonWidth));
    const topPosition = Math.ceil(Math.random() * (maxHeight - buttonHeight));

    antrasButton.style.position = 'absolute';
    antrasButton.style.left = `${leftPosition}px`;
    antrasButton.style.top = `${topPosition}px`;
}

window.addEventListener('DOMContentLoaded', () => {
    const antrasButton = document.querySelector('.antras'); 

    antrasButton.addEventListener('mouseover', moveButtonRandomly);
});