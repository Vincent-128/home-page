<script lang="ts">
  import Entry from './Entry.svelte'
  import Weekdays from './Weekdays.svelte'
  import Trigger from './Trigger.svelte'
  import { getAutomationStore } from '../stores/automationStore.js'
  export let id: string

  const automation = getAutomationStore(id)

  const handleEnabled = () => {
    $automation.enabled = !$automation.enabled
  }
</script>

<div class="container">
  <div class="title">Event</div>
  <Trigger bind:trigger={$automation.trigger} />
  <div class="title">Weekdays</div>
  <Weekdays bind:weekdays={$automation.weekdays} />
  <div class="title">Sequence</div>
  <Entry id={$automation.sequence} />
  <div class="controls">
    <button class="enable" on:click={handleEnabled}>{$automation.enabled ? 'Enabled' : 'Disabled'}</button>
    <button class="red" on:click={automation.remove}>Delete</button>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    padding: 18px;
    background-color: var(--background1);
    border-radius: 12px;
    gap: 8px;
    position: relative;
  }
  .title {
    font-size: 1.1em;
    line-height: 1em;
    color: var(--text-background);
    border-bottom: 1px solid var(--background4);
    padding: 4px 0;
  }

  .controls {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    position: absolute;
    bottom: 18px;
    right: 18px;
  }

  button {
    all: unset;
    width: 70px;
    text-align: center;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: var(--tertiary1);
  }

  button:active {
    background-color: var(--tertiary2);
  }

  button.red {
    background-color: var(--error1);
  }

  button.red:active {
    background-color: var(--error2);
  }
</style>
