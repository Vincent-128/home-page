<script lang="ts">
  import { createEventDispatcher, onDestroy } from 'svelte'
  import { getOptions, type OptionTypes } from '../../stores/optionStore'
  export let type: OptionTypes

  let active: boolean = false
  let container: HTMLDivElement
  let options: [number, string][]

  const unsubscribe = getOptions(type).subscribe(o => (options = o as [number, string][]))

  const dispatch = createEventDispatcher()
  const hover = (state: boolean) => () => (active = state)
  const click = (value: number) => () => dispatch('click', value)

  onDestroy(unsubscribe)
</script>

<div class:active class="container" bind:this={container} style="width: {active ? container.scrollWidth - 6 : 24}px" on:mouseenter={hover(true)} on:mouseleave={hover(false)}>
  <div class="plus" class:active>+</div>
  {#each options as [id, text] (id)}
    <button class="option" class:active on:click={click(id)}>{text}</button>
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
