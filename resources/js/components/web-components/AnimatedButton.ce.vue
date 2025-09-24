<template>
    <motion.button
        :class="buttonClasses"
        :disabled="disabled"
        :type="type"
        :initial="initialAnimation"
        :animate="animateState"
        :whileHover="hoverAnimation"
        :whilePress="pressAnimation"
        :whileFocus="focusAnimation"
        :transition="transitionConfig"
        @click="handleClick"
    >
        <motion.span
            v-if="loading"
            :animate="{ rotate: 360 }"
            :transition="{ duration: 1, repeat: Infinity, ease: 'linear' }"
            class="mr-2 inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent"
        />
        <slot />
    </motion.button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { motion } from "motion-v";
import type { AnimatedButtonProps } from "../../types/web-components";

// Define props with TypeScript
interface Props extends AnimatedButtonProps {}

const props = withDefaults(defineProps<Props>(), {
    variant: "primary",
    size: "md",
    disabled: false,
    loading: false,
    type: "button",
    animationType: "scale",
});

// Define emits
const emit = defineEmits<{
    click: [event: Event];
}>();

// Computed properties
const buttonClasses = computed(() => {
    const baseClasses =
        "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        xl: "px-8 py-4 text-xl",
    };

    const variantClasses = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary:
            "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
        outline:
            "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
        ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    };

    return `${baseClasses} ${sizeClasses[props.size]} ${
        variantClasses[props.variant]
    }`;
});

const initialAnimation = computed(() => {
    const animations = {
        scale: { scale: 0.95, opacity: 0 },
        bounce: { y: -20, opacity: 0 },
        slide: { x: -20, opacity: 0 },
        fade: { opacity: 0 },
    };
    return animations[props.animationType];
});

const animateState = computed(() => {
    return {
        scale: 1,
        opacity: 1,
        x: 0,
        y: 0,
    };
});

const hoverAnimation = computed(() => {
    if (props.disabled || props.loading) return {};

    const animations = {
        scale: { scale: 1.05 },
        bounce: { y: -2 },
        slide: { x: 2 },
        fade: { opacity: 0.9 },
    };
    return animations[props.animationType];
});

const pressAnimation = computed(() => {
    if (props.disabled || props.loading) return {};

    const animations = {
        scale: { scale: 0.95 },
        bounce: { y: 0 },
        slide: { x: 0 },
        fade: { opacity: 0.8 },
    };
    return animations[props.animationType];
});

const focusAnimation = computed(() => {
    return {
        scale: 1.02,
        boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)",
    };
});

const transitionConfig = computed(() => {
    return {
        type: "spring" as const,
        stiffness: 400,
        damping: 25,
        mass: 0.8,
    };
});

// Methods
const handleClick = (event: Event) => {
    if (!props.disabled && !props.loading) {
        emit("click", event);
    }
};
</script>

<style scoped>
/* Custom element styles */
:host {
    display: inline-block;
}

/* Ensure proper focus styles */
motion-button:focus {
    outline: none;
}

/* Loading spinner animation */
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
