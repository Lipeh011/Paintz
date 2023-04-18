
var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    var desenha = false;
    var corAtual = 'blue';
    var xVermelho = 0;
    var xVerde  = 50;
    var xAzul = 100;
    var yQuadrados = 0;
    var tamanhoQuadrados = 50;

    function desenhaQuadrado(x, y, tamanho, cor) {

        pincel.fillStyle = cor;
        pincel.fillRect(x, y, tamanho, tamanho)
        pincel.fill();
    }

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();

    }

    function desenhaPaletaDeCores() {

        desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, 'red');
      
        desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, 'green');
        desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, 'blue');


    }

    function habilitaDesenhar() {

        desenha = true;
    }

    function desabilitaDesenhar() {

        desenha = false;
    }
  
    function lidaComMovimentoDoMouse(evento) {

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        
        if(desenha) {
            if (x < 160 && y < 60){
                 desabilitaDesenhar();
               desenhaPaletaDeCores();
          
             }
             desenha = true;
            desenhaCirculo(x, y, 10, corAtual);
        
    }}


    function mudarCor(evento) {

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
       
       
    
     if((x < 50 && y < 50)) {
       corAtual = 'red';
        }
    else if (x < 100 && y < 50){
        corAtual = 'green'

    }
    else if (x < 150 && y < 100){
        corAtual = 'blue';
    }
    

    }



    desenhaPaletaDeCores(); // mostra os quadrados de seleção de cores

    tela.onclick = mudarCor;

    tela.onmousemove = lidaComMovimentoDoMouse;

    tela.onmousedown = habilitaDesenhar;

    tela.onmouseup = desabilitaDesenhar;



/*
var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    var raio = 10;
    var xAleatorio;
    var yAleatorio;

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();

    }

    function limpaTela() {

        pincel.clearRect(0, 0, 600, 400);

    }

    function desenhaAlvo(x,y) {

        desenhaCirculo(x, y, raio+20, 'red');
        desenhaCirculo(x, y, raio+10, 'white');
        desenhaCirculo(x, y, raio, 'red');

    }

    function sorteiaPosicao(maximo) {

        return Math.floor(Math.random() * maximo);

    }

function atualizaTela() {
    limpaTela();
    xAleatorio = sorteiaPosicao(600);
    yAleatorio = sorteiaPosicao(400);
    desenhaAlvo(xAleatorio, yAleatorio);
}

setInterval(atualizaTela, 1000);

function dispara(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;


 if((x > xAleatorio - raio) && (x < xAleatorio + raio) && (y > yAleatorio - raio) && (y < yAleatorio + raio)) {

        alert('Acertou!');

    }

}

tela.onclick = dispara;
*/
