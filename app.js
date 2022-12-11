// const nameDisplay = document.getElementById('name-display');
// nameDisplay.textContent = 'Bruce';
// nameDisplay.style.color = 'red';

// const nametag = document.getElementById('nametag');
// nametag.style.backgroundColor = 'purple';

const button = document.getElementById('update-button');
const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
button.addEventListener('click', () => {
    console.log('I am clicking the button');
    console.log(nameDisplay);
    nameDisplay.textContent = nameInput.value;
})