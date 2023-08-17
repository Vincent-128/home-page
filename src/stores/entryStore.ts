import { EntryType, type DeviceEntry, type Entry, type IfElseEntry, type IfEntry, type WaitEntry, type WhileEntry, type Entries, ConditionType } from '../types'
import { getId } from '../utils'

const subscriptions: { [id: string]: (entry: Entry) => void } = {}

let entries: Entries = {}

export const getEntries = () => {
  return entries
}

export const setEntries = (info: Entries) => {
  entries = info
}

export const addEntry = (parentId: string) => {
  const id = getId()
  entries[id] = { type: EntryType.Parent, parentId, children: [] }
  return id
}

export const removeEntry = (id: string) => {
  const entry = entries[id]
  if ('seq1' in entry) removeEntry(entry.seq1)
  if ('seq2' in entry) removeEntry(entry.seq2)
  if (entry.type === EntryType.Parent) entry.children.forEach(removeEntry)
  delete entries[id]
}

export const getEntryStore = (id: string) => {
  const set = (value: Entry) => {
    entries[id] = value
    subscriptions[id](entries[id])
  }

  const unsubscribe = () => {
    delete subscriptions[id]
  }

  const remove = () => {
    const parentId = entries[id].parentId
    const parent = entries[parentId]
    if (parent.type !== EntryType.Parent) return
    parent.children = parent.children.filter(c => c !== id)
    subscriptions[parentId](parent)
    removeEntry(id)
  }

  const addChild = (type: EntryType) => {
    const entryId = getId()
    switch (type) {
      case EntryType.Device: {
        entries[entryId] = { type: EntryType.Device, parentId: id, devices: [], state: true }
        break
      }
      case EntryType.Wait: {
        entries[entryId] = { type: EntryType.Wait, parentId: id, wait: '' }
        break
      }
      case EntryType.If: {
        const seq1 = getId()
        entries[entryId] = { type: EntryType.If, parentId: id, conditions: [], seq1 }
        entries[seq1] = { type: EntryType.Parent, parentId: entryId, children: [] }
        break
      }
      case EntryType.IfElse: {
        const seq1 = getId()
        const seq2 = getId()
        entries[entryId] = { type: EntryType.IfElse, parentId: id, conditions: [], seq1, seq2 }
        entries[seq1] = { type: EntryType.Parent, parentId: entryId, children: [] }
        entries[seq2] = { type: EntryType.Parent, parentId: entryId, children: [] }
        break
      }
      case EntryType.While: {
        const seq1 = getId()
        entries[entryId] = { type: EntryType.While, parentId: id, conditions: [], seq1 }
        entries[seq1] = { type: EntryType.Parent, parentId: entryId, children: [] }
        break
      }
    }
    entries[id].children.push(entryId)
    set(entries[id])
  }

  const addCondition = (type: ConditionType) => {
    const entry = entries[id]
    if ('conditions' in entry) {
      if (entry.conditions.length > 0) {
        entry.conditions.push({ type: ConditionType.Operator, isAnd: true })
      }

      if (type === ConditionType.State) {
        entry.conditions.push({ type, device: '', state: true })
      } else if (type === ConditionType.Range){
        entry.conditions.push({ type, start: '', end: '' })
      }

      subscriptions[id](entry)
    }
  }

  const removeCondition = (index: number) => {
    const entry = entries[id]
    if ('conditions' in entry) {
      if (index === 0) {
        entry.conditions.splice(0, 1)
        entry.conditions.splice(0, 1)
      } else {
        entry.conditions.splice(index, 1)
        entry.conditions.splice(index - 1, 1)
      }
    }
    subscriptions[id](entry)
  } 

  const subscribe = (subscription: (entry: Entry) => void) => {
    subscription(entries[id])
    subscriptions[id] = subscription
    return { unsubscribe }
  }

  return { subscribe, set, addChild, remove, addCondition, removeCondition }
}
