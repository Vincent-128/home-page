<script lang="ts">
  import Select from '../selects/Select.svelte'
  import Toggle from '../inputs/Toggle.svelte'
  import TextInput from '../inputs/TextInput.svelte'
  import { type Trigger, TriggerType } from '../../types/automation.types'

  export let trigger: Trigger

  const handleType = (e: CustomEvent<number>) => {
    const type = e.detail
    if (type === TriggerType.Device) trigger = { type, device: '', state: true }
    else if (type === TriggerType.Time) trigger = { type, time: '' }
    else trigger = { type, offset: '' }
  }
</script>

<div class="row">
  <Select label="Event" type="trigger" selected={trigger.type} on:select={handleType} />
  {#if trigger.type === TriggerType.Device}
    <Select bind:selected={trigger.device} type="all" label="Device" />
    <Toggle label="State" on="Turns On" off="Turns Off" bind:state={trigger.state} />
  {:else if trigger.type === TriggerType.Time}
    <TextInput label="Time" bind:text={trigger.time} />
  {:else if trigger.type === TriggerType.Sunrise}
    <TextInput label="Offset" bind:text={trigger.offset} />
  {:else if trigger.type === TriggerType.Sunset}
    <TextInput label="Offset" bind:text={trigger.offset} />
  {/if}
</div>

<style>
  .row {
    display: flex;
    gap: 10px;
    align-items: center;
  }
</style>
