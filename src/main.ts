type User = {
  id: string
  name: string
  age: number
  address: {
    street: string
    city: string
  }
}

function createUserWithAddress(user: Required<User>) {
  console.log(user)
}

function createUser(user: Omit<User, 'id'>) {}
function updateUser(user: Partial<User>) {}
function renderUserDetails(user: Pick<User, 'name' | 'age'>) {
  console.log(user.name, user.age)
}

// By using required its like all the keys in type are
// we have pass otherwise it will give an error

createUserWithAddress({
  name: 'casinor',
  id: 'dfd',
  age: 29,
  address: {
    street: 'sdfd',
    city: 'fance'
  }
})
