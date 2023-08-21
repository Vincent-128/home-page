<script lang="ts">
  import { addAutomation, automationIds, getAutomations } from '../stores/automationStore'
  import { getEntries } from '../stores/entryStore'
  import Automation from '../components/Automation.svelte'
  import { updateAutomations, updateEntries } from '../stores/database'

  const saveAutomations = () => {
    updateAutomations(getAutomations())
    updateEntries(getEntries())
  }
</script>

<div class="container">
  {#each $automationIds as id (id)}
    <Automation {id} />
  {/each}
  <div class="controls">
    <button on:click={addAutomation}>New Automation</button>
    <button on:click={saveAutomations}>Save</button>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px;
  }

  .controls {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    bottom: 18px;
    right: 18px;
  }

  button {
    all: unset;
    text-align: center;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: var(--tertiary1);
  }

  button:active {
    background-color: var(--tertiary2);
  }
</style>
