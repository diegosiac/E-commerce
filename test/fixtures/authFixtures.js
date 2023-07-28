export const initialState = {
  status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
  user: {},
  errorMessage: undefined
}

export const authenticatedState = {
  status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
  user: {
    email: 'elmendoza7@test.com',
    name: 'Jony el bravo'
  },
  errorMessage: undefined
}

export const notAuthenticatedState = {
  status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
  user: {},
  errorMessage: undefined
}

export const errorMessageState = {
  status: 'not-authenticated',
  user: {},
  errorMessage: 'This error message'
}

export const demoUser = {
  email: 'demoUser@test.com',
  name: 'Demo User'
}
