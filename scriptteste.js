function carregar(){
    var titulo = window.document.getElementById('titulo');
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagemnoite');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();
    msg.innerHTML= `agora são ${hora} horas ${minuto} minutos e ${segundo} segundos.`;
        if(hora >= 0 && hora < 12 ){
            titulo.innerHTML='Bom Dia'
            img.src = "fotodia.png"
            document.body.style.background = '#b7d4cf'
        }else if( hora >= 12 && hora < 18 ){
            titulo.innerHTML='Boa Tarde'
            img.src="fototarde.png"
            document.body.style.background = '#307b00'
        }else{
            titulo.innerHTML = 'Boa Noite'
            img.src="fotonoite.png"
            document.body.style.background = '#eea271'
        }
}