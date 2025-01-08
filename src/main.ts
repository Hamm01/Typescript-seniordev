function getUser(id: string, age: number) {
  return { name: 'hammy', id, age }
}

type T = Parameters<typeof getUser>

// this will pass the paramaters as tuples in the code , means parameters of function will returned as array

const a: T = ['coffers', 56]

// in this the const variable a has type T that as tuple we need to pass a string and number.

// where we need this paramets as type like two function below shown , if we change the parameter type form string to number in
// below function getUser , we need to change mannualy type in wrapper function in id, so thats where we can user parmeters type
function getUser(id: number) {
  return { id, age: '12' }
}

function wrappergetUser(id: Parameters<typeof getUser>[0], message: string) {
  return getUser(id)
}
