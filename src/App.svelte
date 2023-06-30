<script lang="ts">
  import Navbar from './components/Navbar.svelte'
  import Automations from './routes/Automations.svelte'
  import Dashboard from './routes/Dashboard.svelte'  
  import Login from './routes/Login.svelte';
  import {testDatabase} from './stores/database'
  import { getAuth, onAuthStateChanged } from "firebase/auth";

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
      testDatabase()
    } else {
      console.log("Not logged in")
  }
  })

  let page = location.pathname
</script>

<div>
  <Navbar bind:page />
  {#if page === '/'}
    <Dashboard />
  {:else if page === '/automations'}
    <Automations />
  {:else if page === '/login'}
    <Login />
  {/if}
</div>

<style>
</style>
