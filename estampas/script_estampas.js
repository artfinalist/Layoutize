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

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/7.png",
    "img/8.png",
    "img/9.png",
    "img/10.png",
    "img/11.png",
    "img/12.png",
    "img/13.png",
    "img/14.png",
    "img/15.png",
    "img/16.png",
    "img/17.png",
    "img/18.png",
    "img/19.png",
    "img/20.png",
    "img/21.png",
    "img/22.png",
    "img/23.png",
    "img/24.png",
    "img/25.png",
    "img/26.png",
    "img/27.png",
  ];

  let currentImageIndex = 0;
  const galleryLinks = document.querySelectorAll(".open-carousel");
  const body = document.body;

  galleryLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      currentImageIndex = index;
      createCarouselModal();
    });
  });

  function createCarouselModal() {
    // Criar o modal
    const modal = document.createElement("div");
    modal.classList.add("carousel-modal");
    modal.style.display = "flex";

    // Conteúdo do carrossel
    modal.innerHTML = `
            <span class="close-btn">&times;</span>
            <div class="carousel-content">
                <img src="${images[currentImageIndex]}" alt="Imagem">
            </div>
            <a class="prev">&#10094;</a>
            <a class="next">&#10095;</a>
        `;

    body.appendChild(modal);

    // Eventos de navegação e fechamento
    const closeBtn = modal.querySelector(".close-btn");
    const prevBtn = modal.querySelector(".prev");
    const nextBtn = modal.querySelector(".next");
    const carouselImg = modal.querySelector(".carousel-content img");

    closeBtn.onclick = () => {
      modal.remove();
    };

    prevBtn.onclick = () => {
      currentImageIndex =
        currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
      carouselImg.src = images[currentImageIndex];
    };

    nextBtn.onclick = () => {
      currentImageIndex =
        currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
      carouselImg.src = images[currentImageIndex];
    };

    modal.onclick = (event) => {
      if (event.target === modal) {
        modal.remove();
      }
    };
  }
});
