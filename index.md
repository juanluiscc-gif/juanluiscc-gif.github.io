---
layout: default
title: "Inicio"
---

<header class="hero">
  <div class="container">
    <h1>Juan Luis Cortés Cervantes (juanluiscc-gif)</h1>
    <p class="lead">Científico de Datos • Proyectos & Portafolio</p>
    <nav class="hero-nav">
      <a href="#proyectos">Proyectos</a>
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </div>
</header>

<main class="container">
  <section id="proyectos">
    <h2>Proyectos destacados</h2>
    <div id="repos" class="grid">Cargando proyectos...</div>
  </section>

  <section id="sobre-mi">
    <h2>Sobre mí</h2>
    <p>Soy desarrollador interesado en construir aplicaciones web modernas y soluciones eficaces. Aquí encontrarás una selección de mis repositorios públicos en GitHub.</p>
  </section>

  <section id="contacto">
    <h2>Contacto</h2>
    <p>Email: <a href="mailto:tu-email@ejemplo.com">juanluiscortescervantes@gmail.com</a></p>
    <p>GitHub: <a href="https://github.com/juanluiscc-gif">juanluiscc-gif</a></p>
  </section>
</main>

<footer class="site-footer">
  <p>© <span id="year"></span> Juan Luis — Hecho con ❤️</p>
</footer>

<script>document.getElementById('year').textContent = new Date().getFullYear();</script>

<script src="/assets/js/repos.js"></script>