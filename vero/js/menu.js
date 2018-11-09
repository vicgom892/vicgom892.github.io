$(document).ready(function(){

    $('#btn-menu').click(function(){
        if($('.btn-menu span ').attr('class') == 'fa fa-bars'){
            $('.btn-menu span ').addClass('fa fa-bars').css({'color':'#fff'});
            $('.full-menu').css({'left':'0'});

        }else{
            $('.btn-menu span ').removeClass('fa fa-close').addClass('fa fa-bars').css({'color':'#000'});
            $('.full-menu').css({'left':'-100%'});
        }
    });
});
$(document).ready(function(){
    $('#menu-principal').click(function(){
        if($('.principal a ').attr('class') ){
            $('.principal a').addClass('fa fa-bars');
            $('.full-menu').css({'left':'0'});  
        }else{
            $('.principal a').removeClass('fa fa-close');
            $('.full-menu').css({'left':'-100%'});
        }
    });
});
