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
        let cartshopNav = document.getElementById('cartShopNav');
        let cartshopHeader = document.getElementById('carrinhoHeader')

        if (largura < 1024) {
            cartshopNav.innerHTML = site.cartShop;
            cartshopHeader.innerHTML = ''
        } else {
            cartshopNav.innerHTML = ''; // Limpa o conteúdo quando a largura for maior ou igual a 1024px   
            cartshopHeader.innerHTML = site.cartShop
        }   
    }

    // Adiciona um ouvinte de evento para o redimensionamento da janela
    window.addEventListener('resize', responsiveCartShop);

    responsiveCartShop()
}

