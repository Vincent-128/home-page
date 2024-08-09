<script lang="ts">
  import State from './State.svelte'
  import Range from './Range.svelte'
  import Operator from './Operator.svelte'
  import { type Condition, ConditionType } from '../../types/automation.types'

  export let condition: Condition
</script>

<div class="condition">
  {#if condition.type === ConditionType.State}
    <State state={condition} />
  {:else if condition.type === ConditionType.Range}
    <Range range={condition} />
  {:else}
    <Operator operator={condition} />
  {/if}
</div>

<style>
  .condition {
    border-radius: 20px;
    background-color: var(--primary2);
    color: #fff;
    display: flex;
    align-items: center;
    padding: 3px;
    position: relative;
  }
</style>
