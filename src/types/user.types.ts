export enum Theme {
  Dark,
  Light,
}

export interface User {
  theme: Theme
  layout: string[]
  username: string
}

export interface Command {
  index: number
  state: boolean
  brightness?: number
}
