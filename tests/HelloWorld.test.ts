import { HelloWorld } from '..'

test('hello world', () => {
  let world = new HelloWorld
  expect(world.sayIt()).toBe("Hello World")
})
