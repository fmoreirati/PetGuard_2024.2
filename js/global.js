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


    if (larguraJanela >= 1024) {
        let navbarA = document.getElementById('navbarNavAltMarkup')
        navbarA.classList.add('d-flex')
        navbarA.classList.add('justify-content-center') 
        
        

    }
}