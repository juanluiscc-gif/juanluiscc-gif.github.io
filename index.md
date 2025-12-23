---
layout: none
title: Juan Luis Cortés Cervantes | Científico de Datos
---

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>{{ page.title }}</title>
    <meta name="description" content="Portafolio profesional de Juan Luis Cortés Cervantes, científico de datos enfocado en análisis, visualización y proyectos con impacto social.">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="{{ '/style.css' | relative_url }}">

    <!-- Favicon -->
    <link rel="icon" href="{{ '/images/logo1.png' | relative_url }}" type="image/png">

    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>

<body>

<nav class="navbar">
    <div class="container">
        <a href="{{ '/' | relative_url }}" class="logo">
            <img src="{{ '/images/logo1.png' | relative_url }}" alt="JLC Logo" class="nav-logo">
        </a>

        <div class="nav-links">
            <a href="{{ '/about/' | relative_url }}">Sobre mí</a>
            <a href="{{ '/projects/' | relative_url }}">Proyectos</a>
            <a href="{{ '/contact/' | relative_url }}">Contacto</a>

            <span class="nav-divider"></span>

            <a href="https://www.linkedin.com/in/juan-luis-cortés-cervantes/" target="_blank" class="nav-social" title="LinkedIn">
                <i class="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/juanluiscc-gif" target="_blank" class="nav-social" title="GitHub">
                <i class="fa-brands fa-github"></i>
            </a>

            <a href="mailto:juanluiscortescervantes@gmail.com" class="nav-social" title="Email">
                <i class="fa-solid fa-envelope"></i>
            </a>
        </div>
    </div>
</nav>

<section class="hero">
    <div class="container">
        <img src="{{ '/images/logo1.png' | relative_url }}" alt="Logo JLC" class="hero-logo">

        <h1>Juan Luis Cortés Cervantes</h1>
        <h2>Científico de Datos</h2>

        <p class="hero-text">La ciencia al servicio de la humanidad.</p>

        <div class="cta-buttons">
            <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary">Ver Proyectos</a>
            <a href="{{ '/about/' | relative_url }}" class="btn btn-primary">Sobre mí</a>
            <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Conectemos</a>
            <a href="{{ '/utils/Juan Cortés CV.pdf' | relative_url }}" download class="btn btn-secondary">
                Descargar CV
            </a>
        </div>
    </div>
</section>

<footer>
    <div class="container">
        <p>&copy; 2025 Juan Luis Cortés Cervantes. Todos los derechos reservados.</p>
    </div>
</footer>

</body>
</html>
