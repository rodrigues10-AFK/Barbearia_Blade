AOS.init();
/* =========================================
ANIMAÇÕES AOS
========================================= */

if (typeof AOS !== "undefined") {
AOS.init({
duration: 800,
once: true
});
}

/* =========================================
WHATSAPP DOS BARBEIROS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

const botoesWhatsapp = document.querySelectorAll(
".whatsapp-barber"
);

botoesWhatsapp.forEach(function (botao) {

botao.addEventListener("click", function () {

  const nomeBarbeiro = botao.getAttribute(
    "data-barber"
  );

  const telefone = botao.getAttribute(
    "data-phone"
  );


  if (!nomeBarbeiro || !telefone) {

    alert(
      "Erro: nome ou número do barbeiro não foi configurado."
    );

    return;
  }


  const mensagem =
    "Olá! Tudo bem? Gostaria de agendar um horário com o barbeiro " +
    nomeBarbeiro +
    ".";


  const mensagemCodificada =
    encodeURIComponent(mensagem);


  const linkWhatsapp =
    "https://wa.me/" +
    telefone +
    "?text=" +
    mensagemCodificada;


  window.open(
    linkWhatsapp,
    "_blank"
  );

});

});

/* =========================================
BOTÃO WHATSAPP FLUTUANTE
========================================= */

const botaoFlutuante =
document.querySelector(".btn-whatsapp");

if (botaoFlutuante) {

botaoFlutuante.addEventListener(
  "click",
  function (event) {

    event.preventDefault();


    const secaoBarbeiros =
      document.querySelector("#barbeiros");


    if (secaoBarbeiros) {

      secaoBarbeiros.scrollIntoView({
        behavior: "smooth"
      });

    }

  }
);

}

});

