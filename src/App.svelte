<script lang="ts">
  import Navbar from './components/Navbar.svelte'
  import Automations from './routes/Automations.svelte'
  import Dashboard from './routes/Dashboard.svelte'  
  import {testDatabase} from './stores/database'

  testDatabase()

  let page = location.pathname
</script>

<div>
  <Navbar bind:page />
  {#if page === '/'}
    <Dashboard />
  {:else if page === '/automations'}
    <Automations />
  {/if}
</div>

<style>
</style>
