import { defineCustomElement } from 'vue';
import AnimatedButton from './components/web-components/AnimatedButton.ce.vue';
import Counter from './components/web-components/Counter.ce.vue';
import CssSpring from './components/web-components/CssSpring.ce.vue';
import Drag from './components/web-components/Drag.ce.vue';

// Define custom elements
const AnimatedButtonElement = defineCustomElement(AnimatedButton);
const MotionCounter = defineCustomElement(Counter);
const MotionDrag = defineCustomElement(Drag);
const MotionCssSpring = defineCustomElement(CssSpring);

if (!customElements.get('animated-button')) {
  customElements.define('animated-button', AnimatedButtonElement);
}

if (!customElements.get('motion-counter')) {
  customElements.define('motion-counter', MotionCounter);
}


if (!customElements.get('drag-element')) {
  customElements.define('drag-element', MotionDrag);
}


if (!customElements.get('css-spring')) {
  customElements.define('css-spring', MotionCssSpring);
}

export { AnimatedButtonElement, MotionCounter, MotionCssSpring, MotionDrag };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'motion-counter': any;
      'css-spring': any;
      'drag-element': any;
    }
  }
}