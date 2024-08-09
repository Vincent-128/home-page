<script lang="ts">
  import { getOptions } from '../../stores/optionStore'
  import { createEventDispatcher, onDestroy } from 'svelte'
  import type { StateCondition } from '../../types/automation.types'
  import Options from '../selects/Options.svelte'

  export let state: StateCondition

  let options: [string, string][]
  let showOptions = false

  const onClick = () => (showOptions = true)
  const onOutClick = () => (showOptions = false)
  const onSelect = (e: CustomEvent<string>) => {
    state.device = e.detail
    showOptions = false
  }

  const dispatch = createEventDispatcher()
  const unsubscribe = getOptions('all').subscribe(o => (options = o as [string, string][]))
  const remove = () => dispatch('remove')

  onDestroy(unsubscribe)
</script>

<button class="text" on:click={onClick}> {options.find(o => o[0] === state.device)?.[1] || 'Select Device'}</button>

<Options {options} {showOptions} selected={[state.device]} on:select={onSelect} on:outclick={onOutClick} />

<button class="text" on:click={() => (state.state = !state.state)}>
  {state.state ? 'Is On' : 'Is Off'}
</button>
<button on:click={remove} class="remove">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path
      d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
    />
  </svg>
</button>

<style>
  .text {
    all: unset;
    line-height: 1em;
    font-size: 1em;
    border-radius: 20px;
    padding: 4px 4px;
  }

  .text:hover {
    background-color: var(--primary3);
  }

  .remove {
    all: unset;
    height: 16px;
    width: 16px;
    padding: 3px;
    border-radius: 16px;
  }

  .remove:hover {
    background-color: var(--primary3);
  }

  svg {
    height: 100%;
    width: 100%;
    fill: var(--primary5);
  }
</style>
