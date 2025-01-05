type User = {
  id: string
  name: string
  age: number
  address: {
    street: string
    city: string
  }
}

type T = Record<string, User>

//Record is key value pair, first is some sort of key which is like string, and value is User object
const a: T = {
  key: {
    age: 21,
    name: 'df',
    id: 'dsfd',
    address: {
      street: '78 sjdfh',
      city: 'beijing'
    }
  }
}
console.log(a['key'])
