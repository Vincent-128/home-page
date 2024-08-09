import { get, writable, type Writable } from 'svelte/store'
import { DeviceType, type Device, type DeviceInfo, type DeviceState, Icon } from '../types/device.types'
import { setDeviceOptions } from './optionStore'


export interface DeviceStore extends Writable<Device> {
  updateState: (state: DeviceState) => void
}

export const allDeviceStore: Record<string, DeviceStore> = {}

const createDeviceStore = (info: DeviceInfo, state: DeviceState): DeviceStore => {
  const { subscribe, set, update } = writable<Device>({ ...info, ...state })

  const updateState = (state: DeviceState) => {
    update(d => ({ ...d, ...state }))
  }

  return { subscribe, set, update, updateState }
}


export const initAllDeviceStore = (info: Record<string, DeviceInfo>, state: Record<string, DeviceState>) => {
  for (let id in info) {
    allDeviceStore[id] = createDeviceStore(info[id], state[id])
  }
  setDeviceOptions(info)
}

export const updateDeviceState = (state: DeviceState) => {
  allDeviceStore[state.id].update(s => ({ ...s, ...state }))
}

export const getDeviceStore = (id: string) => {
  return allDeviceStore[id]
}

export const getDevices = (): Device[] => {
  return Object.keys(allDeviceStore).map(id => get(allDeviceStore[id]))
}

const initInfo: Record<string, DeviceInfo> = {
  dimmer_1: { id: 'dimmer_1', name: 'Lights',   type: DeviceType.Dimmer,     room: 'Living Room', icon: Icon.CeilingLight,  controllable: true },
  dimmer_2: { id: 'dimmer_2', name: 'Light',    type: DeviceType.Dimmer,     room: 'Kitchen',     icon: Icon.CeilingLight,  controllable: true },
  switch_1: { id: 'switch_1', name: 'Light',    type: DeviceType.Switch,     room: 'Bedroom',     icon: Icon.Lightbulb,     controllable: true },
  switch_2: { id: 'switch_2', name: 'Light',    type: DeviceType.Switch,     room: 'Entrance',    icon: Icon.Lightbulb,     controllable: true },
  switch_3: { id: 'switch_3', name: 'Light',    type: DeviceType.Switch,     room: 'Bathroom',    icon: Icon.Lightbulb,     controllable: true },
  outlet_1: { id: 'outlet_1', name: 'Outlet A', type: DeviceType.Outlet,     room: 'Bedroom',     icon: Icon.Lightbulb,     controllable: true },
  outlet_2: { id: 'outlet_2', name: 'Outlet B', type: DeviceType.Outlet,     room: 'Bedroom',     icon: Icon.Lightbulb,     controllable: true },
  tree_1:   { id: 'tree_1',   name: 'Tree',     type: DeviceType.LightStrip, room: 'Living Room', icon: Icon.Lightbulb,     controllable: true },
}

const initState: Record<string, DeviceState> = {
  dimmer_1: { id: 'dimmer_1', text: '90%',  state: true,  connected: true, brightness: 90 },
  dimmer_2: { id: 'dimmer_2', text: 'Off',  state: false, connected: true, brightness: 50 },
  switch_1: { id: 'switch_1', text: 'On',   state: true,  connected: true },
  switch_2: { id: 'switch_2', text: 'Off',  state: false, connected: true },
  switch_3: { id: 'switch_3', text: 'On',   state: true,  connected: true },
  outlet_1: { id: 'outlet_1', text: 'On',   state: true,  connected: true },
  outlet_2: { id: 'outlet_2', text: 'Off',  state: false, connected: true },
  tree_1:   { id: 'tree_1',   text: 'On',   state: true,  connected: true },
}

initAllDeviceStore(initInfo, initState)
