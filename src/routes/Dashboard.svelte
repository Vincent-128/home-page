<script lang="ts">
  import DeviceCard from '../components/DeviceCard.svelte'
  import { user } from '../stores/userStore'
  let show = false

  const click = () => {
    show = !show
  }
</script>

<div class="dashboard">
  {#each $user.layout as id (id)}
    <DeviceCard {id} draggable={show}/>
  {/each}
</div>

{#if show}
  <div class="dashboard">
    {#each $user.layout as id (id)}
      <DeviceCard {id} draggable={show}/>
    {/each}
  </div>
{/if}

<button on:click={click} />

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
