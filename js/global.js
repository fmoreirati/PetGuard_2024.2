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
        let navItem = document.getElementById('navItems');
        let headerItems = document.getElementById('headerItems')

        let favoritos = document.getElementById('favoritos')
        let carrinho = document.getElementById('carrinho')

        let favoritosNav = document.getElementById('favoritosNav')
        let carrinhoNav = document.getElementById('carrinhoNav')

        if (largura < 1024) {
            carrinhoNav.innerHTML = site.cartShop;
            favoritosNav.innerHTML = site.fav;
            headerItems.innerHTML = ''
        } else {
            carrinho.innerHTML = site.cartShop
            favoritos.innerHTML = site.fav;
            headerItem.innerHTML = ''; // Limpa o conteúdo quando a largura for maior ou igual a 1024px   
            
        }   
    }

    // Adiciona um ouvinte de evento para o redimensionamento da janela
    window.addEventListener('resize', responsiveCartShop);

    responsiveCartShop()
}

