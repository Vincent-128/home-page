<script lang="ts">
  import InputContainer from './InputContainer.svelte'

  export let text: string
  export let label: string

  let active = (text.length || 0) > 0

  const handleChange = (event: any) => (text = event.target.value)
  const setActive = (state: boolean) => () => (active = state || text.length)
</script>

<InputContainer {active} {label}>
  <input class='text' type='text' value={text} on:focus={setActive(true)} on:blur={setActive(false)} on:change={handleChange} />
</InputContainer>

<style>
  .text {
    all: unset;
    height: 100%;
    width: 100%
  }
</style>
