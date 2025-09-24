<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Animated Components - {{ config('app.name', 'Laravel') }}</title>

  <!-- Styles / Scripts -->
  @vite(['resources/css/app.css', 'resources/js/app.ts'])
</head>

<body class="bg-neutral-900 min-h-screen">
  <div class="container mx-auto px-4 py-8">
    <header class="text-center py-12">
      <h1 class="text-4xl font-bold text-white">
        Motion for Vue + Blade Demo
      </h1>
      <p class="text-xl mt-3 text-neutral-400">
        Animated web components in Laravel Blade templates
      </p>
    </header>

    <div class="max-w-4xl mx-auto space-y-12">

      <x-motion-section title="Counter Component" subtitle="An interactive counter with smooth animations">
        <motion-counter />
      </x-motion-section>

      <x-motion-section title="CSS Spring Animation" subtitle="Physics-based spring animations using CSS">
        <css-spring />
      </x-motion-section>

      <x-motion-section title="Drag Element" subtitle="Draggable element with motion feedback">
        <drag-element />
      </x-motion-section>
    </div>

    <footer class="text-center mt-12 text-neutral-600 dark:text-neutral-400">
      <p>Built with Laravel, Vue, and Motion for Vue</p>
    </footer>
  </div>
</body>

</html>