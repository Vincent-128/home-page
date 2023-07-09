import { derived, get, writable, type Writable } from 'svelte/store'
import { TriggerType, type Automation, type Automations } from '../types'
import { getId } from '../utils'
import { addEntry, removeEntry } from './entryStore'

interface WritableAutomation extends Writable<Automation> {
  remove: () => void
}

export const automations = writable<Automations>({})

export const automationIds = derived(automations, $automations => Object.keys($automations))

export const setAutomations = (info: Automations) => {
  automations.set(info)
}

export const getAutomations = () => {
  return get(automations)
}

export const addAutomation = () => {
  const id = getId()
  automations.update(a => {
    a[id] = {
      enabled: true,
      weekdays: [true, true, true, true, true, true, true],
      trigger: { type: TriggerType.Device, device: '', state: true },
      sequence: addEntry(id),
    }
    return a
  })
}

export const getAutomationStore = (id: string): WritableAutomation => {
  const { subscribe } = derived(automations, $automations => $automations[id])

  const set = (value: Automation) => {
    automations.update(a => {
      a[id] = value
      return a
    })
  }

  const update = (test: any) => {
    console.log(test)
  }

  const remove = () => {
    removeEntry(get(automations)[id].sequence)
    automations.update(a => {
      delete a[id]
      return a
    })
  }

  return { subscribe, set, update, remove }
}
