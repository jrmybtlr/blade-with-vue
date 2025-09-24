// Web Components Index
// This file exports all web components for easy importing

export { default as AnimatedButton } from './AnimatedButton.ce.vue';

// Type definitions for web components
export interface AnimatedButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  animationType?: 'scale' | 'bounce' | 'slide' | 'fade';
}

// Re-export for convenience
export * from './AnimatedButton.ce.vue';
