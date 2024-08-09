import { derived, writable } from 'svelte/store'
import { getOptions } from './optionStore'
import { getDevices } from './deviceStore'
import { user } from './userStore'

export const page = writable('/')
export const loggedIn = writable(true)

page.set(location.pathname)

export const setPage = (url: string) => {
  page.set(url)
  history.pushState(null, null, url)
}

window.addEventListener('popstate', () => setPage(location.pathname))

export const layout = derived([user, page, getOptions('rooms')], ([user, url, rooms]) => {
  if (url === '/') {
    return user.layout
  } else {
    const devices = getDevices()

    const id = url.split('/').slice(-1)[0].toLowerCase()
    const room = rooms.find(o => o[0] === id)?.[1]

    return devices.filter(info => info.room === room).map(({ id }) => id)
  }
})
