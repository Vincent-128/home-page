import type { Automations, Entries } from './automation.types'
import type { DeviceInfo } from './device.types'
import type { User, Theme } from './user.types'

export enum MessageType {
  HomeData,
  UpdateUser,
  UpdateDevice,
  UpdateState,
  SetState,
  GetState,
  SetAutomations,
}

interface HomeData {
  topic: MessageType.HomeData
  devices: Record<string, DeviceInfo>
  automations: Automations
  entries: Entries
  user: User
}

interface UpdateUser {
  topic: MessageType.UpdateUser
  username: string
  layout?: string[]
  room?: string
  theme?: Theme
}

interface UpdateDevice {
  topic: MessageType.UpdateDevice
  data: DeviceInfo[]
}

interface UpdateAutomations {
  topic: MessageType.SetAutomations
  automations: Automations
  entries: Entries
}

export type Message = HomeData | UpdateUser | UpdateDevice | UpdateAutomations
