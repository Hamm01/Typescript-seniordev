class User {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

type T = InstanceType<typeof User>
type P = ConstructorParameters<typeof User>
