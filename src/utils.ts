export const clickAway = (node: Node) => {
  const handleClick = (event: any) => {
    if (!node.contains(event.target)) {
      event.stopPropagation();
      node.dispatchEvent(new CustomEvent('outclick'));
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    },
  };
};

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
