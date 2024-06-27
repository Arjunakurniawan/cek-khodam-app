const listKhodam = ['sapi beranak', 'sandal jepit', 'ceker babat', 'pocong terbang', 'jalangkung kayang', 'naga salto', 'boger', 'keris putih', 'kontraktor', 'banaspati', 'kuyang', 'mimiperi'];

function getlist() {
    const generateList = Math.floor(Math.random() * listKhodam.length);
    return listKhodam[generateList];
}

const userInput = document.getElementById('input_user');
const resultDisplay = document.getElementById('resultKhodam');
const checkButton = document.getElementById('kodam_check');

checkButton.addEventListener('click', function () {
    const userinputItem = userInput.value;

    if (userinputItem === '') {
        alert('isi namamu!');
    } else {
       const p = document.createElement('p');
       p.classList.add('text-white', 'fw-bold', 'mt-3', 'text-uppercase');
       p.className = 'text-white fw-bold mt-3 text-uppercase';
       p.textContent = 'khodam ' + userinputItem + ' saat ini adalah = ' + getlist();
       resultDisplay.appendChild(p);

    }
})
