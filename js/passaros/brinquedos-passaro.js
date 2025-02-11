function getBirdToysDetails() {
    return {
        swing: {
            name: 'Balanço para Pássaros',
            description: 'Um balanço divertido para manter seu pássaro entretido e em movimento.',
            price: 'R$30,00 cada'
        },
        bell: {
            name: 'Sino para Pássaros',
            description: 'Um sino colorido que irá estimular e divertir seu pássaro.',
            price: 'R$20,00 cada'
        },
        ladder: {
            name: 'Escada para Pássaros',
            description: 'Uma escada para pássaros se exercitarem e explorarem.',
            price: 'R$25,00 cada'
        }
    };
}

function updateBirdToysInfo(selectedToy, birdToysDetails, birdToysInfo) {
    const toyDetails = birdToysDetails[selectedToy];

    if (toyDetails) {
        birdToysInfo.innerHTML = `
            <h2>${toyDetails.name}</h2>
            <p>${toyDetails.description}</p>
            <p>Preço: ${toyDetails.price}</p>
        `;
    } else {
        birdToysInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const birdToysButtons = document.querySelectorAll('.toy-button');
    const birdToysInfo = document.getElementById('birdToysInfo');
    const birdToysDetails = getBirdToysDetails();

    birdToysButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedToy = this.getAttribute('data-toy');
            updateBirdToysInfo(selectedToy, birdToysDetails, birdToysInfo);
        });
    });
});
