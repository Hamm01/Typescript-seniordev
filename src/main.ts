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
function renderUserDetails(user: User) {
  console.log(user.name, user.age)
}

renderUserDetails({
  id: '343',
  name: 'kumar Gaurav',
  age: 30,
  address: {
    street: '123 street',
    city: 'Delhi'
  }
})
