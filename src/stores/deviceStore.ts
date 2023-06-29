import { DeviceType, type DeviceInfo, type DeviceState } from '../types'

let devices: { [id: string]: DeviceInfo } = {}
const subscriptions: { [id: string]: (state: DeviceInfo) => void } = {}

export const setDevices = (deviceInfo: { [id: string]: DeviceInfo }) => {
  devices = deviceInfo
}

export const updateDevice = (deviceInfo: DeviceInfo) => {
  devices[deviceInfo.id] = deviceInfo
  subscriptions[deviceInfo.id]?.(deviceInfo)
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
