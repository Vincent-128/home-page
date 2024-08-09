import { writable } from 'svelte/store'
import { type User, Theme } from '../types/user.types'

export const setUser = (info: User) => {
  user.set(info)
}

export const user = writable<User>({
  theme: Theme.Dark,
  layout: ['dimmer_1', 'dimmer_2', 'switch_1', 'switch_2', 'switch_3', 'outlet_1', 'outlet_2', 'tree_1'],
  username: '',
})
