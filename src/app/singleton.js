class privateSingleton {
  constructor() {
    this.message = 'hello world'
  }
}

class Singleton {
  constructor() {
    throw new Error('use Singleton. getInstance()')
  }
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new privateSingleton()
    }
    return Singleton.instance
  }
}

export { Singleton }
