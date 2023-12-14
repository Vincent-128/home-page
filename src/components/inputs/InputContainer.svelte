<script lang="ts">
  export let active: boolean
  export let label: string

</script>

<button class="container" type="button" class:active on:click>
  <div class="label" class:active>{label}</div>
  <slot />
</button>

<style>
  .container {
    all: unset;
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid var(--background5);
    border-radius: 8px;
    height: 30px;
    padding: 0 8px;
    max-width: 235px;
    min-width: 80px;
    color: var(--text-background);
  }

  .label {
    pointer-events: none;
  }

  .label {
    position: absolute;
    transition: all 0.25s;
    background-color: var(--background1);
    line-height: 1em;
    padding: 0 5px;
    left: 3px;
    color: var(--background5);
  }

  .label.active {
    color: var(--background5);
    transform: scale(0.8) translate(-4px, -20px);
  }
</style>
