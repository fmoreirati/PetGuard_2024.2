function getDogToysDetails() {
    return {
        ball: {
            name: 'Bola',
            description: 'Uma bola divertida e durável para horas de brincadeira e exercício.',
            price: 'R$20,00 cada'
        },
        frisbee: {
            name: 'Frisbee',
            description: 'Um frisbee leve e resistente, perfeito para brincadeiras ao ar livre.',
            price: 'R$25,00 cada'
        },
        rope: {
            name: 'Corda',
            description: 'Uma corda forte para jogos de cabo de guerra e mastigação.',
            price: 'R$15,00 cada'
        }
    };
}

function updateDogToysInfo(selectedToy, dogToysDetails, dogToysInfo) {
    const toyDetails = dogToysDetails[selectedToy];

    if (toyDetails) {
        dogToysInfo.innerHTML = `
            <h2>${toyDetails.name}</h2>
            <p>${toyDetails.description}</p>
            <p>Preço: ${toyDetails.price}</p>
        `;
    } else {
        dogToysInfo.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const dogToysButtons = document.querySelectorAll('.toy-button');
    const dogToysInfo = document.getElementById('dogToysInfo');
    const dogToysDetails = getDogToysDetails();

    dogToysButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedToy = this.getAttribute('data-toy');
            updateDogToysInfo(selectedToy, dogToysDetails, dogToysInfo);
        });
    });
});
