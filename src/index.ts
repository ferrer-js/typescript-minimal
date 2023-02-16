import _ from 'lodash'
import { HelloWorld } from "./HelloWorld.js"

export { HelloWorld }

export function helloWorld() {
  const world = new HelloWorld()
  return world.sayIt()
}

export function badFunc() {
  const a = {}
  a.something = 3
}
