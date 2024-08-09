<script lang="ts">
  import { getOptions, type OptionTypes } from '../../stores/optionStore'
  import { createEventDispatcher, onDestroy } from 'svelte'
  import InputContainer from '../inputs/InputContainer.svelte'
  import Options from './Options.svelte'

  type ID = $$Generic<string | number>

  export let label: string
  export let type: OptionTypes
  export let selected: ID[]

  let active = false
  let showOptions = false
  let options: [ID, string][]

  const dispatch = createEventDispatcher<{ select: ID[] }>()
  const unsubscribe = getOptions(type).subscribe(o => (options = o as [ID, string][]))

  const onClick = () => (showOptions = true)
  const onOutClick = () => (showOptions = false)

  const onSelect = (e: CustomEvent<ID>) => {
    if (selected.includes(e.detail)) {
      selected = selected.filter(s => s !== e.detail)
    } else {
      selected = [...selected, e.detail]
    }
    dispatch('select', selected)
  }

  $: text = options.filter(o => selected.includes(o[0])).map(o => o[1]).join(', ')
  $: active = showOptions || text !== ''

  onDestroy(unsubscribe)
</script>

<InputContainer {active} {label} on:click={onClick}>
  <div class="text">{text}</div>
  <Options {options} {showOptions} {selected} on:outclick={onOutClick} on:select={onSelect} />
</InputContainer>

<style>
  .text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
