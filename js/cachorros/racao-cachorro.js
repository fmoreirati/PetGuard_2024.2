function getDogFoodDetails() {
    return {
        premium: {
            name: 'Ração Premium',
            description: 'Ração de alta qualidade, com ingredientes naturais e ricos em nutrientes.',
            price: 'R$150,00 por saco de 20kg'
        },
        standard: {
            name: 'Ração Standard',
            description: 'Ração balanceada, ideal para a maioria dos cachorros.',
            price: 'R$100,00 por saco de 15kg'
        },
        budget: {
            name: 'Ração Econômica',
            description: 'Ração acessível, mantendo a nutrição essencial.',
            price: 'R$70,00 por saco de 3kg'
        }
    };
}

function updateDogFoodInfo(selectedFood, dogFoodDetails, dogFoodInfo) {
    const foodDetails = dogFoodDetails[selectedFood];

    if (foodDetails) {
        dogFoodInfo.innerHTML = `
            <h2>${foodDetails.name}</h2>
            <p>${foodDetails.description}</p>
            <p>Preço: ${foodDetails.price}</p>
        `;
    } else {
        dogFoodInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const dogFoodButtons = document.querySelectorAll('.food-button');
    const dogFoodInfo = document.getElementById('dogFoodInfo');
    const dogFoodDetails = getDogFoodDetails();

    dogFoodButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedFood = this.getAttribute('data-food');
            updateDogFoodInfo(selectedFood, dogFoodDetails, dogFoodInfo);
        });
    });
});
