type User = {
  id: string
  name: string
  age: number
  address: {
    street: string
    city: string
  }
}

function createUser(user: Omit<User, 'id'>) {}
function updateUser(user: Partial<User>) {}
function renderUserDetails(user: Pick<User, 'name' | 'age'>) {
  console.log(user.name, user.age)
}

// By using partial its like all the keys in type are
// optional so we can use as much keys we want

updateUser({ name: 'prodev' })
