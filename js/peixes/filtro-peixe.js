function getFishAccessoriesDetails() {
    return {
        filter: {
            name: 'Filtro de Aquário',
            description: 'Filtro eficiente para manter a água do aquário limpa e cristalina.',
            price: 'R$100,00 cada'
        },
        heater: {
            name: 'Aquecedor de Aquário',
            description: 'Aquecedor confiável para manter a temperatura ideal no aquário.',
            price: 'R$80,00 cada'
        },
        light: {
            name: 'Luz de Aquário',
            description: 'Luz LED para iluminar e realçar a beleza do seu aquário.',
            price: 'R$60,00 cada'
        }
    };
}

function updateFishAccessoriesInfo(selectedAccessory, fishAccessoriesDetails, fishAccessoriesInfo) {
    const accessoryDetails = fishAccessoriesDetails[selectedAccessory];

    if (accessoryDetails) {
        fishAccessoriesInfo.innerHTML = `
            <h2>${accessoryDetails.name}</h2>
            <p>${accessoryDetails.description}</p>
            <p>Preço: ${accessoryDetails.price}</p>
        `;
    } else {
        fishAccessoriesInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const fishAccessoriesButtons = document.querySelectorAll('.accessory-button');
    const fishAccessoriesInfo = document.getElementById('fishAccessoriesInfo');
    const fishAccessoriesDetails = getFishAccessoriesDetails();

    fishAccessoriesButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedAccessory = this.getAttribute('data-accessory');
            updateFishAccessoriesInfo(selectedAccessory, fishAccessoriesDetails, fishAccessoriesInfo);
        });
    });
});
