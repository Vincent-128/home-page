<script lang="ts">
  import InputContainer from '../inputs/InputContainer.svelte'
  import { options as o, type Options } from '../../stores/optionStore'
  import { onDestroy } from 'svelte'
  import { clickAway } from '../../utils'

  type V = $$Generic<string | number>
  type S = V[]

  export let selected: S
  export let type: keyof Options
  export let label: string

  let active = false
  let showOptions = false

  let options: { [id: string]: V }
  const unsubscribe = o.subscribe(value => options = value[type])
  onDestroy(unsubscribe)

  const handleClick = () => showOptions = true
  const handleOutClick = () => showOptions = false
  const handleOption = (value: V) => () => {
    if (selected.includes(value)) {
      selected = selected.filter(s => s !== value)
    } else {
      selected = [...selected, value]
    }
  }

  $: text =
    selected
      .map(s => options[s])
      .sort()
      .join(', ') || ''
  $: active = showOptions || text !== ''
</script>

<InputContainer {active} {label} on:click={handleClick}>
  <div class="text">{text}</div>
  {#if showOptions}
    <div class="options" use:clickAway on:outclick={handleOutClick}>
      {#each Object.entries(options) as [value, text] (value)}
        <button class="option" on:click|stopPropagation={handleOption(value)}>
          <div class="text">{text}</div>
          {#if selected.includes(value)}
            <svg class="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
              />
            </svg>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</InputContainer>

<style>
  .options {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 10;
    background-color: #fff;
    top: 110%;
    left: -1px;
    width: 240px;
    padding: 5px;
    border-radius: 10px;
    max-height: 300px;
    overflow-y: auto;
  }

  .option {
    all: unset;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 18px;
    align-items: center;
    padding: 5px 10px 5px 8px;
    border-radius: 7px;
    color: #000;
  }

  .option:hover {
    background-color: var(--primary3);
    color: #fff;
  }

  svg {
    height: 18px;
    width: 18px;
  }

  .text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
