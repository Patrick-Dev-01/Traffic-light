function traffic_light(){
    // boolean que vai verificar se o semaforo ta aberto ou não
    var isOpen = false;

    // pegar os botões
    let open_button = document.getElementById('open');
    let close_button = document.getElementById('close');

    // pegar as cores
    let green_light = document.getElementById('green-light');
    let yellow_light = document.getElementById('yellow-light');
    let red_light = document.getElementById('red-light');

    // criar o evento do click nos botões
    open_button.addEventListener('click', open_d); 
    close_button.addEventListener('click', attention);
    
    // função que abrirá o semaforo
    function open_d(){
        // remover o vermelho
        red_light.style.boxShadow = 'none';
        red_light.classList.remove('active');
        // ativar o verde
        green_light.style.boxShadow = '1px 1px 5px 8px rgb(0, 255, 0)';
        green_light.classList.add('active');
        // semaforo esta aberto
        isOpen = true;
    }
    // vai ativar a luz amarela antes do semaforo fechar
    function attention(){
        // se o semaforo estiver aberto
        if(isOpen === true){
            // remover o verde
            green_light.classList.remove('active');
            green_light.style.boxShadow = 'none';
            // ativer amarelo
            yellow_light.style.boxShadow = '1px 1px 5px 8px yellow';
            yellow_light.classList.add('active');
            // após três segundos ele muda para o vermelho
            setTimeout(close, 3000);
        }

        else{
            close();
        }
    }

    function close(){
        // se o semaforo estiver aberto
        if(isOpen === true){
            // remover o amarelo
            yellow_light.style.boxShadow = 'none';
            yellow_light.classList.remove('active');
            // ativer o verde
            red_light.style.boxShadow = '1px 1px 5px 8px red';
            red_light.classList.add('active');
            // semaforo não está mais aberto
            isOpen = false;
        }

        else{
            red_light.style.boxShadow = '1px 1px 5px 8px red';
            red_light.classList.add('active');
        }
    }
}