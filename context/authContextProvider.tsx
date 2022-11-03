import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { logInApi, signUpApi } from '../services/auth/authServices'
import { ISignUpApiData } from '../services/auth/types'

export const AUTH_ACTION = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
}

interface IUserData {
  userId: string
  token: string
}

interface IAuthContext {
  user: IUserData | null
  loginError: boolean
  login: (emailAddress: string, pass: string) => Promise<void>
  register: (req: ISignUpApiData) => Promise<void>
  logout: () => void
}

const AuthContext = React.createContext<IAuthContext | null>(null)

export const AuthContextProvider = ({ children }) => {
  const [loginError, setLoginError] = useState(false)
  const [user, setUser] = useState<IUserData>({
    userId: '',
    token: '',
  } as IUserData)
  const router = useRouter()

  const register = async (req: ISignUpApiData) => {
    try {
      if (req.password !== req.confirmPassword) {
        toast('Password and Confirmpassowrd does not match!')
        return
      }

      await signUpApi(req)
      router.push('/login')
      toast('Created!')
    } catch (error) {
      console.error(error)
      toast('Failed!')
    }
  }

  const login = async (emailAddress, pass) => {
    try {
      const res = await logInApi({
        email: emailAddress,
        password: pass,
      })

      setUser(res.data)

      localStorage.setItem('userId', res.data.userId)
      localStorage.setItem('token', res.data.token)

      router.push('/')
      setLoginError(false)
    } catch (e) {
      setLoginError(true)
    }
  }

  const logout = () => {
    console.log(user)
    setUser({ userId: '', token: '' } as IUserData)

    localStorage.removeItem('userId')
    localStorage.removeItem('token')

    router.push('/')
    window.location.reload()
    toast('Logged out!')
  }

  return (
    <AuthContext.Provider value={{ login, register, logout, user, loginError }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context as IAuthContext
}
