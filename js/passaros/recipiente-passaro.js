function getBirdContainersDetails() {
    return {
        feeder: {
            name: 'Comedouro para Pássaros',
            description: 'Comedouro resistente e fácil de limpar, ideal para diversas sementes e rações.',
            price: 'R$40,00 cada'
        },
        waterDispenser: {
            name: 'Bebedouro para Pássaros',
            description: 'Bebedouro automático que fornece água fresca constantemente.',
            price: 'R$35,00 cada'
        },
        nest: {
            name: 'Ninho para Pássaros',
            description: 'Ninho confortável e seguro para os pássaros repousarem e se reproduzirem.',
            price: 'R$50,00 cada'
        }
    };
}

function updateBirdContainersInfo(selectedContainer, birdContainersDetails, birdContainersInfo) {
    const containerDetails = birdContainersDetails[selectedContainer];

    if (containerDetails) {
        birdContainersInfo.innerHTML = `
            <h2>${containerDetails.name}</h2>
            <p>${containerDetails.description}</p>
            <p>Preço: ${containerDetails.price}</p>
        `;
    } else {
        birdContainersInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const birdContainersButtons = document.querySelectorAll('.container-button');
    const birdContainersInfo = document.getElementById('birdContainersInfo');
    const birdContainersDetails = getBirdContainersDetails();

    birdContainersButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedContainer = this.getAttribute('data-container');
            updateBirdContainersInfo(selectedContainer, birdContainersDetails, birdContainersInfo);
        });
    });
});
