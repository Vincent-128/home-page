import { writable } from 'svelte/store'
import { Theme, type User } from '../types'

export const setUser = (info: User) => {
  user.set(info)
}

export const user = writable<User>({
  theme: Theme.Dark,
  room: '',
  layout: [],
  username: '',
})
