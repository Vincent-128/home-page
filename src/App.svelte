<script lang="ts">
  import { loggedIn, page } from './stores/appStore'
  import Automations from './pages/Automations.svelte'
  import Dashboard from './pages/Dashboard.svelte'
  import Sidebar from './components/Sidebar.svelte'
  import Login from './pages/Login.svelte'
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
    padding: 0 20px;
  }
</style>
