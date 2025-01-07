function getUser(id: string) {
  return { name: 'hammy', id }
}

type T = ReturnType<typeof getUser>

// this will inferred the type for the returned  function
