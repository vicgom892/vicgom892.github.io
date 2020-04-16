var text = document.getElementById('text')
var shadow = '';
for(var i = 0; i < 10; i++)
{
    shadow +=(shadow? ',':'')+ -i*1+'px '+ i*1+'px 0 #0423316e';
}
text.style.textShadow = shadow;