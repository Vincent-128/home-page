<script lang="ts">
import TextInput from "../components/TextInput.svelte"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

    let email = ""
    let password = ""

    const login = async () => {
        const auth = getAuth();
        try {
            const cedential = await signInWithEmailAndPassword(auth, email, password)
            console.log(cedential.user)
        } catch (error) {
            console.log(error.code, error.message)
        }
    }
</script>

<div>
    <TextInput label="Username" bind:text={email}/>
    <TextInput label="Password" bind:text={password}/>
    <button on:click={login}>Login</button>
</div>

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
</style>