import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('api/token/obtain', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('api/user/create', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('api/token/refresh/')
    return res.data
  } catch (error) {
    throw error
  }
}
