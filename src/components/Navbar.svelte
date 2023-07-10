<script lang="ts">
  import { loggedIn, logout, page } from '../stores/appStore'

  window.addEventListener('popstate', () => page.set(location.pathname))

  const handlePage = (url: string) => () => {
    if (url !== location.pathname) {
      history.pushState(null, null, url)
      page.set(url)
    }
  }
</script>

<div class="navbar">
  <a class="title" on:click|preventDefault={handlePage('/')} href="/">Home</a>
  <div class="spacer" />
  {#if loggedIn}
    <a class="link" on:click|preventDefault={logout} href="/logout">Logout</a>
  {/if}
  <a class="link" on:click|preventDefault={handlePage('/')} href="/">Dashboard</a>
  <a class="link" on:click|preventDefault={handlePage('/automations')} href="/automations">Automations</a>
</div>

<style>
  .navbar {
    gap: 10px;
    display: flex;
    padding: 10px 20px;
    align-items: center;
    background-color: var(--main-700);
  }

  .title {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
  }

  .spacer {
    flex-grow: 1;
  }

  .link {
    color: #fff;
    padding: 8px 12px;
    border-radius: 10px;
    text-decoration: none;
  }

  .link:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>
