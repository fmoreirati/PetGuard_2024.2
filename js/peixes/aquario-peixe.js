function getAquariumDetails() {
    return {
        small: {
            name: 'Aquário Pequeno',
            description: 'Aquário compacto, ideal para iniciantes e pequenos espaços.',
            price: 'R$100,00 cada'
        },
        medium: {
            name: 'Aquário Médio',
            description: 'Aquário de tamanho médio, perfeito para uma variedade de peixes.',
            price: 'R$200,00 cada'
        },
        large: {
            name: 'Aquário Grande',
            description: 'Aquário grande, ideal para entusiastas que desejam um ecossistema complexo.',
            price: 'R$300,00 cada'
        }
    };
}

function updateAquariumInfo(selectedAquarium, aquariumDetails, aquariumInfo) {
    const details = aquariumDetails[selectedAquarium];

    if (details) {
        aquariumInfo.innerHTML = `
            <h2>${details.name}</h2>
            <p>${details.description}</p>
            <p>Preço: ${details.price}</p>
        `;
    } else {
        aquariumInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const aquariumButtons = document.querySelectorAll('.aquarium-button');
    const aquariumInfo = document.getElementById('aquariumInfo');
    const aquariumDetails = getAquariumDetails();

    aquariumButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedAquarium = this.getAttribute('data-aquarium');
            updateAquariumInfo(selectedAquarium, aquariumDetails, aquariumInfo);
        });
    });
});
