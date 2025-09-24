// --- Lógica do Menu Mobile ---
// Envolvemos o código em 'DOMContentLoaded' para garantir que o HTML foi carregado
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuIcon = mobileMenuBtn.querySelector("i"); // Pega o elemento <i> dentro do botão
  const allNavLinks = navLinks.querySelectorAll("a");

  // Verifica se os elementos existem antes de adicionar eventos
  if (mobileMenuBtn && navLinks && menuIcon) {
    mobileMenuBtn.addEventListener("click", () => {
      // Mostra/esconde o menu
      navLinks.classList.toggle("active");

      // Troca o ícone de 'hambúrguer' para 'X' e vice-versa
      if (navLinks.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times"); // 'fa-times' é o ícone de 'X' no Font Awesome
        document.body.style.overflow = "hidden"; // Impede o scroll da página
      } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
        document.body.style.overflow = ""; // Restaura o scroll
      }
    });
  }

  // Adiciona evento para fechar o menu ao clicar em um link
  allNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
        document.body.style.overflow = "";
      }
    });
  });
});

// O código do seu logo 3D deve vir aqui, fora do 'DOMContentLoaded' se ele não interagir
// diretamente com elementos do DOM na inicialização, ou dentro se precisar de um container.
// Exemplo:
document.addEventListener("DOMContentLoaded", () => {
  const logoContainer = document.getElementById("logo-container");
  if (logoContainer) {
    // --- Cena 3D ---
    const scene = new THREE.Scene();
    // ... resto do seu código Three.js ...
  }
});
