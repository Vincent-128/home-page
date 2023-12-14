<script script lang="ts">
  import Select from '../selects/Select.svelte'
  import MultiSelect from '../selects/MultiSelect.svelte'
  import TextInput from '../inputs/TextInput.svelte'
  import Toggle from '../inputs/Toggle.svelte'
  import Condition from '../conditions/index.svelte'
  import AddButton from '../inputs/AddButton.svelte'
  import RemoveButton from '../inputs/RemoveButton.svelte'
  import { getEntryStore } from '../../stores/entryStore.js'
  import { EntryType, ConditionType } from '../../types'

  export let id: string
  export let indent = -1

  const entry = getEntryStore(id)
  const width = indent * 30 + 30 + 'px'

  const handleAdd = event => entry.addChild(event.detail)
  const handleAddCondition = event => entry.addCondition(event.detail)
</script>

{#if $entry.type === EntryType.Parent}
  {#each $entry.children as entryId (entryId)}
    <svelte:self id={entryId} indent={indent + 1} />
  {/each}
  <div class="container">
    <div style:width />
    <AddButton type={'entry'} on:click={handleAdd} />
  </div>
{:else if $entry.type === EntryType.Device}
  <div class="container">
    <RemoveButton {width} on:click={entry.remove}/>
    <MultiSelect label="Devices" type="controllable" bind:selected={$entry.devices} />
    <Toggle label="State" on="Turn On" off="Turn Off" bind:state={$entry.state} />
    <Select label="Brightness" type="brightness" bind:selected={$entry.brightness} />
  </div>
{:else if $entry.type === EntryType.Wait}
  <div class="container">
    <RemoveButton {width} on:click={entry.remove}/>
    <TextInput label="Wait" bind:text={$entry.wait} />
  </div>
{:else if $entry.type === EntryType.If}
  <div class="container">
    <RemoveButton {width} on:click={entry.remove}/>
    <div class="text">If</div>
    <div class="conditions">
      {#each $entry.conditions as condition, i (i)}
        <Condition bind:condition on:remove={() => entry.removeCondition(i)}/>
      {/each}
      <AddButton type={'conditions'} on:click={handleAddCondition} />
    </div>
  </div>
  <svelte:self id={$entry.seq1} {indent} />
{:else if $entry.type === EntryType.IfElse}
  <div class="container">
    <RemoveButton {width} on:click={entry.remove}/>
    <div class="text">If</div>
    <div class="conditions">
      {#each $entry.conditions as condition, i (i)}
        <Condition bind:condition on:remove={() => entry.removeCondition(i)}/>
      {/each}
      <AddButton type={'conditions'} on:click={handleAddCondition} />
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
    <RemoveButton {width} on:click={entry.remove}/>
    <div class="text">While</div>
    <div class="conditions">
      {#each $entry.conditions as condition, i (i)}
        <Condition bind:condition on:remove={() => entry.removeCondition(i)}/>
      {/each}
      <AddButton type={'conditions'} on:click={handleAddCondition} />
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

  .text {
    color: #fff
  }
</style>
