window.onload = () =>{
    _('#wrap').innerHTML = template()
    
    
    //recebe o tamanho da tela do usuario 
    var larguraJanela = window.innerWidth


    if (larguraJanela >= 1024) {
        let navbarA = document.getElementById('navbarNavAltMarkup')
        navbarA.classList.add('d-flex')
        navbarA.classList.add('justify-content-center') 
        
        

    }
}