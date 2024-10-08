<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/preline/dist/preline.min.js"></script>
        <link rel="stylesheet" href="https://preline.co/assets/css/main.min.css">
        <meta charset="utf-8">
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1">
        <link rel="canonical" href="https://preline.co/">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="shortcut icon" href="https://preline.co/favicon.ico">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">        <meta name="description" content="From bold visuals to interactive elements, this template is fully customizable to suit your unique needs and preferences.">

        <meta name="twitter:site" content="@preline">
        <meta name="twitter:creator" content="@preline">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Creative Agency Demo Template Tailwind CSS | Preline UI, crafted with Tailwind CSS">
        <meta name="twitter:description" content="From bold visuals to interactive elements, this template is fully customizable to suit your unique needs and preferences.">
        <meta name="twitter:image" content="https://preline.co/assets/img/og-image.png">

        <meta property="og:url" content="https://preline.co/">
        <meta property="og:locale" content="en_US">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="Preline">
        <meta property="og:title" content="Creative Agency Demo Template Tailwind CSS | Preline UI, crafted with Tailwind CSS">
        <meta property="og:description" content="From bold visuals to interactive elements, this template is fully customizable to suit your unique needs and preferences.">
        <meta property="og:image" content="https://preline.co/assets/img/og-image.png">

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gupter:wght@400;500;700&display=swap" rel="stylesheet">

        <!-- Scripts -->
        <title>App</title>
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        
        @inertia
    </body>
</html>
