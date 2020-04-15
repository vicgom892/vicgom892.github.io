$(document).ready(function(){

    var banner = {
        padre: $('#banner'),
        numeroSlides: $('#banner').children('.slide').length,
        posicion: 1
    }

    banner.padre.children('slide').first().css({
        'left': 0
    });

    var altoBanner = function(){
        var alto = banner.padre.children('.slide').outerHeight();

        banner.padre.css({
            'height': alto + 'px'
        });
    }
    
    altoBanner();

    $(window).resize(function(){
        altoBanner();
    });

    $('#banner-next').on('click', function(e){
        e.preventDefault();

        if(banner.posicion < banner.numeroSlides){
            $('#banner .active').removeClass('active').next().addClass('active').animate({
                'left':'0'
            });

            banner.posicion = banner.posicion + 1;
        } else{
            $('#banner .active').removeClass('active');
            banner.padre.children('.slide').first().addClass('actve');

            banner.posicion = 1;
        }

        
    })
});