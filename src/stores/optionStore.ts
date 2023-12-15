import { writable } from 'svelte/store'
import { DeviceType, type DeviceInfo, ConditionType, Icon, EntryType, TriggerType } from '../types'
import { isControllable } from './deviceStore'

type numberId = { id: number[], text: string[] }
type stringId = { id: string[], text: string[] }

export interface Options {
  all: stringId
  brightness: numberId
  conditions: numberId
  controllable: stringId
  dimmable: stringId
  entry: numberId
  icons: numberId
  mode: numberId
  numbers: numberId
  rooms: stringId
  trigger: numberId
  type: numberId
}

export const setDeviceOptions = (devices: { [id: string]: DeviceInfo }) => {
  const all: stringId = { id: [], text: [] }
  const dimmable: stringId = { id: [], text: [] }
  const controllable: stringId = { id: [], text: [] }
  const rooms: stringId = { id: [], text: [] }
  const seenRooms = {}

  for (let id in devices) {
    const name = `${devices[id].room} ${devices[id].name}`
    const roomId = devices[id].room.replace(/ /g, '-').toLowerCase()
    all.id.push(id)
    all.text.push(id)

    if (!seenRooms.hasOwnProperty(roomId)) {
      rooms.id.push(roomId)
      rooms.text.push(devices[id].room)
      seenRooms[roomId] = true
    }

    if (devices[id].type === DeviceType.Dimmer) {
      dimmable.id.push(id)
      dimmable.text.push(name)
    }

    if (isControllable(devices[id].type)) {
      controllable.id.push(id)
      controllable.text.push(name)
    }
  }
  allOptions.update(s => ({ ...s, all, rooms, dimmable, controllable }))
}

export const allOptions = writable<Options>({
  all: { id: [], text: [] },
  dimmable: { id: [], text: [] },
  controllable: { id: [], text: [] },
  rooms: { id: [], text: [] },
  mode: {
    id: [0, 1],
    text: ['Dark', 'Light']
  },
  numbers: {
    id: [1, 2, 3, 4, 5],
    text: ['1', '2', '3', '4', '5']
  },
  brightness: {
    id: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    text: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']
  },
  conditions: {
    id: [ConditionType.State, ConditionType.Range],
    text: ['Device', 'Time']
  },
  trigger: {
    id: [TriggerType.Device, TriggerType.Time, TriggerType.Sunrise, TriggerType.Sunset,],
    text: ['Device', 'Time', 'Sunrise', 'Sunset']
  },
  entry: {
    id: [EntryType.Device, EntryType.Wait, EntryType.If, EntryType.IfElse, EntryType.While],
    text: ['Device', 'Wait', 'If', 'If Else', 'While']
  },
  type: {
    id: [DeviceType.Button, DeviceType.Dimmer, DeviceType.Door, DeviceType.Garage, DeviceType.MultiOutlet, DeviceType.Outlet, DeviceType.Sensor, DeviceType.Switch],
    text: ['Button', 'Dimmer', 'Door', 'Garage', 'Multi-Outlet', 'Outlet', 'Sensor', 'Switch']
  },
  icons: {
    id: [Icon.Camera, Icon.Button, Icon.ChristmasTree, Icon.ChristmasLights, Icon.CeilingLight, Icon.Door, Icon.Fan, Icon.Garage, Icon.LargeLamp, Icon.Lightbulb, Icon.Outlet, Icon.Sensor, Icon.SmallLamp, Icon.Speakers, Icon.Switch],
    text: ['Camera', 'Button', 'Christmas Tree', 'Christmas Lights', 'Ceiling Light', 'Door', 'Fan', 'Garage', 'Large Lamp', 'Lightbulb', 'Outlet', 'Sensor', 'Small Lamp', 'Speakers', 'Switch',]
  },
})
