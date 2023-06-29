<script lang="ts">
  import InputContainer from './InputContainer.svelte'

  export let label: string
  export let on: string
  export let off: string
  export let state: boolean


  const handleClick = () => state = !state
</script>

<InputContainer active={true} {label} on:click={handleClick}>
  {state ? on : off}
</InputContainer>
