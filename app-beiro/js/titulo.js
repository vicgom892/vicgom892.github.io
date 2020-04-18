// var text = document.getElementById('text')
// var shadow = '';
// for(var i = 0; i < 10; i++)
// {
//     shadow +=(shadow? ',':'')+ -i*1+'px '+ i*1+'px 0 #0423316e';
// }
// text.style.textShadow = shadow;
var text = document.getElementById('text');
var word = text.getElementsByTagName('span');

var i = 0;

function rotator(){
    word[i].style.display = 'none';
    i = (i + 1) % word.length;
    word[i].style.display = 'initial';
}
setInterval(rotator, 800);