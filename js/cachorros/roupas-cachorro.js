function getDogClothesDetails() {
    return {
        sweater: {
            name: 'Suéter',
            description: 'Um suéter quente e aconchegante para manter seu cachorro aquecido nos dias frios.',
            price: 'R$80,00 cada'
        },
        raincoat: {
            name: 'Capa de Chuva',
            description: 'Uma capa de chuva impermeável para manter seu cachorro seco durante as caminhadas.',
            price: 'R$60,00 cada'
        },
        tshirt: {
            name: 'Camiseta',
            description: 'Uma camiseta leve e confortável para seu cachorro usar em qualquer ocasião.',
            price: 'R$40,00 cada'
        }
    };
}

function updateDogClothesInfo(selectedClothes, dogClothesDetails, dogClothesInfo) {
    const clothesDetails = dogClothesDetails[selectedClothes];

    if (clothesDetails) {
        dogClothesInfo.innerHTML = `
            <h2>${clothesDetails.name}</h2>
            <p>${clothesDetails.description}</p>
            <p>Preço: ${clothesDetails.price}</p>
        `;
    } else {
        dogClothesInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const dogClothesButtons = document.querySelectorAll('.clothes-button');
    const dogClothesInfo = document.getElementById('dogClothesInfo');
    const dogClothesDetails = getDogClothesDetails();

    dogClothesButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedClothes = this.getAttribute('data-clothes');
            updateDogClothesInfo(selectedClothes, dogClothesDetails, dogClothesInfo);
        });
    });
});
