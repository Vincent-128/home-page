<script lang="ts">
  import TextInput from './TextInput.svelte'
  import Select from './Select.svelte'
  import { createEventDispatcher } from 'svelte'
  import { fade, fly } from 'svelte/transition'
  import type { DeviceInfo } from '../types'
  import { updateDevices } from '../stores/database'

  export let info: DeviceInfo
  let slider
  let room = info.room
  let name = info.name
  let icon = info.icon

  const dispatch = createEventDispatcher()
  const close = () => dispatch('close')
  const save = () => updateDevices({ ...info, room, name, icon })
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

  <div>
    <input class="slider" type="range" min="0" max="20" step="1"/>
  </div>
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
    width: 15rem;
    
  }

  input[type='range']::-webkit-slider-runnable-track {
    background: #053a5f;
    height: 20px;
    border-radius: 5px;
    overflow: hidden;
  }

  input[type="range"]::-webkit-slider-thumb {
   -webkit-appearance: none;
   appearance: none;
   background-color: #5cd5eb;
   height: 20px;
   width: 1rem;    
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
