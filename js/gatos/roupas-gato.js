function getCatClothesDetails() {
    return {
        sweater: {
            name: 'Suéter para Gatos',
            description: 'Um suéter quente e aconchegante para manter seu gato aquecido nos dias frios.',
            price: 'R$80,00 cada'
        },
        raincoat: {
            name: 'Capa de Chuva para Gatos',
            description: 'Uma capa de chuva impermeável para manter seu gato seco durante as caminhadas.',
            price: 'R$60,00 cada'
        },
        tshirt: {
            name: 'Camiseta para Gatos',
            description: 'Uma camiseta leve e confortável para seu gato usar em qualquer ocasião.',
            price: 'R$40,00 cada'
        }
    };
}

function updateCatClothesInfo(selectedClothes, catClothesDetails, catClothesInfo) {
    const clothesDetails = catClothesDetails[selectedClothes];

    if (clothesDetails) {
        catClothesInfo.innerHTML = `
            <h2>${clothesDetails.name}</h2>
            <p>${clothesDetails.description}</p>
            <p>Preço: ${clothesDetails.price}</p>
        `;
    } else {
        catClothesInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const catClothesButtons = document.querySelectorAll('.clothes-button');
    const catClothesInfo = document.getElementById('catClothesInfo');
    const catClothesDetails = getCatClothesDetails();

    catClothesButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedClothes = this.getAttribute('data-clothes');
            updateCatClothesInfo(selectedClothes, catClothesDetails, catClothesInfo);
        });
    });
});
