<script lang="ts">
  import InputContainer from './InputContainer.svelte'

  export let text: string
  export let label: string
  export let type = 'text'

  let active = (text.length || 0) > 0

  const handleChange = (event: any) => (text = event.target.value)
  const setActive = (state: boolean) => () => (active = state || text.length > 0)
</script>

<InputContainer {active} {label}>
  <input class="text" {type} value={text} on:focus={setActive(true)} on:blur={setActive(false)} on:change={handleChange} />
</InputContainer>

<style>
  .text {
    all: unset;
    height: 100%;
    width: 100%;
  }
</style>
