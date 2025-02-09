function getDogTreatsDetails() {
    return {
        beefJerky: {
            name: 'Carne Seca',
            description: 'Deliciosos petiscos de carne seca, ricos em proteínas e sabor.',
            price: 'R$30,00 por pacote de 200g'
        },
        chickenBites: {
            name: 'Bites de Frango',
            description: 'Petiscos crocantes de frango, perfeitos para treinar e recompensar.',
            price: 'R$25,00 por pacote de 200g'
        },
        veggieSticks: {
            name: 'Palitinhos de Vegetais',
            description: 'Opção saudável e saborosa feita com vegetais frescos.',
            price: 'R$20,00 por pacote de 150g'
        }
    };
}

function updateDogTreatsInfo(selectedTreat, dogTreatsDetails, dogTreatsInfo) {
    const treatDetails = dogTreatsDetails[selectedTreat];

    if (treatDetails) {
        dogTreatsInfo.innerHTML = `
            <h2>${treatDetails.name}</h2>
            <p>${treatDetails.description}</p>
            <p>Preço: ${treatDetails.price}</p>
        `;
    } else {
        dogTreatsInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const dogTreatsButtons = document.querySelectorAll('.treat-button');
    const dogTreatsInfo = document.getElementById('dogTreatsInfo');
    const dogTreatsDetails = getDogTreatsDetails();

    dogTreatsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedTreat = this.getAttribute('data-treat');
            updateDogTreatsInfo(selectedTreat, dogTreatsDetails, dogTreatsInfo);
        });
    });
});
