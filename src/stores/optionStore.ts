import type { DeviceInfo, DeviceState } from '../types'

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
  options.device = Object.fromEntries(
    Object.keys(devices)
      .map(s => [s, `${devices[s].room} ${devices[s].name}`])
      .sort((a, b) => a[1].localeCompare(b[1]))
  )
}

export const options = {
  device: {},
  mode: { 0: 'Dark', 1: 'Light' },
  entry: { 1: 'Device', 2: 'Wait', 3: 'If', 4: 'If Else', 5: 'While' },
  trigger: { 0: 'Device', 1: 'Time', 2: 'Sunrise', 3: 'Sunset' },
  brightness: { 10: '10%', 20: '20%', 30: '30%', 40: '40%', 50: '50%', 60: '60%', 70: '70%', 80: '80%', 90: '90%', 100: '100%' },
  numbers: { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' },
  type: createEnum(['Button', 'Dimmer', 'Door', 'Garage', 'Multi-Outlet', 'Outlet', 'Sensor', 'Switch']),
  icons: createEnum([
    'Camera',
    'Button',
    'Christmas Tree',
    'Christmas Lights',
    'Ceiling Light',
    'Door',
    'Fan',
    'Garage',
    'Large Lamp',
    'Lightbulb',
    'Outlet',
    'Sensor',
    'Small Lamp',
    'Speakers',
    'Switch',
  ]),
}
