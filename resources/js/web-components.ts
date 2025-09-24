import { defineCustomElement } from 'vue';
import MotionCounter from './components/web-components/MotionCounter.ce.vue';
import MotionDrag from './components/web-components/MotionDrag.ce.vue';
import MotionFrame from './components/web-components/MotionFrame.ce.vue';
import MotionGestures from './components/web-components/MotionGestures.ce.vue';
import MotionSpring from './components/web-components/MotionSpring.ce.vue';

// Component configuration for easy management
const componentConfig = [
  {
    name: 'motion-counter',
    component: MotionCounter,
    element: 'motion-counter'
  },
  {
    name: 'motion-drag',
    component: MotionDrag,
    element: 'drag-element'
  },
  {
    name: 'motion-gestures',
    component: MotionGestures,
    element: 'motion-gestures'
  },
  {
    name: 'motion-spring',
    component: MotionSpring,
    element: 'motion-spring'
  },
  {
    name: 'motion-frame',
    component: MotionFrame,
    element: 'motion-frame'
  }
];

const customElements = componentConfig.map(({ name, component, element }) => {
  const customElement = defineCustomElement(component);
  
  if (!window.customElements.get(element)) {
    window.customElements.define(element, customElement);
  }
  
  return { name, customElement };
});

export const MotionCounterElement = customElements.find(ce => ce.name === 'motion-counter')?.customElement;
export const MotionDragElement = customElements.find(ce => ce.name === 'motion-drag')?.customElement;
export const MotionGesturesElement = customElements.find(ce => ce.name === 'motion-gestures')?.customElement;
export const MotionSpringElement = customElements.find(ce => ce.name === 'motion-spring')?.customElement;
export const MotionFrameElement = customElements.find(ce => ce.name === 'motion-frame')?.customElement;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'motion-counter': any;
      'drag-element': any;
      'motion-gestures': any;
      'motion-spring': any; 
      'motion-frame': any;
    }
  }
}