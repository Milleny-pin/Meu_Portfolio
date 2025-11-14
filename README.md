# 🔥 CodeByMilleny — Portfólio Pessoal

> **Tema:** Preto & Vermelho · Visual forte, moderno e focado em conversão  
> **Site:** `index.html` · `static/style.css` · `static/script.js`

---

![status](https://img.shields.io/badge/STATUS-PRONTO-orange?style=for-the-badge)
![tech](https://img.shields.io/badge/HTML5-CSS3-JS-black?style=for-the-badge)
![theme](https://img.shields.io/badge/THEME-Black%20%26%20Red-red?style=for-the-badge)

---

## ✨ Visão geral

**CodeByMilleny** é um portfólio pessoal com foco em frontend moderno e experiência do usuário. O site apresenta:

- Header fixo com navegação suave  
- Hero com CTA (botão para projetos)  
- Animação em `canvas` para background (triângulos dinâmicos)  
- Seção de **Soft Skills** em carrossel (SwiperJS)  
- Seção **Sobre** com foto, descrição e ícones das tecnologias flutuantes  
- **Projetos** com cards e modal para vídeos (YouTube)  
- Seção **Contato** com ícones sociais (Discord, GitHub, Instagram, LinkedIn)  
- Estética predominante: **preto (#0a0a0a)** + **vermelho (#e50914 / #ff3344)**

---

## 🎨 Identidade visual (Guia rápido)

- **Primária**: `#0a0a0a` (preto profundo)  
- **Accent**: `#e50914` (vermelho principal) e `#ff3344` (hover/light)  
- **Textos**: `#f5f5f5` (quase branco)  
- **Fonts**: Poppins & Montserrat (Google Fonts)  
- **Ícones**: Font Awesome + devicons

> Use sombras vermelhas sutis para criar o glow e dar profundidade. Botões devem ter `box-shadow` vermelho e `transform: scale(1.03)` ao `:hover`.

---

## 🧩 Funcionalidades detalhadas

### 🏠 Home (Hero)
- Título com *text-shadow* vermelho suave.  
- CTA (`#projeto-btn`) com animação, hover e foco acessível.

### 🧠 Soft Skills (SwiperJS)
- Carrossel responsivo com 10 cards.  
- Cada card com borda vermelha translúcida e transição ao hover.  
- Configuração recomendada do Swiper:

```js
new Swiper('.mySwiper', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  breakpoints: {
    640: { slidesPerView: 2.2 },
    1024: { slidesPerView: 3.2 }
  },
  loop: true,
  autoplay: { delay: 3000 },
});
```

---

### 👩‍💻 Sobre (Profile)

- `profile-image` com borda vermelha fina e sombra.  
- Ícones de tecnologias flutuantes ao redor (posicionamento absoluto + animação com `@keyframes`).

---

### 🚀 Projetos

- Grid/carrossel de projetos com **nome**, **descrição** e CTA *Saber mais*.  
- Modal customizado (`#modal-overlay`) que carrega vídeos do YouTube no `<iframe>` apenas ao abrir.  
- Botão `.open-modal-btn` armazena a URL no `data-video` para injeção segura no iframe.  

**Script do modal:**

```js
document.querySelectorAll('.open-modal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const url = btn.dataset.video;
    document.getElementById('video-iframe').src = url + '?autoplay=1';
    document.getElementById('modal-overlay').classList.add('open');
  });
});

document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('video-iframe').src = '';
  document.getElementById('modal-overlay').classList.remove('open');
});
```

---

### 📬 Contato

- Ícones sociais com `target="_blank"` e `rel="noopener noreferrer"`.  
- Hover vermelho com leve elevação.

---

## ⚙️ Como abrir localmente

1. Clone ou baixe o repositório.  
2. Abra o arquivo `index.html` no navegador.

Exemplo:

```bash
git clone https://github.com/SEU-REPO-AQUI
cd SEU-REPO-AQUI

# Abrir com servidor local
npx http-server . -p 8080
# Acesse: http://localhost:8080
```

Pronto — o site está pronto para navegação.
