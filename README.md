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

Visit `http://localhost:8000/animated-demo` to see the animated components in action.

## 🎨 Available Components

### AnimatedButton

A fully animated button component with multiple variants, sizes, and animation types.

#### Usage in Blade Templates

```blade
<!-- Basic usage -->
<animated-button variant="primary">Click me!</animated-button>

<!-- With different variants -->
<animated-button variant="secondary">Secondary</animated-button>
<animated-button variant="outline">Outline</animated-button>
<animated-button variant="ghost">Ghost</animated-button>
<animated-button variant="danger">Danger</animated-button>

<!-- Different sizes -->
<animated-button size="sm">Small</animated-button>
<animated-button size="md">Medium</animated-button>
<animated-button size="lg">Large</animated-button>
<animated-button size="xl">Extra Large</animated-button>

<!-- Different animation types -->
<animated-button animation-type="scale">Scale Animation</animated-button>
<animated-button animation-type="bounce">Bounce Animation</animated-button>
<animated-button animation-type="slide">Slide Animation</animated-button>
<animated-button animation-type="fade">Fade Animation</animated-button>

<!-- Interactive states -->
<animated-button loading="true">Loading...</animated-button>
<animated-button disabled="true">Disabled</animated-button>

<!-- With click handlers -->
<animated-button onclick="alert('Hello!')">Click me!</animated-button>
```

#### Props

| Prop             | Type    | Default     | Description                     |
| ---------------- | ------- | ----------- | ------------------------------- |
| `variant`        | String  | `'primary'` | Button style variant            |
| `size`           | String  | `'md'`      | Button size                     |
| `disabled`       | Boolean | `false`     | Disable the button              |
| `loading`        | Boolean | `false`     | Show loading spinner            |
| `type`           | String  | `'button'`  | HTML button type                |
| `animation-type` | String  | `'scale'`   | Animation type for interactions |

#### Variants

-   `primary` - Blue background with white text
-   `secondary` - Gray background with white text
-   `outline` - Blue border with blue text
-   `ghost` - Transparent with blue text
-   `danger` - Red background with white text

#### Sizes

-   `sm` - Small button
-   `md` - Medium button (default)
-   `lg` - Large button
-   `xl` - Extra large button

#### Animation Types

-   `scale` - Scale up/down on hover/press
-   `bounce` - Bounce effect on hover
-   `slide` - Slide horizontally on hover
-   `fade` - Fade opacity on hover

## 🏗️ Architecture

### File Structure

```
resources/
├── js/
│   ├── components/
│   │   └── web-components/
│   │       ├── AnimatedButton.ce.vue
│   │       └── index.js
│   ├── web-components.js
│   └── app.js
├── views/
│   └── examples/
│       └── animated-components.blade.php
└── css/
    └── app.css
```

### Build Process

The project uses Vite to build Vue components as custom elements:

1. **Vue Components** (`.ce.vue`) are compiled as custom elements
2. **Web Components Entry** (`web-components.js`) registers custom elements
3. **Main App** (`app.js`) imports web components for global availability
4. **Blade Templates** use custom elements as regular HTML tags

### Key Features

-   ✅ **Native Web Components** - No framework dependencies in templates
-   ✅ **Motion Animations** - Smooth, performant animations using Motion for Vue
-   ✅ **Tailwind Styling** - Consistent design system
-   ✅ **TypeScript Ready** - Full type support
-   ✅ **Accessibility** - Proper ARIA attributes and keyboard navigation
-   ✅ **Responsive** - Mobile-friendly animations
-   ✅ **Dark Mode** - Built-in dark mode support

## 🎯 Benefits

1. **Performance** - Web components are native and performant
2. **Reusability** - Components work across multiple Blade templates
3. **Maintainability** - Clear separation of animation logic
4. **Flexibility** - Easy to add new animated components
5. **SEO-Friendly** - Maintains server-side rendering benefits

## 🔧 Development

### Adding New Components

1. Create a new `.ce.vue` file in `resources/js/components/web-components/`
2. Export the component in `web-components.js`
3. Register the custom element
4. Use in Blade templates

### Example New Component

```vue
<!-- MyNewComponent.ce.vue -->
<template>
    <motion.div :animate="{ opacity: 1 }">
        <slot />
    </motion.div>
</template>

<script>
import { motion } from "motion-v";

export default {
    name: "MyNewComponent",
    components: { motion },
};
</script>
```

```javascript
// web-components.js
import MyNewComponent from "./components/web-components/MyNewComponent.ce.vue";

const MyNewComponentElement = defineCustomElement(MyNewComponent);
customElements.define("my-new-component", MyNewComponentElement);
```

```blade
<!-- In Blade template -->
<my-new-component>Hello World!</my-new-component>
```

## 🚀 Production Build

```bash
npm run build
```

This creates optimized bundles in the `public/build/` directory.

## 📚 Resources

-   [Motion for Vue Documentation](https://motion.dev/docs/vue)
-   [Vue Custom Elements Guide](https://vuejs.org/guide/extras/web-components.html)
-   [Laravel Vite Plugin](https://laravel.com/docs/11.x/vite)
-   [Tailwind CSS](https://tailwindcss.com/)
