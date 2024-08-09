import { writable, type Writable } from 'svelte/store'
import { ConditionType, TriggerType, EntryType } from '../types/automation.types'
import { type DeviceInfo, DeviceType, Icon } from '../types/device.types'

type numberId = [number, string][]
type stringId = [string, string][]
type OptionStore = Writable<[number | string, string][]>

interface Options {
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

export type OptionTypes = keyof Options

const optionStores: Record<string, OptionStore> = {}

export const getOptions = (type: keyof Options) => {
  return optionStores[type]
}

export const setDeviceOptions = (devices: Record<string, DeviceInfo>) => {
  const all: stringId = []
  const dimmable: stringId = []
  const control: stringId = []
  const rooms = {}

  for (let id in devices) {
    const { name, room, type, controllable } = devices[id]
    const fullName = `${room} ${name}`
    const roomId = room.replace(/ /g, '-').toLowerCase()

    all.push([id, fullName])
    if (!rooms.hasOwnProperty(roomId)) {
      rooms[roomId] = room
    }
    if (type === DeviceType.Dimmer) {
      dimmable.push([id, fullName])
    }
    if (controllable) {
      control.push([id, fullName])
    }
  }

  optionStores.all.set(all)
  optionStores.dimmable.set(dimmable)
  optionStores.controllable.set(control)
  optionStores.rooms.set(Object.entries(rooms))
}

const allOptions = {
  all: [],
  dimmable: [],
  controllable: [],
  rooms: [],
  mode: [
    [0, 'Dark'],
    [1, 'Light'],
  ],
  numbers: [
    [1, '1'],
    [2, '2'],
    [3, '3'],
    [4, '4'],
    [5, '5'],
  ],
  brightness: [
    [10, '10%'],
    [20, '20%'],
    [30, '30%'],
    [40, '40%'],
    [50, '50%'],
    [60, '60%'],
    [70, '70%'],
    [80, '80%'],
    [90, '90%'],
    [100, '100%'],
  ],
  conditions: [
    [ConditionType.State, 'Device'],
    [ConditionType.Range, 'Time'],
  ],
  trigger: [
    [TriggerType.Device, 'Device'],
    [TriggerType.Time, 'Time'],
    [TriggerType.Sunrise, 'Sunrise'],
    [TriggerType.Sunset, 'Sunset'],
  ],
  entry: [
    [EntryType.Device, 'Device'],
    [EntryType.Wait, 'Wait'],
    [EntryType.If, 'If'],
    [EntryType.IfElse, 'If Else'],
    [EntryType.While, 'While'],
  ],
  type: [
    [DeviceType.Button, 'Button'],
    [DeviceType.Dimmer, 'Dimmer'],
    [DeviceType.Door, 'Door'],
    [DeviceType.Garage, 'Garage'],
    [DeviceType.MultiOutlet, 'Multi-Outlet'],
    [DeviceType.Outlet, 'Outlet'],
    [DeviceType.Sensor, 'Sensor'],
    [DeviceType.Switch, 'Switch'],
  ],
  icons: [
    [Icon.Camera, 'Camera'],
    [Icon.Button, 'Button'],
    [Icon.ChristmasTree, 'Christmas Tree'],
    [Icon.ChristmasLights, 'Christmas Lights'],
    [Icon.CeilingLight, 'Ceiling Light'],
    [Icon.Door, 'Door'],
    [Icon.Fan, 'Fan'],
    [Icon.Garage, 'Garage'],
    [Icon.LargeLamp, 'Large Lamp'],
    [Icon.Lightbulb, 'Lightbulb'],
    [Icon.Outlet, 'Outlet'],
    [Icon.Sensor, 'Sensor'],
    [Icon.SmallLamp, 'Small Lamp'],
    [Icon.Speakers, 'Speakers'],
    [Icon.Switch, 'Switch'],
  ],
}

const init = () => {
  for (let key in allOptions) {
    optionStores[key] = writable(allOptions[key])
  }
}

init()
