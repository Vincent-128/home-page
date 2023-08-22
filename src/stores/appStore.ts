import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { derived, writable } from 'svelte/store'
import { getDevices } from './deviceStore'
import { loadData } from './database'
import { options } from './optionStore'
import { user } from './userStore'

const auth = getAuth()
export const page = writable('/')
export const loggedIn = writable(true)

page.set(location.pathname)

export const setPage = (url: string) => {
  page.set(url)
  history.pushState(null, null, url)
}

window.addEventListener('popstate', () => setPage(location.pathname))

export const layout = derived([user, page, options], ([user, url, opt]) => {
  if (url === '/') {
    return user.layout
  } else {
    const path = url.split('/')
    const test = path[path.length - 1].toLowerCase()
    const room = opt.rooms[test]
    const devices = getDevices()
    return Object.entries(devices).filter(([_id, info]) => info.room === room).map(([id]) => id)
  }
})

export const login = async (username: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, username + '@home60.firebaseapp.com', password)
    } catch (error) {
        console.log(error.code, error.message)
    }
}

export const logout = async () => {
    signOut(auth)
}

onAuthStateChanged(auth, async credential => {
    try {
      if (credential) {
        loggedIn.set(true)
        loadData(credential.uid)
      } else {
        loggedIn.set(false)
      }
    } catch (e) {
      console.log(e)
    }
  })