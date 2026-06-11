// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function() {
    
    // Captura o botão "Saber Mais" pelo ID
    const botaoAlerta = document.getElementById("btn-alerta");

    // Adiciona um evento de clique ao botão
    botaoAlerta.addEventListener("click", function() {
        alert("Bem-vindo ao portal Agrinho 2026! Explore nossas seções abaixo para conhecer nosso projeto escolar de sustentabilidade.");
    });

    // Efeito visual opcional: Muda a cor de fundo do menu ao rolar a página (Scroll)
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#e8f5e9"; // Tom verde bem suave ao rolar
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        } else {
            header.style.backgroundColor = "#ffffff"; // Volta ao branco original no topo
            header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
        }
    });

});
