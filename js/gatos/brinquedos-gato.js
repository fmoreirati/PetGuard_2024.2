function getCatToysDetails() {
    return {
        ball: {
            name: 'Bola para Gatos',
            description: 'Uma bola colorida e divertida para horas de brincadeira e exercício para o seu gato.',
            price: 'R$20,00 cada'
        },
        mouse: {
            name: 'Rato de Brinquedo',
            description: 'Um ratinho de brinquedo que seu gato vai adorar caçar e brincar.',
            price: 'R$25,00 cada'
        },
        feather: {
            name: 'Brinquedo de Pena',
            description: 'Um brinquedo com penas que vai estimular o instinto de caça do seu gato.',
            price: 'R$15,00 cada'
        }
    };
}

function updateCatToysInfo(selectedToy, catToysDetails, catToysInfo) {
    const toyDetails = catToysDetails[selectedToy];

    if (toyDetails) {
        catToysInfo.innerHTML = `
            <h2>${toyDetails.name}</h2>
            <p>${toyDetails.description}</p>
            <p>Preço: ${toyDetails.price}</p>
        `;
    } else {
        catToysInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const catToysButtons = document.querySelectorAll('.toy-button');
    const catToysInfo = document.getElementById('catToysInfo');
    const catToysDetails = getCatToysDetails();

    catToysButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedToy = this.getAttribute('data-toy');
            updateCatToysInfo(selectedToy, catToysDetails, catToysInfo);
        });
    });
});
