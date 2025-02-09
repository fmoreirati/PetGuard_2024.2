function getBirdCagesDetails() {
    return {
        small: {
            name: 'Gaiola Pequena',
            description: 'Gaiola compacta, ideal para pássaros de pequeno porte.',
            price: 'R$100,00 cada'
        },
        medium: {
            name: 'Gaiola Média',
            description: 'Gaiola de tamanho médio, perfeita para pássaros de porte médio.',
            price: 'R$200,00 cada'
        },
        large: {
            name: 'Gaiola Grande',
            description: 'Gaiola grande, ideal para pássaros de grande porte.',
            price: 'R$300,00 cada'
        }
    };
}

function updateBirdCagesInfo(selectedCage, birdCagesDetails, birdCagesInfo) {
    const cageDetails = birdCagesDetails[selectedCage];

    if (cageDetails) {
        birdCagesInfo.innerHTML = `
            <h2>${cageDetails.name}</h2>
            <p>${cageDetails.description}</p>
            <p>Preço: ${cageDetails.price}</p>
        `;
    } else {
        birdCagesInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const birdCagesButtons = document.querySelectorAll('.cage-button');
    const birdCagesInfo = document.getElementById('birdCagesInfo');
    const birdCagesDetails = getBirdCagesDetails();

    birdCagesButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedCage = this.getAttribute('data-cage');
            updateBirdCagesInfo(selectedCage, birdCagesDetails, birdCagesInfo);
        });
    });
});
