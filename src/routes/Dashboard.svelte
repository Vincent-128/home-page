<script lang="ts">
  import DeviceCard from '../components/DeviceCard.svelte'
  import { user } from '../stores/userStore'
</script>

<div class="dashboard">
  {#each $user.layout as id (id)}
    <DeviceCard {id} />
  {/each}
</div>

<style>
  .dashboard {
    gap: 15px;
    padding: 10px;
    margin: auto;
    display: grid;
    max-width: 1200px;
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  }
</style>
