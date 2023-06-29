import { derived, writable } from 'svelte/store'
import { TriggerType, type Automation, type Automations } from '../types'
import { getId } from '../utils'
import { addEntry, removeEntry } from './entryStore'

export const automationIds = writable([])
export let automations: Automations = {}

const subscriptions: { [id: string]: (automation: Automation) => void } = {}

export const setAutomations = (info: Automations) => {
  automations = info
  automationIds.set(Object.keys(info))
}

export const getAutomations = () => {
  return automations
}

export const addAutomation = () => {
  const id = getId()
  automations[id] = {
    enabled: true,
    weekdays: [true, true, true, true, true, true, true],
    trigger: { type: TriggerType.Device, device: '', state: true },
    sequence: addEntry(id),
  }
  automationIds.update(s => [...s, id])
}

export const getAutomationStore = (id: string) => {
  const set = (value: Automation) => {
    automations[id] = value
    subscriptions[id](automations[id])
  }

  const remove = () => {
    removeEntry(automations[id].sequence)
    delete automations[id]
    automationIds.set(Object.keys(automations))
  }

  const unsubscribe = () => {
    delete subscriptions[id]
  }

  const subscribe = (subscription: (automation: Automation) => void) => {
    subscription(automations[id])
    subscriptions[id] = subscription
    return { unsubscribe }
  }

  return { subscribe, set, remove }
}
