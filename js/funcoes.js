/**
* Retorna o "Node" de um elemento ou a "NodeList" de uma coleção de elementos usando o seletor especificado.
* 
* @param {string} seletor O seletor CSS do(s) elemento(s) a ser(em) selecionado(s).
* @returns {Node|NodeList} O "Node" do elemento se houver apenas um, ou a "NodeList" dos elementos correspondentes.
* 
* Exemplos de uso:
*     Selecionar por ID: let el = _('#meuID'); // Retorna o elemento com o id especificado
*     Selecionar por classe: let el = _('.minhaClasse'); // Retorna todos os elementos com a classe "minhaClasse"
*     Selecionar por tag (ou seletores mais complexos): let el = _('div > p'); // Retorna todos os <p> dentro de <div>
*     Selecionar elemento por tag: let el = _('i'); // Retorna todos os elementos <i>
*/
function _(seletor) {
   if (seletor.startsWith('#') || seletor.startsWith('.') || seletor.includes(' ')) {
       const resultado = document.querySelectorAll(seletor);
       return resultado.length === 1 ? resultado[0] : resultado;
   }
   return document.querySelectorAll(seletor);
}

function template(){ 
    return ` <header>
            <div>
                <!--LOGO TEMPORARIA-->
                <a href="modelo.html"><img src="image/logoTemporaria.png" alt="">
                    <h1>PetGuard</h1>
                </a>
            </div>

            <div>


                <div id="carrinhoHeader">
                    <!-- Carrinho offcanvas Desktop-->

                    <!-- <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                        aria-controls="offcanvasScrolling">
                        <span class="mx-lg-2"><i class="fa-solid fa-cart-shopping"></i></span>carrinho
                    </button>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
                        id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title mx-lg-4" id="offcanvasScrollingLabel">Suas compras</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">

                        </div>
                    </div> -->

                </div>

                <a href="" id="imageUser"><img src="image/user.png" alt=""></a>
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
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" class="btn-close border" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div class="offcanvas-body">

                        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">

                            <li class="nav-item">
                                <a class="nav-link " class="mx-lg-3" aria-current="page" href="#">
                                    <div class="dropdown">
                                        <button class="dropbtn">Cachorro</button>
                                        <div class="dropdown-content">
                                          <a href="#">Racao</a>
                                          <a href="#">Petiscos</a>
                                          <a href="#">Roupas</a>
                                        </div>
                                      </div>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link " class="mx-lg-3" aria-current="page" href="#">
                                    <div class="dropdown">
                                        <button class="dropbtn">Gato</button>
                                        <div class="dropdown-content">
                                          <a href="#">Link 1</a>
                                          <a href="#">Link 2</a>
                                          <a href="#">Link 3</a>
                                        </div>
                                      </div>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link " class="mx-lg-3" aria-current="page" href="#">
                                    <div class="dropdown">
                                        <button class="dropbtn">Passaro</button>
                                        <div class="dropdown-content">
                                          <a href="#">Link 1</a>
                                          <a href="#">Link 2</a>
                                          <a href="#">Link 3</a>
                                        </div>
                                      </div>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link " class="mx-lg-3" aria-current="page" href="#">
                                    <div class="dropdown">
                                        <button class="dropbtn">Peixe</button>
                                        <div class="dropdown-content">
                                          <a href="#">Link 1</a>
                                          <a href="#">Link 2</a>
                                          <a href="#">Link 3</a>
                                        </div>
                                      </div>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link " class="mx-lg-3" aria-current="page" href="#">
                                    <div class="dropdown">
                                        <button class="dropbtn">Outros</button>
                                        <div class="dropdown-content">
                                          <a href="#">Link 1</a>
                                          <a href="#">Link 2</a>
                                          <a href="#">Link 3</a>
                                        </div>
                                      </div>
                                </a>
                            </li>

                            <li class="nav-item">
                                <!--Carrinho offcanvas no mobile-->
                            </li>


                        </ul>

                    </div>


                </div>
            </div>
        </nav>

        <!-- OFFCANVAS NO MOBILE
                <div>
                    <button class="btn btn-success" type="button" data-bs-toggle="offcanvas"data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                        <span><i class="fa-solid fa-cart-shopping"></i></span>carrinho
                   </button>
                   <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
                       id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                       <div class="offcanvas-header">
                           <h5 class="offcanvas-title" id="offcanvasScrollingLabel"></h5>
                           <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                       </div>
                       <div class="offcanvas-body">
                           
                       </div>
                </div> -->



        <main></main>


        <footer>
            &copy; <span>direitos reservados</span>
        </footer>`
}