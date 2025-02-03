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
                <!-- OFFCANVAS NO DESKTOP ()> 1020px
                <button class="btn btn-success" type="button" data-bs-toggle="offcanvas"data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                    <span><i class="fa-solid fa-cart-shopping"></i></span>carrinho
               </button>
               <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
                   id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                   <div class="offcanvas-header">
                       <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                       <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                   </div>
                   <div class="offcanvas-body">
                       <p>Try scrolling the rest of the page to see this option in action.</p>
                   </div>
               </div> -->

                <div id="carrinhoHeader"></div>

                <a href="" id="imageUser"><img src="image/user.png" alt=""></a>
            </div>
        </header>

        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mb-2" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><i class="fa-brands fa-whatsapp fa-2xl" style="color: #0d8c66;"></i></a>
                        </li>

                        <div class="dropdown">
                            <button class="dropbtn">Cachorro</button>
                            <div class="dropdown-content">
                              <a href="#">Link 1</a>
                              <a href="#">Link 2</a>
                              <a href="#">Link 3</a>
                            </div>
                        </div>

                        <div class="dropdown">
                            <button class="dropbtn">Gato</button>
                            <div class="dropdown-content">
                              <a href="#">Link 1</a>
                              <a href="#">Link 2</a>
                              <a href="#">Link 3</a>
                            </div>
                        </div>

                        <div class="dropdown">
                            <button class="dropbtn">Pássaro</button>
                            <div class="dropdown-content">
                              <a href="#">Link 1</a>
                              <a href="#">Link 2</a>
                              <a href="#">Link 3</a>
                            </div>
                        </div>

                        <div class="dropdown">
                            <button class="dropbtn">Peixe</button>
                            <div class="dropdown-content">
                              <a href="#">Link 1</a>
                              <a href="#">Link 2</a>
                              <a href="#">Link 3</a>
                            </div>
                        </div>

                        <div class="dropdown">
                            <button class="dropbtn">Outros</button>
                            <div class="dropdown-content">
                              <a href="#">Link 1</a>
                              <a href="#">Link 2</a>
                              <a href="#">Link 3</a>
                            </div>
                        </div>
                        
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
        </nav>

        <main></main>

        
        <footer>
            &copy; <span>direitos reservados</span>
        </footer>`

}