<script lang="ts">
    import { clickAway } from "../../utils";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    type ID = $$Generic<string | number>;
    type S = ID[];

    export let selected: S;
    let options: [ID, string | number][];

    const handleOption = (id: ID) => () => {
        dispatch("select", id);
    };
</script>

<div class="options" use:clickAway on:outclick>
    {#each options as [id, text] (id)}
        <button class="option" on:click|stopPropagation={handleOption(id)}>
            <div class="text">{text}</div>
            {#if selected.includes(id)}
                <svg
                    class="check"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                    />
                </svg>
            {/if}
        </button>
    {/each}
</div>
