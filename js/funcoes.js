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
    return /*html*/` <header>
            <div>
                <!--LOGO TEMPORARIA-->
                <a href="modelo.html"><img src="image/logoTemporaria.png" alt="Pet Guard logo">
                    <h1>PetGuard</h1>
                </a>
            </div>

            <div>
                <a href="perfil.html"><img src="image/user.png" alt="User icon"></a>
                <span></span>
            </div>
        </header>

        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a href="#" title="inicio"><i class="fa-solid fa-house fa-fw"></i><span>home</span></a>

                        <a href="#" title="carrinho"><i class="fa-solid fa-cart-shopping"></i><span>carrinho</span></a>

                        <a href="#" title="contato"><i class="fa-solid fa-comments fa-fw"></i><span>sac</span></a>

                        <a href="#" title="Sobre"><i class="fa-solid fa-circle-info fa-fw"></i><span>info</span></a>

                    </div>
                </div>
            </div>
        </nav>

        <main>
            <div id="produtos">

            </div>
        </main>

        <footer>
            &copy; <span>direitos reservados</span>
        </footer>
    </div>`
}