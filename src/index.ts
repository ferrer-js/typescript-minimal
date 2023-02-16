import _ from 'lodash'
import { HelloWorld } from "./HelloWorld"

export { HelloWorld }

export function helloWorld() {
  const world = new HelloWorld()
  const camelCased = _.camelCase(world.sayIt())
  return camelCased
}

export function badFunc() {
  let unusedVar = 1
  const a = {}
  a.something = 3
}
