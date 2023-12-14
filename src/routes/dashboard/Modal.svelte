<script lang="ts">
  import TextInput from '../../components/inputs/TextInput.svelte'
  import Select from '../../components/selects/Select.svelte'
  import { createEventDispatcher } from 'svelte'
  import { fade, fly } from 'svelte/transition'
  import { DeviceType, MessageType, type DeviceInfo } from '../../types'
  import { sendMessage, updateDevices } from '../../stores/database'

export let id: string
  export let info: DeviceInfo

  let room = info.room
  let name = info.name
  let icon = info.icon
  let brightness = 0

  if ('brightness' in info) {
    brightness = info.state ? info.brightness / 5 : 0
  }

  const dispatch = createEventDispatcher()
  const close = () => dispatch('close')
  const save = () => updateDevices(id, {...info, room, name, icon })
  const test = () => {
    if (brightness === 0) {
      sendMessage({
        event: MessageType.Set,
id,
        data: { state: false, brightness: 5 },
      })
    } else {
      sendMessage({
        event: MessageType.Set,
        id,
        data: { state: true, brightness: brightness * 5 },
      })
    }
  }
</script>

<div
  class="background"
  on:click={close}
  on:keypress={close}
  transition:fade={{ duration: 250 }}
/>

<div
  class="modal"
  role="dialog"
  aria-modal="true"
  in:fly={{ y: -100, duration: 500 }}
  out:fly={{ y: -50, duration: 500 }}
>
  <div class="header">
    <div>{info.room + ' ' + info.name}</div>
    <div class="subheader">{info.text}</div>
  </div>

  {#if info.type === DeviceType.Dimmer}
    <input
      class="slider"
      type="range"
      min="0"
      max="20"
      step="1"
      bind:value={brightness}
      on:change={test}
    />
  {/if}

  <TextInput label="Room" bind:text={room} />
  <TextInput label="Name" bind:text={name} />
  <Select
    label="Icon"
    selected={icon}
    type="icons"
    on:select={s => (icon = parseInt(s.detail))}
  />
  <div class="controls">
    <button class="save" on:click={save}>Save</button>
  </div>
</div>

<style>
  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
  }

  input[type='range']::-webkit-slider-runnable-track {
    background: var(--background2);
    height: 20px;
    border-radius: 5px;
    overflow: hidden;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--tertiary1);
    border-radius: 5px;
    box-shadow: -205px 0 0 200px var(--tertiary1);
    height: 20px;
    width: 10px;
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 250px;
    transform: translate(-50%, -50%);
    background-color: var(--background1);
    border-radius: 15px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .header {
    margin-bottom: 10px;
    text-align: center;
    font-size: large;
    color: #fff;
  }

  .subheader {
    font-size: medium;
    color: #ccc;
  }

  .controls {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }

  .save {
    all: unset;
    text-align: center;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: var(--tertiary1);
  }
</style>
