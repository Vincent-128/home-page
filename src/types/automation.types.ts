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
export type Entries = Record<string, Entry>

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
export type Automations = Record<string, Automation>
