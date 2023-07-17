<script script lang="ts">
  import Select from './Select.svelte'
  import MultiSelect from './MultiSelect.svelte'
  import TextInput from './TextInput.svelte'
  import Toggle from './Toggle.svelte'
  import Condition from './Condition.svelte'
  import AddButton from './AddButton.svelte'
  import { getEntryStore } from '../stores/entryStore.js'
  import { EntryType, ConditionType } from '../types'
  import { options } from '../stores/optionStore'

  export let id: string
  export let indent = -1

  const test = { [ConditionType.State]: 'Device', [ConditionType.Range]: 'Time' }
  const entry = getEntryStore(id)
  const width = indent * 30 + 30 + 'px'

  const handleRemove = () => {
    entry.remove()
  }

  const handleAdd = event => {
    entry.addChild(event.detail)
  }

  const handleAddCondition = event => {
    const type = event.detail
    if ($entry.conditions.length > 0) {
      $entry.conditions.push({ type: ConditionType.Operator, isAnd: true })
    }
    if (type === ConditionType.State) {
      $entry.conditions.push({ type, device: '', state: true })
    } else {
      $entry.conditions.push({ type, start: '', end: '' })
    }
    $entry.conditions = $entry.conditions
  }
</script>

{#if $entry.type === EntryType.Parent}
  {#each $entry.children as entryId (entryId)}
    <svelte:self id={entryId} indent={indent + 1} />
  {/each}
  <div class="container">
    <div style:width />
    <AddButton options={options.entry} on:click={handleAdd} />
  </div>
{:else if $entry.type === EntryType.Device}
  <div class="container">
    <div style:width>
      <button class="remove" on:click={handleRemove}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          />
        </svg>
      </button>
    </div>
    <MultiSelect label="Devices" type="device" bind:selected={$entry.devices} />
    <Toggle label="State" on="Turn On" off="Turn Off" bind:state={$entry.state} />
    <Select label="Brightness" type="brightness" bind:selected={$entry.brightness} />
  </div>
{:else if $entry.type === EntryType.Wait}
  <div class="container">
    <div style:width>
      <button class="remove" on:click={handleRemove}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          />
        </svg>
      </button>
    </div>
    <TextInput label="Wait" bind:text={$entry.wait} />
  </div>
{:else if $entry.type === EntryType.If}
  <div class="container">
    <div style:width>
      <button class="remove" on:click={handleRemove}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          />
        </svg>
      </button>
    </div>
    <div class="text">If</div>
    <div class="conditions">
      {#each $entry.conditions as condition}
        <Condition bind:condition />
      {/each}
      <AddButton options={test} on:click={handleAddCondition} />
    </div>
  </div>
  <svelte:self id={$entry.seq1} {indent} />
{:else if $entry.type === EntryType.IfElse}
  <div class="container">
    <div style:width>
      <button class="remove" on:click={handleRemove}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          />
        </svg>
      </button>
    </div>
    <div class="text">If</div>
    <div class="conditions">
      {#each $entry.conditions as condition}
        <Condition bind:condition />
      {/each}
      <AddButton options={test} on:click={handleAddCondition} />
    </div>
  </div>
  <svelte:self id={$entry.seq1} {indent} />
  <div class="container">
    <div style:width />
    <div class="text">Else</div>
  </div>
  <svelte:self id={$entry.seq2} {indent} />
{:else if $entry.type === EntryType.While}
  <div class="container">
    <div style:width>
      <button class="remove" on:click={handleRemove}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          />
        </svg>
      </button>
    </div>
    <div class="text">While</div>
    <div class="conditions">
      {#each $entry.conditions as condition}
        <Condition bind:condition />
      {/each}
      <AddButton options={test} on:click={handleAddCondition} />
    </div>
  </div>
  <svelte:self id={$entry.seq1} {indent} />
{/if}

<style>
  .container {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .conditions {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
  }

  .remove {
    all: unset;
    height: 20px;
    width: 20px;
    border-radius: 5px;
    float: right;
  }

  .remove:hover {
    background-color: var(--error1);
  }

  .remove:hover svg {
    fill: var(--error4);
  }

  svg {
    height: 100%;
    width: 100%;
    fill: var(--background4);
  }

  .text {
    color: var(--text-background);
    margin-right: 10px;
  }
</style>
