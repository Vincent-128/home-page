<script lang="ts">
    import type { OperatorCondition } from "../../types";

    export let operator: OperatorCondition;
</script>

<button class="text" on:click={() => (operator.isAnd = !operator.isAnd)}>
    {operator.isAnd ? "And" : "Or"}
</button>

<style>
    .text {
        all: unset;
        line-height: 1em;
        font-size: 1em;
        border-radius: 20px;
        padding: 4px 4px;
    }

    .text:hover {
        background-color: var(--primary3);
    }
</style>
