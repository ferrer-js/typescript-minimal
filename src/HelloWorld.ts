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
    return this.value
  }
}
