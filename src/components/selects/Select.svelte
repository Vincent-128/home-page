<script lang="ts">
  import { getOptions, type OptionTypes } from '../../stores/optionStore'
  import { createEventDispatcher, onDestroy } from 'svelte'
  import InputContainer from '../inputs/InputContainer.svelte'
  import Options from './Options.svelte'

  type ID = $$Generic<string | number>

  export let label: string
  export let type: OptionTypes
  export let selected: ID

  let active = false
  let showOptions = false
  let options: [ID, string][]

  const dispatch = createEventDispatcher<{ select: ID }>()
  const unsubscribe = getOptions(type).subscribe(o => (options = o as [ID, string][]))

  const onClick = () => (showOptions = true)
  const onOutClick = () => (showOptions = false)

  const onSelect = (e: CustomEvent<ID>) => {
    dispatch('select', e.detail)
    selected = e.detail
    showOptions = false
  }

  $: text = options.find(o => o[0] === selected)?.[1] || ''
  $: active = showOptions || text !== ''

  onDestroy(unsubscribe)
</script>

<InputContainer {active} {label} on:click={onClick}>
  <div class="text">{text}</div>
  <Options {options} {showOptions} selected={[selected]} on:select={onSelect} on:outclick={onOutClick} />
</InputContainer>

<style>
  .text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
