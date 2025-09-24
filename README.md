# Animated Web Components for Laravel Blade

This project demonstrates how to integrate Motion for Vue animations into Laravel Blade templates using Vue web components (custom elements).

## 🚀 Quick Start

### 1. Development Setup

```bash
# Install dependencies
npm install

# Start development servers
npm run dev          # Vite dev server
php artisan serve    # Laravel dev server
```

### 2. View the Demo

Visit `http://localhost:8000/` to see the animated components in action.

### Build Process

The project uses Vite to build Vue components as custom elements:

1. **Vue Components** (`.ce.vue`) are compiled as custom elements with TypeScript support
2. **Web Components Entry** (`web-components.ts`) registers custom elements using a configuration array
3. **Main App** (`app.ts`) imports web components for global availability
4. **Blade Templates** use custom elements as regular HTML tags

### Key Features

- ✅ **Native Web Components** - No framework dependencies in templates
- ✅ **Motion Animations** - Smooth, performant animations using Motion for Vue
- ✅ **Tailwind Styling** - Consistent design system
- ✅ **TypeScript Ready** - Full type support
- ✅ **Accessibility** - Proper ARIA attributes and keyboard navigation
- ✅ **Responsive** - Mobile-friendly animations
- ✅ **Performance** - Web components are native and performant
- ✅ **Reusability** - Components work across multiple Blade templates
- ✅ **Maintainability** - Clear separation of animation logic
- ✅ **Flexibility** - Easy to add new animated components
- ✅ **SEO-Friendly** - Maintains server-side rendering benefits

## Development

### Adding New Components

1. Create a new `.ce.vue` file in `resources/js/components/web-components/`
2. Add the component to the `componentConfig` array in `web-components.ts`
3. The custom element will be automatically registered
4. Use in Blade templates

### Example New Component

```vue
<!-- MyNewComponent.ce.vue -->
<template>
    <motion.div :animate="{ opacity: 1 }">
        <slot />
    </motion.div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
</script>
```

```typescript
// web-components.ts
import MyNewComponent from "./components/web-components/MyNewComponent.ce.vue";

const componentConfig = [
    // ... existing components
    {
        name: "my-new-component",
        component: MyNewComponent,
        element: "my-new-component",
    },
];
```

```blade
<!-- In Blade template -->
<my-new-component>Hello World!</my-new-component>
```

## Production Build

```bash
npm run build
```

This creates optimized bundles in the `public/build/` directory.

## Links

- [Motion for Vue Documentation](https://motion.dev/docs/vue)
- [Vue Custom Elements Guide](https://vuejs.org/guide/extras/web-components.html)
- [Laravel Vite Plugin](https://laravel.com/docs/11.x/vite)
- [Tailwind CSS](https://tailwindcss.com/)
