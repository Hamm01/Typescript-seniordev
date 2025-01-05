type User = {
  id: string
  name: string
  age: number
  address: {
    street: string
    city: string
  }
}

type T = Readonly<User>

function createUserWithAddress(user: Required<User>) {}
function createUser(user: Omit<User, 'id'>) {}
function updateUser(user: Partial<User>) {}
function renderUserDetails(user: Pick<User, 'name' | 'age'>) {
  console.log(user.name, user.age)
}

// When we declare the Readonly property for any type, that represents the immutabilty.
// this same concept we use in js as object.freeze(user) ,, so user.id we cant change
// same by declaring t as Readonly.

// below we cannot change user.id as it represnet Readonly property on user, this is one level nesting
// in address we can change the street and city

let user: T

user.id = 12 // this is readonly property
