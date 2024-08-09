<script lang="ts">
  import { addAutomation, automationIds } from '../stores/automationStore'
  import Automation from '../components/Automation.svelte'

  const saveAutomations = () => {}
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
    gap: 20px;
    margin: 50px auto 20px auto;
    max-width: 900px;
  }

  .controls {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
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
