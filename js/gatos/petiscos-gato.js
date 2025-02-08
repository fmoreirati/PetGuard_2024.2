function getCatTreatsDetails() {
    return {
        fish: {
            name: 'Petisco de Peixe',
            description: 'Deliciosos petiscos de peixe, ricos em ômega-3 e sabor.',
            price: 'R$15,00 por pacote de 100g'
        },
        chicken: {
            name: 'Petisco de Frango',
            description: 'Petiscos crocantes de frango, perfeitos para recompensar seu gato.',
            price: 'R$20,00 por pacote de 100g'
        },
        cheese: {
            name: 'Petisco de Queijo',
            description: 'Saborosos petiscos de queijo, uma ótima fonte de proteína para o seu gato.',
            price: 'R$25,00 por pacote de 100g'
        }
    };
}

function updateCatTreatsInfo(selectedTreat, catTreatsDetails, catTreatsInfo) {
    const treatDetails = catTreatsDetails[selectedTreat];

    if (treatDetails) {
        catTreatsInfo.innerHTML = `
            <h2>${treatDetails.name}</h2>
            <p>${treatDetails.description}</p>
            <p>Preço: ${treatDetails.price}</p>
        `;
    } else {
        catTreatsInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const catTreatsButtons = document.querySelectorAll('.treat-button');
    const catTreatsInfo = document.getElementById('catTreatsInfo');
    const catTreatsDetails = getCatTreatsDetails();

    catTreatsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedTreat = this.getAttribute('data-treat');
            updateCatTreatsInfo(selectedTreat, catTreatsDetails, catTreatsInfo);
        });
    });
});
