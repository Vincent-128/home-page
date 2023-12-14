import { writable } from 'svelte/store'
import { DeviceType, type DeviceInfo, type DeviceState, ConditionType } from '../types'
import { isControllable } from './deviceStore'

const createEnum = (items: string[]): [number, string][] => items.map((t, i) => [i, t])

export interface Options {
  all: [string, string][]
  dimmable: [string, string][]
  controllable: [string, string][]
  conditions: [number, string][]
  mode: [number, string][]
  entry: [number, string][]
  trigger: [number, string][]
  brightness: [number, string][]
  icons: [number, string][]
  numbers: [number, string][]
  type: [number, string][]
  rooms: [string, string][]
}

export const setDeviceOptions = (devices: { [id: string]: DeviceInfo }) => {
  const all: [string, string][] = []
  const dimmable: [string, string][] = []
  const controllable: [string, string][] = []
  const rooms: [string, string][] = []
  const seenRooms = {}

  for (let id in devices) {
    const name = `${devices[id].room} ${devices[id].name}`
    const roomId = devices[id].room.replace(/ /g, '-').toLowerCase()
    all.push([id, name])

    if (!seenRooms.hasOwnProperty(roomId)) {
      rooms.push([roomId, devices[id].room])
      seenRooms[roomId] = true
    }
    
    if (devices[id].type === DeviceType.Dimmer) {
      dimmable.push([id, name])
    }

    if (isControllable(devices[id].type)) {
      controllable.push([id, name])
    }
  }
  options.update(s => ({ ...s, all, rooms, dimmable, controllable }))
}

export const options = writable<Options>({
  all: [],
  dimmable: [],
  controllable: [],
  rooms: [],
  conditions: [[ConditionType.State, 'Device'], [ConditionType.Range, 'Time']],
  mode: [[0, 'Dark'], [1, 'Light']],
  entry: [[1, 'Device'], [2, 'Wait'], [3, 'If'], [4, 'If Else'], [5, 'While']],
  trigger: [[0, 'Device'], [1, 'Time'], [2, 'Sunrise'], [3, 'Sunset']],
  brightness: [[10, '10%'], [20, '20%'], [30, '30%'], [40, '40%'], [50, '50%'], [60, '60%'], [70, '70%'], [80, '80%'], [90, '90%'], [100, '100%']],
  numbers: [[1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5']],
  type: createEnum(['Button', 'Dimmer', 'Door', 'Garage', 'Multi-Outlet', 'Outlet', 'Sensor', 'Switch']),
  icons: createEnum(['Camera', 'Button', 'Christmas Tree', 'Christmas Lights', 'Ceiling Light', 'Door', 'Fan', 'Garage', 'Large Lamp', 'Lightbulb', 'Outlet', 'Sensor', 'Small Lamp', 'Speakers', 'Switch',]),
})
