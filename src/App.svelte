<script lang="ts">
  import Navbar from './components/Navbar.svelte'
  import Automations from './routes/Automations.svelte'
  import Dashboard from './routes/Dashboard.svelte'
  import Login from './routes/Login.svelte'
  import { loggedIn, page } from './stores/appStore'
</script>

<div>
  <Navbar />
  {#if !$loggedIn}
    <Login />
  {:else if $page === '/automations'}
    <Automations />
  {:else}
    <Dashboard />
  {/if}
</div>

<style>
</style>
