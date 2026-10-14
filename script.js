/* =========================================================
   BLADE BARBER — JAVASCRIPT
========================================================= */

/* =========================================================
   ANIMAÇÕES AOS
========================================================= */

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 800,
        once: true
    });
}

/* =========================================================
   DOM
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       WHATSAPP DOS BARBEIROS
    ===================================================== */

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


    /* =====================================================
       MODAL — PERFIL DOS BARBEIROS
    ===================================================== */

    const profileModal =
        document.querySelector("#profileModal");

    const profileModalTitle =
        document.querySelector("#profileModalTitle");

    const profileModalSpecialties =
        document.querySelector("#profileModalSpecialties");

    const profileGallery =
        document.querySelector("#profileGallery");

    const botoesPerfil =
        document.querySelectorAll(".profile-barber");

    const botoesFecharPerfil =
        document.querySelectorAll("[data-close-profile]");


    function abrirPerfil(botao) {

        if (
            !profileModal ||
            !profileModalTitle ||
            !profileModalSpecialties ||
            !profileGallery
        ) {
            return;
        }

        const nomeBarbeiro =
            botao.getAttribute("data-barber");

        const especialidades =
            botao.getAttribute("data-specialties");

        const imagens =
            botao.getAttribute("data-images");


        /* =================================================
           NOME DO BARBEIRO
        ================================================= */

        profileModalTitle.textContent =
            nomeBarbeiro || "Barbeiro";


        /* =================================================
           ESPECIALIDADES
        ================================================= */

        profileModalSpecialties.innerHTML = "";

        if (especialidades) {

            especialidades
                .split(",")
                .map(function (item) {
                    return item.trim();
                })
                .filter(function (item) {
                    return item !== "";
                })
                .forEach(function (especialidade) {

                    const span =
                        document.createElement("span");

                    span.textContent =
                        especialidade;

                    profileModalSpecialties.appendChild(
                        span
                    );
                });
        }


        /* =================================================
           GALERIA DE FOTOS
        ================================================= */

        profileGallery.innerHTML = "";

        if (imagens) {

            const listaImagens =
                imagens
                    .split(",")
                    .map(function (item) {
                        return item.trim();
                    })
                    .filter(function (item) {
                        return item !== "";
                    });


            listaImagens.forEach(function (caminho, index) {

                const item =
                    document.createElement("div");

                item.className =
                    "profile-gallery-item";


                const imagem =
                    document.createElement("img");

                imagem.src = caminho;

                imagem.alt =
                    "Corte realizado por " +
                    (nomeBarbeiro || "barbeiro") +
                    " - foto " +
                    (index + 1);

                imagem.loading = "lazy";


                imagem.addEventListener(
                    "error",
                    function () {

                        item.innerHTML =
                            '<div class="profile-gallery-empty">' +
                            "Foto não encontrada: " +
                            caminho +
                            "</div>";
                    }
                );


                item.appendChild(imagem);

                profileGallery.appendChild(item);
            });

        } else {

            profileGallery.innerHTML =
                '<div class="profile-gallery-empty">' +
                "Nenhuma foto de corte cadastrada para este barbeiro." +
                "</div>";
        }


        /* =================================================
           ABRE O MODAL
        ================================================= */

        profileModal.classList.add("is-open");

        profileModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "profile-modal-open"
        );
    }


    /* =====================================================
       FECHAR MODAL
    ===================================================== */

    function fecharPerfil() {

        if (!profileModal) {
            return;
        }

        profileModal.classList.remove(
            "is-open"
        );

        profileModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "profile-modal-open"
        );
    }


    /* =====================================================
       BOTÕES "VER PERFIL"
    ===================================================== */

    botoesPerfil.forEach(function (botao) {

        botao.addEventListener(
            "click",
            function () {
                abrirPerfil(botao);
            }
        );

    });


    /* =====================================================
       FECHAR PELO X OU PELO FUNDO
    ===================================================== */

    botoesFecharPerfil.forEach(function (botao) {

        botao.addEventListener(
            "click",
            function () {
                fecharPerfil();
            }
        );

    });


    /* =====================================================
       FECHAR COM ESC
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                profileModal &&
                profileModal.classList.contains("is-open")
            ) {
                fecharPerfil();
            }

        }
    );


    /* =====================================================
       BOTÃO WHATSAPP FLUTUANTE
    ===================================================== */

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