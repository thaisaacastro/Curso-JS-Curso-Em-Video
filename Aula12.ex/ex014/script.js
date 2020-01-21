function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()

  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora > 0 && hora < 12) {
    //Bom dia!
    img.src = 'fotomanhã.png'
    document.body.style.background = '#cfb78a'
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde!
    img.src = 'fototarde.png'
    document.body.style.background = '#4f9a9e'
  } else {
    //Boa noite!
    img.src = 'fotonoite.png'
    document.body.style.background = '#362b4d'
  }
}