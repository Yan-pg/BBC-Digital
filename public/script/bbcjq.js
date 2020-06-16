$(function(){

    var inndiceAtual = 0;
    var indiceMaximo = $('.slider img').length;
    var delay = 6000;
    initSlider();

    function initSlider(){
        $('.slider img').eq(0).fadeIn();
        setInterval(function(){
            alternarSlider();
        }, delay);
    }

    function alternarSlider(){
        $('.slider img').eq(inndiceAtual).fadeOut(2000);
        inndiceAtual+=1;
        if (inndiceAtual == indiceMaximo)
            inndiceAtual = 0;
            $('.slider img').eq(inndiceAtual).fadeIn(2000);   
    }
})
$(function(){
    $('.menu-moblie').click(function(){
        $('.menu-moblie').find('nav').slideToggle();
    })
})