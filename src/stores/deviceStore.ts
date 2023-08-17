import { DeviceType, type DeviceInfo } from '../types'


let devices: { [id: string]: DeviceInfo } = {}
const subscriptions: { [id: string]: (state: DeviceInfo) => void } = {}

const controllable = {
  [DeviceType.Button]: true,
  [DeviceType.Dimmer]: true,
  [DeviceType.Door]: false,
  [DeviceType.Garage]: true,
  [DeviceType.MultiOutlet]: true,
  [DeviceType.Outlet]: true,
  [DeviceType.Sensor]: false,
  [DeviceType.Switch]: true,
}

export const isControllable = (type: DeviceType): boolean => controllable[type]

export const setDevices = (deviceInfo: { [id: string]: DeviceInfo }) => {
  devices = deviceInfo
}

export const updateDevice = (id: string, deviceInfo: DeviceInfo) => {
  devices[id] = deviceInfo
  subscriptions[id]?.(deviceInfo)
}

export const getDevice = (id: string) => {
  return devices[id]
}

export const getDeviceStore = (id: string) => {
  const set = (value: DeviceInfo) => {
    devices[id] = value
    subscriptions[id](devices[id])
  }

  const unsubscribe = () => {
    delete subscriptions[id]
  }

  const subscribe = (subscription: (state: DeviceInfo) => void) => {
    subscription(devices[id])
    subscriptions[id] = subscription
    return { unsubscribe }
  }

  return { subscribe, set }
}
