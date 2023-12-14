<script lang="ts">
  import Icon from './Icon.svelte'
  import Modal from './Modal.svelte'
  import { sendMessage } from '../../stores/database'
  import { getDeviceStore, isControllable } from '../../stores/deviceStore'
  import { MessageType } from '../../types'

  export let id: string
  
  let showModal = false
  const store = getDeviceStore(id)

  const primaryClick = () => {
    if (isControllable($store.type)) {
      sendMessage({ event: MessageType.Toggle, id })
    }
  }

  const secondaryClick = () => (showModal = true)
</script>

<button
  class="container"
  class:state={$store.state}
  on:click={primaryClick}
  on:dragstart
  on:dragenter
  on:dragleave
>
  <button class="circle" on:click|stopPropagation={secondaryClick}>
    <Icon icon={$store.icon} state={$store.state} />
  </button>
  <div class="text">
    <span>{$store.room}</span><br /><span>{$store.name}</span>
    <br />
    <span class="state">{$store.text}</span>
  </div>
</button>

{#if showModal}
  <Modal {id} info={$store} on:close={() => (showModal = false)} />
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
