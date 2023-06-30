<script lang="ts">
  import Navbar from './components/Navbar.svelte'
  import Automations from './routes/Automations.svelte'
  import Dashboard from './routes/Dashboard.svelte'  
  import Login from './routes/Login.svelte';
  import {testDatabase} from './stores/database'
  import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
  
  let page = location.pathname
  let loggedIn = true

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    loggedIn = !!user
    if (loggedIn) {
      testDatabase()
      console.log('Logged in')
    } else {
      console.log('Logged out')
    }
  })

</script>

<div>
  <Navbar bind:page />        
  {#if !loggedIn}
    <Login />
  {:else if page === '/automations'}
    <Automations />
  {:else}
    <Dashboard />
  {/if}
</div>

<style>
</style>
