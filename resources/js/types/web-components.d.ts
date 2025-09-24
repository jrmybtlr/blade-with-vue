// Type definitions for web components

export interface AnimatedButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  animationType?: 'scale' | 'bounce' | 'slide' | 'fade';
}

// Custom element declarations
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'animated-button': AnimatedButtonProps & {
        children?: any;
        onClick?: (event: Event) => void;
        onMouseEnter?: (event: Event) => void;
        onMouseLeave?: (event: Event) => void;
        onFocus?: (event: Event) => void;
        onBlur?: (event: Event) => void;
      };
    }
  }

  interface HTMLElementTagNameMap {
    'animated-button': HTMLElement;
  }
}

export {};
