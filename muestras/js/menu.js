$(function(){
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if(valor == 'todos'){
            $('.cont-work').show('100');
        }else{
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });
    let mayas_deportivas = $('#mayas_deportivas').offset().top,
        trajes_de_fin_de_año = $('#trajes_de_fin_de_año').offset().top,
        equipos_deportivos = $('#equipos_deportivos').offset().top,
        remeras_personalizadas = $('#remeras_personalizadas').offset().top,
        pijamas = $('#pijamas').offset().top;

    window.addEventListener('resize', function(){
        let mayas_deportivas = $('#mayas_deportivas').offset().top,
        trajes_de_fin_de_año = $('#trajes_de_fin_de_año').offset().top,
        equipos_deportivos = $('#equipos_deportivos').offset().top,
        remeras_personalizadas = $('#remeras_personalizadas').offset().top,
        pijamas = $('#pijamas').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });
    $('#enlace-mayas_deportivas').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: mayas_deportivas -100
        },600);
    });
    $('#enlace-trajes_de_fin_de_año').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trajes_de_fin_de_año -100
        },600);
    });
    $('#enlace-equipos_deportivos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipos_deportivos -100
        },600);
    });
    
    $('#enlace-remeras_personalizadas').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: remeras_personalizadas -100
        },600);
    });
    $('#enlace-pijamas').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: pijamas -100
        },600);
    });
});