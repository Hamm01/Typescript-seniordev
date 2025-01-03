type User = {
  id: string
  name: string
  age: number
  address: {
    street: string
    city: string
  }
}

function createUser(user: User) {}
function updateUser(user: User) {}
function renderUserDetails(user: Pick<User, 'name' | 'age'>) {
  console.log(user.name, user.age)
}

renderUserDetails({ name: 'gamer', age: 23 })
