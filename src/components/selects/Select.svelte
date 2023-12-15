<script lang="ts">
  import InputContainer from "../inputs/InputContainer.svelte";
  import { options as o, type Options as test } from "../../stores/optionStore";
  import { createEventDispatcher, onDestroy } from "svelte";
  import Options from "./Options.svelte";

  export let label: string;
  export let type: keyof test;
  export let selected: number | string;

  let active = false;
  let showOptions = false;
  let options: [string | number, string][];

  const dispatch = createEventDispatcher();
  const unsubscribe = o.subscribe((value) => (options = value[type]));
  onDestroy(unsubscribe);


  const onSelect = (e: CustomEvent) => {
    dispatch("select", e.detail);
    showOptions = false;
  };

  const onOutClick = () => {
    showOptions = false;
  };

  const onClick = () => {
    showOptions = true;
  };

  $: text = options[selected] || "";
  $: active = showOptions || text !== "";
</script>

<InputContainer {active} {label} on:click={onClick}>
  <div class="text">{text}</div>
  <Options
    {showOptions}
    selected={[selected]}
    on:select={onSelect}
    on:outclick={onOutClick}
  />
</InputContainer>

<style>
  .text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
