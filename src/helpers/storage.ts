interface UserSession {
  token: string
}

export const getUser = (): UserSession => {
  const userJson: string = localStorage.getItem('user') || ''
  try {
    return JSON.parse(userJson)
  } catch (error) {
    return { token: '' }
  }
}

export const saveUser = (user: UserSession): void => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeUser = (): void => {
  localStorage.removeItem('user')
}
