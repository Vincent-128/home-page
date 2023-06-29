<script lang="ts">
  import type { Weekdays } from '../types'

  export let weekdays: Weekdays
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  const handleClick = (i: number) => {
    weekdays[i] = !weekdays[i]
  }
</script>

<div class="container">
  {#each weekdays as selected, i (i)}
    <button class:selected on:click={() => handleClick(i)}>{days[i]}</button>
  {/each}
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  button {
    all: unset;
    height: 30px;
    width: 30px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary4);
    border-radius: 20px;
    line-height: 1em;
    font-size: 1em;
  }
  button.selected {
    background-color: var(--secondary0);
  }
</style>
