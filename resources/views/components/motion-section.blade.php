<section {{ $attributes->merge(['class' => $class]) }}>
    <div class="mb-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ $title }}
        </h2>
    </div>

    <div class="motion-component-wrapper">
        {{ $slot }}
    </div>
</section>