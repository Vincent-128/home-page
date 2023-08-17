<script lang="ts">
  import { ConditionType, type Condition } from '../types'
  import { clickAway } from '../utils'
  import { options as o, type Options } from '../stores/optionStore'
  import { createEventDispatcher, onDestroy } from 'svelte'

  export let condition: Condition
  let showOptions = false

  const dispatch = createEventDispatcher()
  const handleClick = () => (showOptions = true)
  const handleOutClick = () => (showOptions = false)
  const handleOption = (value: string) => () => {
    condition.device = value
    showOptions = false
  }

  let options;
  const unsubscribe = o.subscribe(value => options = value.all);
  onDestroy(unsubscribe);
  const remove = () =>  dispatch('remove')
</script>

<div class="condition">
  {#if condition.type === ConditionType.State}
    <button class="text" on:click={handleClick}>{options[condition.device] || 'Select Device'}</button>

    {#if showOptions}
      <div class="options" use:clickAway on:outclick={handleOutClick}>
        {#each Object.entries(options) as [value, text] (value)}
          <button class="option" on:click|stopPropagation={handleOption(value)}>
            <div class="optiontext">{text}</div>
            {#if condition.device === value}
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

    <button class="text" on:click={() => condition.state = !condition.state}>
      {condition.state ? 'Is On' : 'Is Off'}
    </button>
    <button on:click={remove} class="remove">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path
          d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
        />
      </svg>
    </button>
  {:else if condition.type === ConditionType.Range}
    <div class="test">Between</div>
    <input class="time" type="text" bind:value={condition.start} placeholder="0:00" />
    <div>-</div>
    <input class="time" type="text" bind:value={condition.end} placeholder="24:00" />
    <button on:click={remove} class="remove">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path
          d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
        />
      </svg>
    </button>
  {:else}
    <button class="text" on:click={() => (condition.isAnd = !condition.isAnd)}>
      {condition.isAnd ? 'And' : 'Or'}
    </button>
  {/if}
</div>

<style>
  .condition {
    border-radius: 20px;
    background-color: var(--primary2);
    color: #fff;
    display: flex;
    align-items: center;
    padding: 3px;
    position: relative;
  }
  .test {
    padding-left: 4px;
  }
  .text,
  .time {
    all: unset;
    line-height: 1em;
    font-size: 1em;
    border-radius: 20px;
    padding: 4px 4px;
  }

  .text:hover {
    background-color: var(--primary3);
  }

  .time {
    width: 42px;
    text-align: center;
    height: 1em;
  }

  .time::placeholder {
    color: var(--primary4);
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
    max-height: 320px;
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

  .check {
    height: 18px;
    width: 18px;
  }
  .optiontext {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
