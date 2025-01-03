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
function updateUser(user: User) {}
function renderUserDetails(user: Pick<User, 'name' | 'age'>) {
  console.log(user.name, user.age)
}

// By using omit we are not passing id in the argument, our type User is used and in future if we change definition of type User that will not effect in CreateUser function

createUser({
  name: 'gamer',
  age: 23,
  address: {
    city: 'sdf',
    street: 'dfgdg'
  }
})
