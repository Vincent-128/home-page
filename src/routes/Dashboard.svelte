<script lang="ts">
  import DeviceCard from '../components/DeviceCard.svelte'
    import { layout } from '../stores/appStore'

</script>

<div class="dashboard">
  {#each $layout as id, i (id)}
    <DeviceCard {id} />
  {/each}
</div>


<style>
  .dashboard {
    gap: 15px;
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  }
</style>
