/**
 * Class of objects that can say hello to the world.
 */
export class HelloWorld {
  /**
   * The value of the world that is being helloed
   */
  value: string

  constructor() {
    this.value = "Hello World"
  }

  /**
   * Say "Hello World"
   * @returns The result of saying "Hello World"
   */
  sayIt(): string {
    let unusedVar = 3
    variableThatDoesntExist = 7
    return this.value
  }
}