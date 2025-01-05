type User = {
  id: string
  name: string
  age: number
  address: {
    street: string
    city: string
  }
}

type T = Record<'admin' | 'user', { test: string }>

//Record is key value pair, we can user in key like admin and user, bothe with value as object taht take test as string
const a: T = {
  admin: { test: 'gamer' },
  user: { test: 'dfd' }
}
console.log(a)
