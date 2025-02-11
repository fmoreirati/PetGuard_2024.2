function getBirdFoodDetails() {
    return {
        seeds: {
            name: 'Ração de Sementes',
            description: 'Mistura de sementes de alta qualidade, ideal para pássaros de todos os tipos.',
            price: 'R$20,00 por pacote de 500g'
        },
        pellets: {
            name: 'Ração em Pellets',
            description: 'Ração em pellets, balanceada e nutritiva, perfeita para pássaros de companhia.',
            price: 'R$25,00 por pacote de 500g'
        },
        fruits: {
            name: 'Ração de Frutas',
            description: 'Deliciosa ração de frutas desidratadas, rica em vitaminas e minerais.',
            price: 'R$30,00 por pacote de 500g'
        }
    };
}

function updateBirdFoodInfo(selectedFood, birdFoodDetails, birdFoodInfo) {
    const foodDetails = birdFoodDetails[selectedFood];

    if (foodDetails) {
        birdFoodInfo.innerHTML = `
            <h2>${foodDetails.name}</h2>
            <p>${foodDetails.description}</p>
            <p>Preço: ${foodDetails.price}</p>
        `;
    } else {
        birdFoodInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const birdFoodButtons = document.querySelectorAll('.food-button');
    const birdFoodInfo = document.getElementById('birdFoodInfo');
    const birdFoodDetails = getBirdFoodDetails();

    birdFoodButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedFood = this.getAttribute('data-food');
            updateBirdFoodInfo(selectedFood, birdFoodDetails, birdFoodInfo);
        });
    });
});
