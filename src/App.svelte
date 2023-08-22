<script lang="ts">
  import Automations from './routes/Automations.svelte'
  import Dashboard from './routes/Dashboard.svelte'
  import Login from './routes/Login.svelte'
  import { loggedIn, page } from './stores/appStore'
  import Sidebar from './components/Sidebar.svelte'
</script>

<div class="container">
  <Sidebar />
  <main>
    {#if !$loggedIn}
      <Login />
    {:else if $page === '/automations'}
      <Automations />
    {:else}
      <Dashboard />
    {/if}
  </main>
</div>

<style>
  .container {
    position: fixed;
    align-items: start;
    display: grid;
    grid-template-columns: 260px 1fr;
    height: 100vh;
    width: 100vw;
  }
  main {
    height: 100vh;
    overflow-y: auto;
  }
</style>
