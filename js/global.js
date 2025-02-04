window.onload = () => {
    _('#wrap').innerHTML = template()


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

