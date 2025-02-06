window.onload = () =>{
    let out = "";

    function listaProdutos(){

        

        // Fetch the JSON file
        fetch('api/produtos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(petFoodData => {
            // Accessing names and prices
            petFoodData.pet_foods.forEach(food => {
                //console.log(`Name: ${food.name}, Price: ${food.price}`);
                out += /*html*/`
         <p>Name: ${food.name}, Price: ${food.price}</p>
        `;
            });

            _('#produtos').innerHTML = out;    
        })
        .catch(error => {
            console.error('Error fetching the JSON file:', error);
        });
        

    }
    
    listaProdutos(); 
    _('#wrap').innerHTML = template()
    
   
   
    //recebe o tamanho da tela do usuario 
    var larguraJanela = window.innerWidth

    function responsiveCartShop() {
        let largura = window.innerWidth

        if (largura < 1024) {
            _('#carrinhoNav').innerHTML = site.cartShop;
            _('#favoritosNav').innerHTML = site.fav;

            _('#carrinho').innerHTML = ''
            _('#favoritos').innerHTML = ''
        } else {
            _('#carrinho').innerHTML = site.cartShop
            _('#favoritos').innerHTML = site.fav;

            _('#carrinhoNav').innerHTML = ''; // Limpa o conteúdo quando a largura for maior ou igual a 1024px   
            _('#favoritosNav').innerHTML = '';
        }   
    }

    // Adiciona um ouvinte de evento para o redimensionamento da janela
    window.addEventListener('resize', responsiveCartShop);

    responsiveCartShop()
}

