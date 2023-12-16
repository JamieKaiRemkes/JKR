import type { Directive, DirectiveBinding } from "vue";

let root: HTMLElement | null = null;
let binding: DirectiveBinding<() => void> | null = null;

const eventHandler = (event: MouseEvent) => {
    if (!root?.contains(event.target as Node) && typeof binding?.value === 'function') {
        binding.value()
    }
}

const vClickOutside: Directive<HTMLElement,() => void> = {
  created(el, directiveBinding) {
    root = el
    binding = directiveBinding
    document.addEventListener('pointerdown', eventHandler)
},
beforeUnmount(el) {
    root = null
    binding = null
    document.removeEventListener('pointerdown', eventHandler)
  },
}


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', vClickOutside)
})
