<script lang="ts">
  import { setDeviceBrightness, setDeviceState } from '../stores/websocket'
  import { createEventDispatcher } from 'svelte'
  import { getDeviceStore } from '../stores/deviceStore'
  import { DeviceType } from '../types/device.types'
  import { fade, fly } from 'svelte/transition'
  import { get } from 'svelte/store'
  import TextInput from './inputs/TextInput.svelte'
  import Select from './selects/Select.svelte'

  export let id: string

  const device = { ...get(getDeviceStore(id)) }

  const dispatch = createEventDispatcher()
  const close = () => dispatch('close')
  const save = () => console.log(device)
  const onState = () => setDeviceState(id, !device.state)

  const onBrightness = (e: Event) => {
    const brightness = parseInt((e.target as HTMLInputElement).value)
    device.text = brightness ? brightness + '%' : 'Off'
    device.state = !!brightness
  }

  const setBrightness = (e: Event) => {
    const brightness = parseInt((e.target as HTMLInputElement).value)
    device.text = brightness ? brightness + '%' : 'Off'
    device.state = !!brightness
    setDeviceBrightness(id, brightness)
  }
</script>

<div class="background" on:click={close} on:keypress={close} transition:fade={{ duration: 250 }} />

<div class="modal" role="dialog" aria-modal="true" in:fly={{ y: -100, duration: 500 }} out:fly={{ y: -50, duration: 500 }}>
  <div class="page">
    <div class="header">
      <div>{device.room + ' ' + device.name}</div>
      <div class="subheader">{device.text}</div>
    </div>

    {#if device.type === DeviceType.Dimmer}
      <input class="slider" type="range" min="0" max="100" step="5" bind:value={device.brightness} on:input={onBrightness} on:change={setBrightness} />

      {#if device.state}
        <svg class="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
          ><path
            d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"
          ></path></svg
        >
      {:else}
      <svg class="img3141" viewBox="0 0 640 512" width="640" height="512" xmlns="http://www.w3.org/2000/svg">
        <path d="M 554.161 404.755 L 434.6 315.3 C 440.911 306.027 447.17 297.69 452.42 291.71 C 479.54 260.77 495.96 220.32 495.96 175.91 C 495.96 78.71 417.2 0.81 320.86 0.81 C 246.1 0.227 188.9 42.1 161.5 101.3 L 116.461 63.184 C 105.991 55.012 90.971 56.819 82.761 67.257 C 74.589 77.697 76.412 92.787 86.834 100.957 L 523.644 441.646 C 528.961 445.955 534.161 447.655 538.461 447.655 C 545.586 447.655 552.631 444.496 557.361 438.465 C 566.461 428.055 564.561 412.955 554.161 404.755 Z M 396.8 285.7 L 200.2 131.6 C 216.1 85.94 259.2 48.19 319.1 48 C 390.6 48 448 105.4 448 175.1 C 448 206.07 436.76 235.96 416.36 259.23 C 410.2 267.1 403.5 275.1 396.8 285.7 Z M 305.9 336 L 272.68 336 C 264.643 319.03 254.84 302.7 244.99 288.26 L 148.1 212.3 C 154.422 242.28 167.2 269.55 187.58 291.77 C 204.11 310.61 229.92 350 239.8 383.22 C 239.831 383.47 239.862 383.736 239.894 384.001 L 367.194 384.004 L 305.9 336 Z M 240.1 454.3 C 240.1 460.597 241.975 466.73 245.444 471.98 L 262.584 497.67 C 267.834 505.545 279.754 511.95 289.224 511.95 L 350.884 511.95 C 360.322 511.95 372.244 505.549 377.494 497.67 L 394.574 471.99 C 397.512 467.552 399.922 459.62 399.922 454.29 L 400.042 415.93 L 239.1 415.93 L 240.1 454.3 Z" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)"/>
      </svg>
      {/if}
    {/if}
  </div>

  <div class="page">
    <TextInput label="Room" bind:text={device.room} />
    <TextInput label="Name" bind:text={device.name} />
    <Select label="Icon" selected={device.icon} type="icons" on:select={s => (device.icon = s.detail)} />
    <div class="controls">
      <button class="save" on:click={save}>Save</button>
    </div>
  </div>
</div>

<style>
  .img {
    height: 24px;
    width: 30px;
    position: fixed;
    top: 122px;
    margin-left: 2px;
    pointer-events: none;
    fill: var(--text-background);
  }

  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
  }

  input[type='range']::-webkit-slider-runnable-track {
    background: var(--background2);
    height: 48px;
    border-radius: 8px;
    overflow: hidden;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--tertiary1);
    border-radius: 8px;
    box-shadow: -208px 0 0 200px var(--tertiary1);
    height: 48px;
    width: 30px;
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .page {
    height: 160px;
    padding: 24px 16px 16px;
    gap: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 280px;
    transform: translate(-50%, -50%);
    background-color: var(--background1);
    border-radius: 15px;
    height: 200px;
    overflow: scroll;
  }

  .modal::-webkit-scrollbar {
    display: none;
  }

  .header {
    margin-bottom: 10px;
    text-align: center;
    font-size: large;
    color: #fff;
  }

  .subheader {
    font-size: medium;
    color: #ccc;
  }

  .controls {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }

  .save {
    all: unset;
    text-align: center;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: var(--tertiary1);
  }
</style>
