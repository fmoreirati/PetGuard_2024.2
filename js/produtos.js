window.onload = () =>{

    function products(){
        return /*html*/`
             <header>
    
                <div>
                    <!--LOGO TEMPORARIA-->
                    <a href="modelo.html"><img src="${site.imageLogo}" alt="Pet Guard logo">
                        <h1>PetGuard</h1>
                    </a>
                </div>
    
                <div>
                    
                    <div id="favoritosHeader">${site.fav}</div> 
                    <div id="carrinhoHeader">${site.cart}</div>
                    
                    
                    <a href="perfil.html"><img src="image/user.png" alt="User icon"></a>
                    <span></span>
                </div>
                
            </header>
    
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid ">
    
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
    
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Opções</h5>
                            <button type="button" class="btn-close border-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
    
                        <div class="offcanvas-body">
    
                            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
    
                                <li class="nav-item ">
                                    
                                        <div class="dropdown">
                                            <button class="dropbtn">Cachorro</button>
                                            <div class="dropdown-content">
                                                <a href="js/cachorros/racao-cachorro.html">Ração</a>
                                                <a href="js/cachorros/petiscos-cachorro.html">Petiscos</a>
                                                <a href="js/cachorros/roupas-cachorro.html">Roupas</a>
                                                <a href="js/cachorros/brinquedos-cachorro.html">Brinquedos</a>
                                            </div>
                                          </div>
                                    
                                </li>
    
                                <li class="nav-item">
                                    
                                        <div class="dropdown">
                                            <button class="dropbtn">Gato</button>
                                            <div class="dropdown-content">
                                                <a href="js/gatos/racao-gato.html">Ração</a>
                                                <a href="js/gatos/petiscos-gato.html">Petiscos</a>
                                                <a href="js/gatos/roupas-gato.html">Roupas</a>
                                                <a href="js/gatos/brinquedos-gato.html">Brinquedos</a>
                                            </div>
                                          </div>
                                    
                                </li>
    
                                <li class="nav-item">
                                    
                                        <div class="dropdown">
                                            <button class="dropbtn">Passaro</button>
                                            <div class="dropdown-content">
                                              <a href="js/passaros/racao-passaro.html">Ração</a>
                                              <a href="js/passaros/gaiola-passaro.html">Gaiola</a>
                                              <a href="js/passaros/recipiente-passaro.html">Recipiente</a>
                                              <a href="js/passaros/brinquedos-passaro.html">Brinquedos</a>
                                            </div>
                                          </div>
                                    
                                </li>
    
                                <li class="nav-item">
                                    
                                        <div class="dropdown">
                                            <button class="dropbtn">Peixe</button>
                                            <div class="dropdown-content">
                                              <a href="js/peixes/racao-passaro.html">Ração</a>
                                              <a href="js/peixes/aquario-passaro.html">Aquario</a>
                                              <a href="js/peixes/filtro-passaro.html">Filtro</a>
                                              <a href="js/peixes/decoracao-passaro.html">Decoração</a>
                                            </div>
                                          </div>
                                    
                                </li>
    
                                <li class="nav-item">
                                    
                                        <div class="dropdown">
                                            <button class="dropbtn">Outros pets</button>
                                            <div class="dropdown-content">
                                              <a href="#">Link 1</a>
                                              <a href="#">Link 2</a>
                                              <a href="#">Link 3</a>
                                            </div>
                                          </div>                                
                                </li>             
                                
                                <li class="nav-item">                                
                                        <div class="dropdown">
                                            <button class="dropbtn">Promoções</button>
                                            <div class="dropdown-content">
                                              <a href="#">Link 1</a>
                                              <a href="#">Link 2</a>
                                              <a href="#">Link 3</a>
                                            </div>
                                          </div>                                
                                </li>
    
                                <li class="nav-item">
                                    
                                        <div class="dropdown">
                                            <button class="dropbtn">Serviços</button>
                                            <div class="dropdown-content">
                                              <a href="#">Link 1</a>
                                              <a href="#">Link 2</a>
                                              <a href="#">Link 3</a>
                                            </div>
                                          </div>
                                    
                                </li>
                            </ul>                      
                        </div>                    
                    </div>
                
                    <div id="navItems">
                      <div id="favoritosNav"></div> 
                      <div id="carrinhoNav"></div>
                    </div>
                    
    
                </div>
            </nav
            <!-- OFFCANVAS NO MOBILE
                    <div>
                        
                       <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
                           id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                           <div class="offcanvas-header">
                               <h5 class="offcanvas-title" id="offcanvasScrollingLabel"></h5>
                               <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                           </div>
                           <div class="offcanvas-body">
                               
                           </div>
                    </div> 
    
            <main>
                <div id="produtos">
    
                </div>
            </main>
    
    
            <footer>
                &copy; <span>direitos reservados</span>
            </footer>`
        
    
    };


    let out = "";
    
    //função para mostrar o produto
    function mostrarProds(){
        out += `

        <div id="item-prod">
           <div id="item-container">
           <p>Ração Pedigree</p>
            <img id="img-id" src="./image/food.png"></img>
            </div>
           <aside id="aside-p">
                <p id="p-text">Price: $80.99</p>
                 <button type="button">Adcionar</button>
            </aside>
        </div>



`;

    _('#produtos').innerHTML = out;
    }
  
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
    
    responsiveFavCar();

    _('#wrap').innerHTML = products();
    mostrarProds();
}






