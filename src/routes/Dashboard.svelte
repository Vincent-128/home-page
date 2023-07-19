<script lang="ts">
  import DeviceCard from '../components/DeviceCard.svelte'
  import { user } from '../stores/userStore'

  let draggable = false

  const click = () => (draggable = !draggable)

  const drop = e => {
    console.log('drop')
    e.preventDefault()
  }

  const over = e => {
    e.preventDefault()
  }

  const start = () => console.log('start')
  const enter = () => console.log('enter')
  const leave = () => console.log('leave')
</script>

<div class="dashboard" on:drop={drop} on:dragover={over}>
  {#each $user.layout as id, i (id)}
    <DeviceCard
      {id}
      {draggable}
      on:dragstart={e => start()}
      on:dragenter={e => enter()}
      on:dragleave={e => leave()}
    />
  {/each}
</div>

{#if draggable}
<div class="dashboard" on:drop={drop} on:dragover={over}>
  {#each $user.layout as id, i (id)}
    <DeviceCard
      {id}
      {draggable}
      on:dragstart={e => start()}
      on:dragenter={e => enter()}
      on:dragleave={e => leave()}
    />
  {/each}
</div>
{/if}

<!-- <button on:click={click} /> -->

<style>
  .dashboard {
    gap: 15px;
    padding: 10px;
    margin: auto;
    display: grid;
    max-width: 1200px;
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  }

  button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    height: 30px;
    width: 30px;
  }
</style>
