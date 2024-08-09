export enum Icon {
  Camera,
  Button,
  ChristmasTree,
  ChristmasLights,
  CeilingLight,
  Door,
  Fan,
  Garage,
  LargeLamp,
  Lightbulb,
  Outlet,
  Sensor,
  SmallLamp,
  Speakers,
  Switch,
}

export enum DeviceType {
  Button,
  Dimmer,
  Door,
  Garage,
  MultiOutlet,
  Outlet,
  Sensor,
  Switch,
  LightStrip,
}

export interface DeviceState {
  id: string
  text: string
  state: boolean
  connected: boolean
  brightness?: number
}

export interface BaseInfo {
  id: string
  icon: Icon
  name: string
  room: string
  type: DeviceType
  controllable: boolean
}

export interface MultiOutletInfo extends BaseInfo {
  type: DeviceType.MultiOutlet
  combine: boolean
  outlets: string[]
}

export type DeviceInfo = BaseInfo | MultiOutletInfo

export type Device = DeviceInfo & DeviceState

const controllable: Record<DeviceType, boolean> = {
  [DeviceType.Door]: false,
  [DeviceType.Sensor]: false,
  [DeviceType.Button]: true,
  [DeviceType.Dimmer]: true,
  [DeviceType.Garage]: true,
  [DeviceType.Outlet]: true,
  [DeviceType.Switch]: true,
  [DeviceType.LightStrip]: true,
  [DeviceType.MultiOutlet]: true,
}
