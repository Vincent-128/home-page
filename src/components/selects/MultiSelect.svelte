<script lang="ts">
  import InputContainer from "../inputs/InputContainer.svelte";
  import { allOptions, type Options as test } from "../../stores/optionStore";
  import { createEventDispatcher, onDestroy } from "svelte";
  import Options from "./Options.svelte";

  type ID = $$Generic<string | number>;

  export let selected: ID[];
  export let type: keyof test;
  export let label: string;

  let active = false;
  let showOptions = false;
  let options: { id: ID[]; text: string[] };

  const dispatch = createEventDispatcher();
  const unsubscribe = allOptions.subscribe((value) => (options = value[type]));
  onDestroy(unsubscribe);

  const onClick = () => (showOptions = true);
  const onOutClick = () => (showOptions = false);
  const onSelect = (e: CustomEvent) => () => {
    if (selected.includes(e.detail)) {
      dispatch(
        "select",
        selected.filter((s) => s !== e.detail),
      );
    } else {
      dispatch("select", [...selected, e.detail]);
    }
  };

  $: text =
    selected
      .map((s) => options[s])
      .sort()
      .join(", ") || "";
  $: active = showOptions || text !== "";
</script>

<InputContainer {active} {label} on:click={onClick}>
  <div class="text">{text}</div>
  <Options {options} {selected} {showOptions} on:outclick={onOutClick} on:select={onSelect} />
</InputContainer>

<style>
  .text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
