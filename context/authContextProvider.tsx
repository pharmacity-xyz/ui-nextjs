import { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { toast } from 'react-toastify'
import { logInApi, signUpApi } from '../services/auth/authServices'
import { ILogInApiData, ISignUpApiData } from '../services/auth/types'
import { LS } from '../utils/localStorage'

export const AUTH_ACTION = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
}

interface IUserData {
  userId: string
}

interface IUserDetail {
  userId: string
  username: string
  email: string
}

interface IAuthContext {
  user: IUserData | null
  login: (emailAddress: string, pass: string) => Promise<void>
  register: (req: ISignUpApiData) => Promise<void>
}

const initialState = {
  isLoggedIn: false,
  member: LS.getLocalStorage('auth')?.member || {},
  role: LS.getLocalStorage('auth')?.role || null,
}

const AuthContext = React.createContext<IAuthContext | null>(null)

function authReducer(state, action) {
  switch (action.type) {
    case AUTH_ACTION.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        ...action.payload,
      }
    case AUTH_ACTION.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        role: null,
      }
    case AUTH_ACTION.OPEN_MODAL:
      return { ...state, openAuthModal: true }
    case AUTH_ACTION.CLOSE_MODAL:
      return { ...state, openAuthModal: false }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const router = useRouter()
  const [response, setResponse] = useState<AxiosResponse<IUserData> | null>(
    null
  )
  const [authState, dispatch] = useReducer(authReducer, initialState)

  const user = response ? response.data : null

  const register = async (req: ISignUpApiData) => {
    try {
      const res = await signUpApi(req)
      // console.log((res as any).id)
      setResponse((res as any).id)
      router.push('/')
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
      setResponse(res)
      router.push('/')
      toast('Logined!')
    } catch (e) {
      console.error(e)
      toast('Failed!')
    }
  }

  return (
    <AuthContext.Provider value={{ login, register, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context as IAuthContext
}
