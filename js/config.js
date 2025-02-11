const site={
    /**
     * Imagem da logo
     */
    imageLogo: `image/logoTemporaria.png`,

    /**
     * Botao offcanvas do carrinho
     */
    cart: `<button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                        aria-controls="offcanvasScrolling">
                        <span class="mx-lg-2"><i class="fa-solid fa-cart-shopping"></i></span>
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
                    </div> `,

    /**
     * Botao offcanvas do favorito
     */
    fav: `<button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                        aria-controls="offcanvasScrolling">
                        <span class="mx-lg-2"><i class="fa-solid fa-heart"></i></span>
                    </button>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
                        id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title mx-lg-4" id="offcanvasScrollingLabel">Favoritos</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">

                        </div>
                    </div>
`
                    
}
