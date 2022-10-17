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
      nomeDodia = "Segunda Feira";
      break;
    case 2:
      nomeDodia = "Terça Feira";
      break;
    case 3:
      nomeDodia = "Quarta Feira";
      break;
    case 4:
      nomeDodia = "Quinta Feira";
      break;
    case 5:
      nomeDodia = "Sexta Feira";
      break;
    case 6:
      nomeDodia = "Sábado Feira";
      break;
    default:
      nomeDodia = "Dia inválido";
  }

  document.getElementById("dia").innerHTML =
    "Hoje é : " + nomeDodia + " " + hora + ":" + minutos + ":" + segundos;
}, 1000);

function showhtml() {
  let htmlconteudo = document.getElementById("conteudobox");
  if (htmlconteudo.style.position == "relative") {
    htmlconteudo.style.position = "absolute";
  } else {
    htmlconteudo.style.position = "relative";
  }
}

function showjs() {
  let htmlconteudo = document.getElementById("conteudojs");
  if (htmlconteudo.style.position == "relative") {
    htmlconteudo.style.position = "absolute";
  } else {
    htmlconteudo.style.position = "relative";
  }
}
