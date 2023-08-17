<script script lang="ts">
  import Select from './Select.svelte'
  import MultiSelect from './MultiSelect.svelte'
  import TextInput from './TextInput.svelte'
  import Toggle from './Toggle.svelte'
  import Condition from './Condition.svelte'
  import AddButton from './AddButton.svelte'
  import RemoveButton from './RemoveButton.svelte'
  import { getEntryStore } from '../stores/entryStore.js'
  import { EntryType, ConditionType } from '../types'
  import { options } from '../stores/optionStore'

  export let id: string
  export let indent = -1

  const test = { [ConditionType.State]: 'Device', [ConditionType.Range]: 'Time' }
  const entry = getEntryStore(id)
  const width = indent * 30 + 30 + 'px'

  const handleAdd = event => entry.addChild(event.detail)
  const handleRemove = () => entry.remove()
  const handleAddCondition = event => entry.addCondition(event.detail)
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
    <RemoveButton {width} on:click={handleRemove}/>
    <MultiSelect label="Devices" type="device" bind:selected={$entry.devices} />
    <Toggle label="State" on="Turn On" off="Turn Off" bind:state={$entry.state} />
    <Select label="Brightness" type="brightness" bind:selected={$entry.brightness} />
  </div>
{:else if $entry.type === EntryType.Wait}
  <div class="container">
    <RemoveButton {width} on:click={handleRemove}/>
    <TextInput label="Wait" bind:text={$entry.wait} />
  </div>
{:else if $entry.type === EntryType.If}
  <div class="container">
    <RemoveButton {width} on:click={handleRemove}/>
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
    <RemoveButton {width} on:click={handleRemove}/>
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
    <RemoveButton {width} on:click={handleRemove}/>
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
</style>
