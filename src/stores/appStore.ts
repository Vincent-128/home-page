import { writable } from 'svelte/store'

export const page = writable('/')
page.set(location.pathname)

export const loggedIn = writable(true)
