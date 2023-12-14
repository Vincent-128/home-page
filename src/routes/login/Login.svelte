<script lang="ts">
  import TextInput from '../../components/inputs/TextInput.svelte'
  import { login } from '../../stores/appStore'

  let email = ''
  let password = ''

  const onSubmit = (e: any) => {
    e.preventDefault()
    login(email, password)
  }
</script>

<form class="container" on:submit={onSubmit}>
  <TextInput label="Username" bind:text={email} />
  <TextInput label="Password" type="password" bind:text={password} />
  <button type="submit">Login</button>
</form>

<style>
  button {
    all: unset;
    text-align: center;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: var(--tertiary1);
  }

  button:active {
    background-color: var(--tertiary2);
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 18px;
    background-color: var(--background1);
    border-radius: 12px;
    gap: 8px;
    width: 240px;
    margin: 50px auto 0 auto;
  }
</style>
