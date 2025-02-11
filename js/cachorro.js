// Seleciona os itens do dropdown
const racao = document.querySelector('#racao');
const petiscos = document.querySelector('#petiscos');
const roupas = document.querySelector('#roupas');
const brinquedos = document.querySelector('#brinquedos');

// Adiciona eventos de clique para cada item
racao.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    console.log('Você clicou em Ração');
    // Adicione aqui a ação desejada
});

petiscos.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    console.log('Você clicou em Petiscos');
    // Adicione aqui a ação desejada
});

roupas.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    console.log('Você clicou em Roupas');
    // Adicione aqui a ação desejada
});

brinquedos.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    console.log('Você clicou em Brinquedos');
    // Adicione aqui a ação desejada
});