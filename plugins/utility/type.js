import { equal } from '@/plugins/utility/equality'
import { switchCase } from '@/plugins/utility/conditional'

export const typeOf = x => Object.prototype.toString.call(x).slice(8, -1).toLowerCase()
export const typeEqual = type => x => equal(type)(typeOf(x))
export const switchType = switchCase(typeOf)
