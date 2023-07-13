<script lang="ts">
  import TextInput from "./TextInput.svelte";
  import Select from "./Select.svelte";
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import {
    DeviceType,
    type DeviceInfo,
    type BaseInfo,
    MessageType,
  } from "../types";
  import { getDevice } from "../stores/deviceStore";
  import Toggle from "./Toggle.svelte";
  import { sendMessage, updateDevices } from "../stores/database";

  export let info: DeviceInfo;
  let outlets: number = 1;

  interface T extends BaseInfo {
    combine?: boolean;
    outlets?: string[];
    brightness?: number;
  }

  const device = {
    type: info.type,
    id: new Array(5).fill(""),
    name: new Array(5).fill(""),
    room: new Array(5).fill(""),
    icon: new Array(5),
    combine: false,
    outlets: [],
  };

  if ("combine" in info) {
    const test = info.outlets.map(getDevice);
    test.forEach((t, i) => {
      device.id[i] = t.id;
      device.name[i] = t.name;
      device.room[i] = t.room;
      device.icon[i] = t.icon;
    });
    device.combine = info.combine;
    device.outlets = info.outlets;
    outlets = info.outlets.length;
  } else {
    device.id[0] = info.id;
    device.name[0] = info.name;
    device.room[0] = info.room;
    device.icon[0] = info.icon;
  }

  const onType = (e: CustomEvent<any>) => {
    const type = parseInt(e.detail);
    device.type = type;
    outlets = type === DeviceType.MultiOutlet ? 2 : 1;
  };

  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");

  const onSave = () => {
    const deviceInfo: DeviceInfo[] = [];

    for (let i = 0; i < outlets; i++) {
      const test: T = {
        id: device.id[i],
        name: device.name[i],
        room: device.room[i],
        icon: device.icon[i],
        type: device.type,
        state: false,
        text: "Off",
      };

      if (device.type === DeviceType.MultiOutlet) {
        test.combine = device.combine;
        test.outlets = device.id.slice(0, outlets);
      } else if (device.type === DeviceType.Dimmer) {
        test.brightness = 100;
      }
      deviceInfo.push(test);
    }
    console.log(deviceInfo);
    updateDevices(deviceInfo);
    // sendMessage({ event: MessageType.UpdateDevice, data: deviceInfo })
  };
</script>

<div
  class="background"
  on:click={close}
  on:keypress={close}
  transition:fade={{ duration: 250 }}
/>

<div
  class="modal"
  role="dialog"
  aria-modal="true"
  in:fly={{ y: -100, duration: 500 }}
  out:fly={{ y: -50, duration: 500 }}
>
  <div class="header">
    <button class="close" on:click={close}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path
          d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
        />
      </svg>
    </button>
    <div class="headertext">{info.room + " " + info.name}</div>
  </div>

  <div>
    <input type="range" />
  </div>

  <div class="row">
    <Select
      label="Type"
      selected={device.type}
      on:select={onType}
      type="type"
    />
    {#if device.type === DeviceType.MultiOutlet}
      <Select
        label="Outlets"
        selected={outlets}
        on:select={s => (outlets = parseInt(s.detail))}
        type="numbers"
      />
      <Toggle label="Combine" on="Yes" off="No" bind:state={device.combine} />
    {/if}
  </div>
  {#each new Array(outlets).fill(0) as _, i}
    <div class="row">
      <!-- <TextInput label="Id" bind:text={device.id[i]} /> -->
      <TextInput label="Room" bind:text={device.room[i]} />
      <TextInput label="Name" bind:text={device.name[i]} />
      <Select
        label="Icon"
        selected={device.icon[i]}
        on:select={s => (device.icon[i] = parseInt(s.detail))}
        type="icons"
      />
    </div>
  {/each}
  <div class="controls">
    <button class="save" on:click={onSave}>Save</button>
  </div>
</div>

<style>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4em);
    max-width: 800px;
    max-height: calc(100vh - 4em);
    transform: translate(-50%, -50%);
    background-color: var(--background1);
    border-radius: 15px;
    padding: 10px;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .close {
    all: unset;
    height: 18px;
    width: 18px;
    padding: 3px;
    background-color: #ccc;
    border-radius: 30px;
  }

  .close > svg {
    height: 100%;
    width: 100%;
  }

  .row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
    align-items: center;
    padding-top: 10px;
    margin-left: 10px;
    row-gap: 10px;
  }

  .headertext {
    font-size: large;
    color: #fff;
    flex-grow: 1;
    text-align: center;
    padding-right: 30px;
  }

  .controls {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    bottom: 18px;
    right: 18px;
    padding-top: 10px;
  }

  .save {
    all: unset;
    text-align: center;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: var(--tertiary1);
  }
</style>
