function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  }
  else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'fotocriançam.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'fotojovemm.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'fotoadulto.png')
      } else {
        //Idoso
        img.setAttribute('src', 'fotoidoso.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'fotocriançaf.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'fotojovemf.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'fotoadulta.png')
      } else {
        //Idoso
        img.setAttribute('src', 'fotoidosa.png')
      }
    }
    res.style.textAligh = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }

}

