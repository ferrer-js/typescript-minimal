import _ from 'lodash'
import { HelloWorld } from "./HelloWorld.js"

export { HelloWorld }

export function helloWorld() {
  const world = new HelloWorld()
  const camelCased = _.camelCase(world.sayIt())
  return camelCased
}

export function badFunc() {
  const a = {}
  a.something = 3
}
