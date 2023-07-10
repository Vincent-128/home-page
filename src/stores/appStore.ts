import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { writable } from 'svelte/store'
import { loadData } from './database'

const auth = getAuth()
export const page = writable('/')
export const loggedIn = writable(true)

page.set(location.pathname)

export const login = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
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