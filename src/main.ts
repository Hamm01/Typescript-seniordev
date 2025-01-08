function getUser(id: string, age: number) {
  return { name: 'hammy', id, age }
}

type T = Parameters<typeof getUser>

// this will pass the paramaters as tuples in the code , means parameters of function will returned as array

const a: T = ['coffers', 56]

// in this the const variable a has type T that as tuple we need to pass a string and number.
