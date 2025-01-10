function getUser(id: string) {
  return Promise.resolve({ name: 'selina' })
}

type T = ReturnType<typeof getUser>

// This T type will return a promise version of getUser with type T = Promise<{ name: string;}>

type B = Awaited<ReturnType<typeof getUser>>

// this type B will not retuen the promise version but what promise will return after type B = { name: string;}
