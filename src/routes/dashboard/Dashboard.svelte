<script lang="ts">
  import DeviceCard from './DeviceCard.svelte'
    import { layout } from '../../stores/appStore'

</script>

<div class="dashboard">
  {#each $layout as id, i (id)}
    <DeviceCard {id} />
  {/each}
</div>


<style>
  .dashboard {
    gap: 15px;
    margin: 50px auto 20px auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
    max-width: 1200px;
  }
</style>
