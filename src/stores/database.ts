import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, onValue, get, child } from 'firebase/database'
import type { Automations, DeviceInfo, Entries, Message, User } from '../types'
import { setAutomations } from './automationStore'
import { setDevices, updateDevice } from './deviceStore'
import { setEntries } from './entryStore'
import { setDeviceOptions } from './optionStore'
import { setUser } from './userStore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCw-ZHcO4Z43U1hxVqzloQEme7DjCe4-0M',
  authDomain: 'home60.firebaseapp.com',
  databaseURL: 'https://home60-default-rtdb.firebaseio.com',
  projectId: 'home60',
  storageBucket: 'home60.appspot.com',
  messagingSenderId: '331283862970',
  appId: '1:331283862970:web:3db771cf017c1250b17983',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

const usersRef = ref(db, 'users')
const devicesRef = ref(db, 'devices')
const entriesRef = ref(db, 'entries')
const automationsRef = ref(db, 'automations')
const messagesRef = ref(db, 'messages')

export const getUser = async (userId: string): Promise<User> => {
  const user = await get(child(usersRef, userId))
  return user.val() as User
}

export const getAutomations = async (): Promise<Automations> => {
  const automations = await get(automationsRef)
  return automations.val() || {}
}

export const updateAutomations = (automations: Automations) => {
  return set(automationsRef, automations)
}

export const getEntries = async (): Promise<Entries> => {
  const entries = await get(automationsRef)
  return entries.val() || {}
}

export const updateEntries = (entries: Entries) => {
  return set(entriesRef, entries)
}

export const getDevices = async (): Promise<{ [id: string]: DeviceInfo }> => {
  const devices = await get(devicesRef)
  return devices.val() || {}
}

export const sendMessage = (message: Message) => {
  set(child(messagesRef, Date.now().toString()), message)
}

export const testDatabase = async () => {
  const user = await getUser('vincent')
  const devices = await getDevices()
  const entries = await getEntries()
  const automations = await getAutomations()

  setDeviceOptions(devices)
  setDevices(devices)
  setEntries(entries)
  setAutomations(automations)
  setUser(user)

  user.layout.forEach(id => {
    onValue(child(devicesRef, id), snapshot => {
      const data = snapshot.val() as DeviceInfo
      updateDevice(data)
      console.log(data)
    })
  })

  console.log({ user, automations, entries, devices })
}
