class User {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

type T = ConstructorParameters<typeof User>
