import { listen } from "svelte/internal";
import type { ActionReturn } from "svelte/action";

interface Attributes {
  "on:outclick"?: (e: CustomEvent<void>) => void;
}

type Callback = () => unknown

export const clickAway = (node: HTMLElement, callback?: Callback): ActionReturn<{}, Attributes> =>{
  const handleClick = (event: Event) => {
    if (event.target !== null && !node.contains(event.target as Node)) {
      node.dispatchEvent(new CustomEvent("outclick"));
      callback?.();
    }
  };

  const stop = listen(document, "click", handleClick, true);

  return {
    destroy() {
      stop();
    },
  };
}

export let getId = (() => {
  let defaultSize = 12
  let alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return () => {
    let id = ''
    while (true) {
      let bytes = crypto.getRandomValues(new Uint8Array(step))
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === defaultSize) return id
      }
    }
  }
})()
