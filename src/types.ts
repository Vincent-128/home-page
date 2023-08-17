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
}

export enum ConditionType {
  State,
  Range,
  Operator,
}

export enum EntryType {
  Parent,
  Device,
  Wait,
  If,
  IfElse,
  While,
}

export enum TriggerType {
  Device,
  Time,
  Sunrise,
  Sunset,
}

export enum Theme {
  Dark,
  Light,
}

///////////////////////////////////////////////////////////////////
// Devices
export interface BaseInfo {
  name: string
  room: string
  type: DeviceType
  icon: Icon
  state: boolean
  text: string
}

export interface DimmerInfo extends BaseInfo {
  type: DeviceType.Dimmer
  brightness: number
}

export interface MultiOutletInfo extends BaseInfo {
  type: DeviceType.MultiOutlet
  combine: boolean
  outlets: string[]
}

export type DeviceInfo = BaseInfo | DimmerInfo | MultiOutletInfo

export interface DeviceState {
  id: string
  state: boolean
  text: string
  connected: boolean
  brightness?: number
}

///////////////////////////////////////////////////////////////////
// Conditions
export interface StateCondition {
  type: ConditionType.State
  device: string
  state: boolean
}

export interface RangeCondition {
  type: ConditionType.Range
  start: string
  end: string
}

export interface OperatorCondition {
  type: ConditionType.Operator
  isAnd: boolean
}

export type Condition = StateCondition | RangeCondition | OperatorCondition

///////////////////////////////////////////////////////////////////
// Entries
interface BaseEntry {
  type: EntryType
  parentId: string
}

export interface DeviceEntry extends BaseEntry {
  type: EntryType.Device
  devices: string[]
  state: boolean
  brightness?: number
}

export interface IfEntry extends BaseEntry {
  type: EntryType.If
  conditions: Condition[]
  seq1: string
}

export interface IfElseEntry extends BaseEntry {
  type: EntryType.IfElse
  conditions: Condition[]
  seq1: string
  seq2: string
}

export interface ParentEntry extends BaseEntry {
  type: EntryType.Parent
  children: string[]
}

export interface WaitEntry extends BaseEntry {
  wait: string
  type: EntryType.Wait
}

export interface WhileEntry extends BaseEntry {
  type: EntryType.While
  conditions: Condition[]
  seq1: string
}

export type Entry = DeviceEntry | IfEntry | IfElseEntry | ParentEntry | WaitEntry | WhileEntry
export type Entries = { [id: string]: Entry }

///////////////////////////////////////////////////////////////////
// Automations
export type Weekdays = [boolean, boolean, boolean, boolean, boolean, boolean, boolean]

export interface Automation {
  enabled: boolean
  weekdays: Weekdays
  trigger: Trigger
  sequence: string
}

export interface DeviceTrigger {
  type: TriggerType.Device
  device: string
  state: boolean
}

export interface SunTrigger {
  type: TriggerType.Sunrise | TriggerType.Sunset
  offset: string
}

export interface TimeTrigger {
  type: TriggerType.Time
  time: string
}

export type Trigger = DeviceTrigger | SunTrigger | TimeTrigger
export type Automations = { [id: string]: Automation }
///////////////////////////////////////////////////////////////////
// User
export interface User {
  theme: Theme
  room: string
  layout: string[]
  username: string
}

export interface Command {
  index: number
  state: boolean
  brightness?: number
}

///////////////////////////////////////////////////////////////////
// WebSocket Messages
export enum MessageType {
  HomeData,
  UserData,
  UpdateUser,
  UpdateDevice,
  Set,
  Get,
  Toggle,
  UpdateAutomations,
}

interface HomeData {
  event: MessageType.HomeData
  data: {
    devices: { [id: string]: DeviceInfo }
    automations: Automations
    entries: Entries
  }
}

interface UserData {
  event: MessageType.UserData
  data: User
}

interface UpdateUser {
  event: MessageType.UpdateUser
  username: string
  data: {
    layout?: string[]
    room?: string
    theme?: Theme
  }
}

interface UpdateDevice {
  event: MessageType.UpdateDevice
  data: DeviceInfo[]
}

interface SetDevice {
  event: MessageType.Set
  id: string
  data: Object
}

interface GetDevice {
  event: MessageType.Get
  data: DeviceState
}

interface ToggleDevice {
  event: MessageType.Toggle
  id: string
}

interface UpdateAutomations {
  event: MessageType.UpdateAutomations
  data: {
    automations: Automations
    entries: Entries
  }
}

export type Message = HomeData | UserData | UpdateUser | SetDevice | GetDevice | UpdateDevice | ToggleDevice | UpdateAutomations
