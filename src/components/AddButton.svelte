<script lang="ts">
  import { createEventDispatcher, onDestroy } from 'svelte'
  import { options as o } from '../stores/optionStore'
  export let type: string

  let active: boolean = false
  let container: HTMLDivElement

  let options
  const unsubscribe = o.subscribe(value => options = value[type])
  onDestroy(unsubscribe)

  const dispatch = createEventDispatcher()
  const hover = (state: boolean) => () => (active = state)
  const click = (value: string) => () => dispatch('click', parseInt(value))
</script>

<div
  class:active
  class="container"
  bind:this={container}
  style="width: {active ? container.scrollWidth - 6 : 24}px"
  on:mouseenter={hover(true)}
  on:mouseleave={hover(false)}
>
  <div class="plus" class:active>+</div>
  {#each Object.entries(options) as [value, text] (value)}
    <button class="option" class:active on:click={click(value)}>{text}</button>
  {/each}
</div>

<style>
  .container {
    display: flex;
    background-color: var(--primary2);
    padding: 3px;
    overflow: hidden;
    border-radius: 20px;
    transition: width 0.25s;
  }

  .plus {
    position: absolute;
    height: 24px;
    width: 24px;
    font-size: 30px;
    line-height: 19px;
    color: #fff;
    transition: color 0.25s;
    pointer-events: none;
    text-align: center;
  }

  .plus.active {
    color: transparent;
  }

  .option {
    all: unset;
    line-height: 20px;
    padding: 2px 8px;
    border-radius: 20px;
    color: transparent;
    transition: color 0.25;
    white-space: nowrap;
  }

  .option.active {
    color: #fff;
  }

  .option:hover {
    background-color: var(--primary3);
  }
</style>
