var texto = document.querySelector('.right').innerHTML;
function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";
    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
    fadeIn();
    mudaCor();
}
function removeFadeOut1( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";

    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
    fadeIn1();
}
function removeFadeOut2( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";

    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
    fadeIn2();
}
function removeFadeOut3( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";

    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
    fadeIn3();
}

function fadeIn() {
    setTimeout(function() {
        document.querySelector('.right').innerHTML = "<div class='info'><h3 class='letter'>Sou aspirante a desenvolvedor e tenho como um dos meus princípios a autenticidade. Pessoalmente, acredito que para que o seu produto se destaque o seu cliente precisa se conectar com ele. E qual a minha proposta? Fazer com que seu website conte uma historia sobre si mesmo e se conecte ao cliente por meio da autenticidade.</h3></div>" ;
    }, 1000);
}
function fadeIn1() {
    setTimeout(function() {
        document.querySelector('.right').innerHTML = "<div class='projetos letter'><a href='https://diogobollineli.github.io/Jogo-Helicoptero.github.io/' target='_blank'><h1 class='sobre'>Jogo de Resgate</h1></a> <a href='https://github.com/DiogoBollineli/Jogo-Helicoptero.github.io'target='_blank'> </a>  <a href='https://diogobollineli.github.io/Gameflix.github.io/' target='_blank'><h1 class='sobre game'>Gameflix</h1></a> <a href='' target='_blank'><h1 class='sobre'>Jogo da Memoria</h1> </a>  </div> " ;
    }, 1000);
}
function fadeIn2() {
    setTimeout(function() {
        document.querySelector('.right').innerHTML = '<div class="info"><h3 class="letter">email: diogobolineli@gmail.com</h3></div>' ;
    }, 1000);
    mudaCor()
}
function mudaCor(){
    let voltar = document.querySelector('.voltar');
    voltar.style.color = 'white';
}
function mudaCor1(){
    let voltar = document.querySelector('.voltar');
    voltar.style.color = 'black';
}
function removeSobre( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";
    console.log(el)
    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
        fadeIn4();
    }, speed);
}
function fadeIn4() {
    setTimeout(function() {
        document.querySelector('.right').innerHTML = texto;
    }, 1000);
    mudaCor1();
}
