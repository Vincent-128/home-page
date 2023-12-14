<script>
  import { crossfade } from 'svelte/transition'
  import { flip } from 'svelte/animate'

  let data = [
    ['React', 'Angular', 'Solid', 'Rails', 'Express', 'Flask', 'VPS'],
    ['Svelte', 'SvelteKit'],
  ]

  const [send, receive] = crossfade({})

  let id = null
  let zoneIndex = null
  let itemIndex = null

  const start = item => (id = item)
  const enter = index => (itemIndex = index)
  const leave = () => (itemIndex = null)

  const drop = e => {
    e.preventDefault()
    data[0] = data[0].filter(i => i !== id)
    data[1] = data[1].filter(i => i !== id)
    if (itemIndex === null) {
      data[zoneIndex] = [...data[zoneIndex], id]
    } else {
      data[zoneIndex] = [
        ...data[zoneIndex].slice(0, itemIndex),
        id,
        ...data[zoneIndex].slice(itemIndex),
      ]
    }
  }

  const over = (e, index) => {
    e.preventDefault()
    zoneIndex = index
  }
</script>

<div class="zone" on:drop={drop} on:dragover={e => over(e, 0)}>
  {#each data[0] as item, j (item)}
    <div
      class="item"
      draggable={true}
      in:receive={{ key: item }}
      out:send={{ key: item }}
      animate:flip={{ duration: 250 }}
      on:dragstart={e => start(item)}
      on:dragenter={e => enter(j)}
      on:dragleave={e => leave()}
    >
      {item}
    </div>
  {/each}
</div>

<div class="zone" on:drop={drop} on:dragover={e => over(e, 1)}>
  {#each data[1] as item, j (item)}
    <div
      class="item"
      draggable={true}
      in:receive={{ key: item }}
      out:send={{ key: item }}
      animate:flip={{ duration: 250 }}
      on:dragstart={e => start(item)}
      on:dragenter={e => enter(j)}
      on:dragleave={e => leave()}
    >
      {item}
    </div>
  {/each}
</div>

<style>
  .zone {
    gap: 15px;
    padding: 10px;
    margin: 50px auto;
    display: grid;
    max-width: 1200px;
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  }
  .item {
    display: inline; /* required for flip to work */
    background-color: lightgray;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
    padding: 10px;
  }

  .item:hover {
    background: orange;
    color: white;
  }
</style>
