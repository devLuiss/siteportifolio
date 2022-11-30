// funcao menuopener que abre o menu e fecha o menu
function menuopener() {
  let menuArea = document.getElementById("menu-area");

  if (menuArea.style.width == "250px") {
    // se o menu estiver fechado
    menuArea.style.width = "0px"; // abre o menu
  } else {
    // se o menu estiver aberto
    menuArea.style.width = "250px"; // fecha o menu
  }
}

// exibir o dia da semana e a hora atual na <div id="divdia">
setInterval(function () {
  let d = new Date();
  let dia = d.getDay();
  let hora = d.getHours();
  let minutos = d.getMinutes();
  let segundos = d.getSeconds();
  let nomeDodia = " ";

  switch (dia) {
    case 0:
      nomeDodia = "Domingo";
      break;
    case 1:
      nomeDodia = "Segunda ";
      break;
    case 2:
      nomeDodia = "Terça ";
      break;
    case 3:
      nomeDodia = "Quarta ";
      break;
    case 4:
      nomeDodia = "Quinta ";
      break;
    case 5:
      nomeDodia = "Sexta ";
      break;
    case 6:
      nomeDodia = "Sábado ";
      break;
    default:
      nomeDodia = "Dia inválido";
  }

  document.getElementById("dia").innerHTML =
    "Hoje é : " +
    nomeDodia +
    " " +
    hora +
    ":" +
    fixZero(minutos) +
    ":" +
    fixZero(segundos);
}, 1000);

function fixZero(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

function showjs() {
  let htmlconteudo = document.getElementById("conteudojs");
  if (htmlconteudo.style.marginTop == "300px") {
    htmlconteudo.style.marginTop = "-300px";
  } else {
    htmlconteudo.style.marginTop = "300px";
  }
}

function showhtml() {
  let htmlconteudo = document.getElementById("conteudobox");
  if (htmlconteudo.style.marginTop == "300px") {
    htmlconteudo.style.marginTop = "-300px";
  } else {
    htmlconteudo.style.marginTop = " 300px";
  }
}
