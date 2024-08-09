<script lang="ts">
  import { getDeviceStore } from '../stores/deviceStore'
  import type { Device } from '../types/device.types'
  import { onDestroy } from 'svelte'
  import DeviceModal from './DeviceModal.svelte'
  import Icon from './Icon.svelte'

  export let id: string

  let device: Device
  let showModal = false

  const unsubscribe = getDeviceStore(id).subscribe(value => (device = value))

  const primaryClick = () => console.log('primaryClick')

  const secondaryClick = () => (showModal = true)

  onDestroy(unsubscribe)
</script>

<button class="container" class:state={device.state} on:click={primaryClick}>
  <button class="circle" on:click|stopPropagation={secondaryClick}>
    <Icon icon={device.icon} state={device.state} />
  </button>
  <div class="text">
    <span>{device.room}</span>
    <br />
    <span>{device.name}</span>
    <br />
    <span class="state">{device.text}</span>
  </div>
</button>

{#if showModal}
  <DeviceModal {id} on:close={() => (showModal = false)} />
{/if}

<style>
  .container {
    all: unset;
    border-radius: 12px;
    padding: 8px 8px;
    gap: 8px;
    display: flex;
    align-items: center;
    background-color: var(--background1);
    user-select: none;
  }

  .container div {
    pointer-events: none;
    user-select: none;
  }

  .circle {
    all: unset;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: var(--background3);
    flex-shrink: 0;
  }

  .circle > :global(svg) {
    width: 25px;
    height: 25px;
    pointer-events: none;
    user-select: none;
  }

  .text {
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.875rem;
    color: var(--text-background);
    line-height: 1rem;
    /* font-family: 'JetBrains'; */
  }

  .state {
    color: #999;
  }

  .state.container {
    background-color: var(--background5);
  }

  .state > .circle {
    background-color: var(--secondary1);
  }
</style>
