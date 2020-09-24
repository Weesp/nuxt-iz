import { isObject, isDefined } from '@/utility/checkers'

export default class Storage {
  constructor (provider = window.localStorage) {
    this.provider = provider
  }

  get (key) {
    const value = this.provider.getItem(key)
    try {
      return JSON.parse(value)
    } catch (err) {
      return value
    }
  }

  set (key, value) {
    if (isDefined(value)) { this.provider.setItem(key, isObject(value) ? JSON.stringify(value) : value) }
    return this
  }

  remove (key) {
    this.provider.removeItem(key)
    return this
  }

  clear () {
    this.provider.clear()
    return this
  }
}
