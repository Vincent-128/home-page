import { readable, writable } from 'svelte/store'
import { DeviceType, type DeviceInfo, type DeviceState, ConditionType } from '../types'
import { isControllable } from './deviceStore'

const createEnum = (items: string[]): { [id: string]: string } => Object.fromEntries(items.map((t, i) => [i, t]))

export interface Options {
  device: { [id: string]: string }
  mode: { [id: number]: string }
  entry: { [id: number]: string }
  trigger: { [id: number]: string }
  brightness: { [id: number]: string }
  icons: { [id: number]: string }
  numbers: { [id: number]: string }
  type: { [id: number]: string }
}

export const setDeviceOptions = (devices: { [id: string]: DeviceInfo }) => {
  const all: {[id: string]: string} = {}
  const dimmable: {[id: string]: string} = {}
  const controllable: {[id: string]: string} = {}

  for (let id in devices) {
    const name = `${devices[id].room} ${devices[id].name}`
    all[id] = name

    if (devices[id].type === DeviceType.Dimmer) {
      dimmable[id] = name
    }

    if (isControllable(devices[id].type)) {
      controllable[id] = name
    }
  }
  options.update(s => ({ ...s, all, dimmable, controllable }))
}

export const options = writable({
  all: {},
  dimmable: {},
  controllable: {},
  conditions: { [ConditionType.State]: 'Device', [ConditionType.Range]: 'Time' },
  mode: { 0: 'Dark', 1: 'Light' },
  entry: { 1: 'Device', 2: 'Wait', 3: 'If', 4: 'If Else', 5: 'While' },
  trigger: { 0: 'Device', 1: 'Time', 2: 'Sunrise', 3: 'Sunset' },
  brightness: { 10: '10%', 20: '20%', 30: '30%', 40: '40%', 50: '50%', 60: '60%', 70: '70%', 80: '80%', 90: '90%', 100: '100%' },
  numbers: { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
  type: createEnum(['Button', 'Dimmer', 'Door', 'Garage', 'Multi-Outlet', 'Outlet', 'Sensor', 'Switch']),
  icons: createEnum([ 'Camera', 'Button', 'Christmas Tree', 'Christmas Lights', 'Ceiling Light', 'Door', 'Fan', 'Garage', 'Large Lamp', 'Lightbulb', 'Outlet', 'Sensor', 'Small Lamp', 'Speakers', 'Switch' ]),
})
