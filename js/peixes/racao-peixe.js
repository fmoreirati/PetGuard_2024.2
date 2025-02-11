function getFishFoodDetails() {
    return {
        flakes: {
            name: 'Ração em Flocos',
            description: 'Ração em flocos rica em nutrientes, ideal para peixes tropicais.',
            price: 'R$30,00 por pacote de 200g'
        },
        pellets: {
            name: 'Ração em Pellets',
            description: 'Ração em pellets, perfeita para peixes de fundo.',
            price: 'R$25,00 por pacote de 200g'
        },
        frozen: {
            name: 'Ração Congelada',
            description: 'Ração congelada, ideal para peixes carnívoros e onívoros.',
            price: 'R$40,00 por pacote de 200g'
        }
    };
}

function updateFishFoodInfo(selectedFood, fishFoodDetails, fishFoodInfo) {
    const foodDetails = fishFoodDetails[selectedFood];

    if (foodDetails) {
        fishFoodInfo.innerHTML = `
            <h2>${foodDetails.name}</h2>
            <p>${foodDetails.description}</p>
            <p>Preço: ${foodDetails.price}</p>
        `;
    } else {
        fishFoodInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const fishFoodButtons = document.querySelectorAll('.food-button');
    const fishFoodInfo = document.getElementById('fishFoodInfo');
    const fishFoodDetails = getFishFoodDetails();

    fishFoodButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedFood = this.getAttribute('data-food');
            updateFishFoodInfo(selectedFood, fishFoodDetails, fishFoodInfo);
        });
    });
});
