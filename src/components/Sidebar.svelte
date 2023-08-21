<script lang="ts">
  import { loggedIn, logout, page } from '../stores/appStore'
  import { options } from '../stores/optionStore'

  window.addEventListener('popstate', () => page.set(location.pathname))

  const handlePage = (e: MouseEvent) => {
    e.preventDefault()
    // console.log(e.target.href)
    // if (url !== location.pathname) {
    //   history.pushState(null, null, url)
    //   page.set(url)
    // }
  }
</script>

<div class="sidebar">
  <a class="link" on:click={handlePage} href="/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path
        d="M303.5 5.7c-9-7.6-22.1-7.6-31.1 0l-264 224c-10.1 8.6-11.3 23.7-2.8 33.8s23.7 11.3 33.8 2.8L64 245.5V432c0 44.2 35.8 80 80 80H432c44.2 0 80-35.8 80-80V245.5l24.5 20.8c10.1 8.6 25.3 7.3 33.8-2.8s7.3-25.3-2.8-33.8l-264-224zM112 432V204.8L288 55.5 464 204.8V432c0 17.7-14.3 32-32 32H384V312c0-22.1-17.9-40-40-40H232c-22.1 0-40 17.9-40 40V464H144c-17.7 0-32-14.3-32-32zm128 32V320h96V464H240z"
      />
    </svg>
    <div>Home</div>
  </a>
  <a class="link" on:click={handlePage} href="/automations">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
      />
    </svg>
    <div>Automations</div>
  </a>
  <div class="title">Rooms</div>
  {#each Object.entries($options.rooms) as [link, room]}
    <a class="link" on:click={handlePage} href={`/${link}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M128 288C114.7 288 104 277.3 104 264V152C104 138.7 114.7 128 128 128C141.3 128 152 138.7 152 152V264C152 277.3 141.3 288 128 288zM296 152C296 138.7 306.7 128 320 128C333.3 128 344 138.7 344 152V328C344 341.3 333.3 352 320 352C306.7 352 296 341.3 296 328V152zM224 256C210.7 256 200 245.3 200 232V152C200 138.7 210.7 128 224 128C237.3 128 248 138.7 248 152V232C248 245.3 237.3 256 224 256zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432z"
        />
      </svg>
      <div>{room}</div>
    </a>
  {/each}

  <div class="spacer" />
  {#if loggedIn}
    <a class="link" on:click={logout} href="/logout">Logout</a>
  {/if}
</div>

<style>
  .sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .sidebar .link:first-child {
    margin-top: 10px;
  }
  .sidebar .link:last-child {
    margin-bottom: 10px;
  }
  .link {
    color: #fff;
    padding: 10px 12px;
    margin: 0 10px;
    border-radius: 10px;
    text-decoration: none;
    display: grid;
    grid-template-columns: 20px 180px;
    gap: 10px;
  }
  .link:hover {
    background-color: #00000030;
  }
  .title {
    color: #fff;
    font-size: small;
    margin-top: 20px;
    padding: 10px;
    margin: 0 5px;
  }
  svg {
    width: 100%;
    fill: #fff;
  }
  .spacer {
    flex-grow: 1;
  }
</style>
