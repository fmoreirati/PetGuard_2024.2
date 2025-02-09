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

                products = food;
                out += /*html*/`
                <a id="prod-link" href="./produto.html">
                    <img id="prod-img" src="./image/food.png" alt="Dog food">
                </a>       
        `;
                

            });

            _('#produtos').innerHTML = out;    
        })
        .catch(error => {
            console.error('Error fetching the JSON file:', error);
        });

    }

    

    listaProdutos();
  
    window.addEventListener('resize', responsiveFavCar);


    function responsiveFavCar() {
        //recebe o tamanho da tela do usuario 
        let largura = window.innerWidth
        /**
         * se largura for menor que 1024px, adiciona site.cart e site.fav nas divs de Nav e apaga os de header, caso ao contrario
         * adiciona no header e apaga do nav
         */
        if (largura < 1024) {
            _('#carrinhoNav').innerHTML = site.cart;
            _('#favoritosNav').innerHTML = site.fav;
            
            // Limpa o conteúdo quando a largura for menor que 1024px 
            _('#carrinhoHeader').innerHTML = ''
            _('#favoritosHeader').innerHTML = ''
        } else {
            _('#carrinhoHeader').innerHTML = site.cart
            _('#favoritosHeader').innerHTML = site.fav;
            
            // Limpa o conteúdo quando a largura for maior que 1024px 
            _('#carrinhoNav').innerHTML = '';   
            _('#favoritosNav').innerHTML = '';
        }   
    }
    
    // Adiciona um ouvinte de evento para o redimensionamento da janela
    
    responsiveFavCar()

    _('#wrap').innerHTML = template()

}

