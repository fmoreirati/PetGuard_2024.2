function getAquariumDecorationsDetails() {
    return {
        castle: {
            name: 'Castelo',
            description: 'Um castelo encantador para adicionar um toque de fantasia ao seu aquário.',
            price: 'R$50,00 cada'
        },
        plant: {
            name: 'Planta',
            description: 'Planta artificial para um visual natural e vibrante no seu aquário.',
            price: 'R$30,00 cada'
        },
        rock: {
            name: 'Rocha',
            description: 'Rocha decorativa para criar esconderijos e paisagens interessantes.',
            price: 'R$20,00 cada'
        }
    };
}

function updateAquariumDecorationsInfo(selectedDecoration, aquariumDecorationsDetails, aquariumDecorationsInfo) {
    const decorationDetails = aquariumDecorationsDetails[selectedDecoration];

    if (decorationDetails) {
        aquariumDecorationsInfo.innerHTML = `
            <h2>${decorationDetails.name}</h2>
            <p>${decorationDetails.description}</p>
            <p>Preço: ${decorationDetails.price}</p>
        `;
    } else {
        aquariumDecorationsInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const aquariumDecorationsButtons = document.querySelectorAll('.decoration-button');
    const aquariumDecorationsInfo = document.getElementById('aquariumDecorationsInfo');
    const aquariumDecorationsDetails = getAquariumDecorationsDetails();

    aquariumDecorationsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedDecoration = this.getAttribute('data-decoration');
            updateAquariumDecorationsInfo(selectedDecoration, aquariumDecorationsDetails, aquariumDecorationsInfo);
        });
    });
});
