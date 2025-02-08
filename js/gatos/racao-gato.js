function getCatFoodDetails() {
    return {
        premiumCat: {
            name: 'Ração Premium para Gatos',
            description: 'Ração de alta qualidade, com ingredientes naturais e ricos em nutrientes para o seu gato.',
            price: 'R$150,00 por saco de 20kg'
        },
        standardCat: {
            name: 'Ração Standard para Gatos',
            description: 'Ração balanceada, ideal para a maioria dos gatos.',
            price: 'R$100,00 por saco de 15kg'
        },
        budgetCat: {
            name: 'Ração Econômica para Gatos',
            description: 'Ração acessível, mantendo a nutrição essencial para o seu gato.',
            price: 'R$70,00 por saco de 3kg'
        }
    };
}

function updateCatFoodInfo(selectedFood, catFoodDetails, catFoodInfo) {
    const foodDetails = catFoodDetails[selectedFood];

    if (foodDetails) {
        catFoodInfo.innerHTML = `
            <h2>${foodDetails.name}</h2>
            <p>${foodDetails.description}</p>
            <p>Preço: ${foodDetails.price}</p>
        `;
    } else {
        catFoodInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const catFoodButtons = document.querySelectorAll('.food-button');
    const catFoodInfo = document.getElementById('catFoodInfo');
    const catFoodDetails = getCatFoodDetails();

    catFoodButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedFood = this.getAttribute('data-food');
            updateCatFoodInfo(selectedFood, catFoodDetails, catFoodInfo);
        });
    });
});
