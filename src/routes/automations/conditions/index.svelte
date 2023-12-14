<script lang="ts">
    import { ConditionType, type Condition} from '../../types'
    import State from './State.svelte';
    import Range from './Range.svelte'
    import Operator from './Operator.svelte'
  
    export let condition: Condition

  </script>
  
  <div class="condition">
    {#if condition.type === ConditionType.State}
      <State state={condition}/>
    {:else if condition.type === ConditionType.Range}
      <Range range={condition}/>
    {:else}
      <Operator operator={condition}/>
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
