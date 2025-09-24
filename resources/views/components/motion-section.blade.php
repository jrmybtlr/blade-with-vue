<section {{ $attributes->merge(['class' => $class]) }}>
    <div class="mb-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ $title }}
        </h2>
        @if($subtitle)
            <p class="text-gray-600 dark:text-gray-400 mt-2">
                {{ $subtitle }}
            </p>
        @endif
    </div>

    <div class="motion-component-wrapper">
        {{ $slot }}
    </div>
</section>