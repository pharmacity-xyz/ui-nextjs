import { AxiosResponse } from 'axios'
import React, { useContext, useEffect, useReducer, useState } from 'react'
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
  // userDetail: IUserDetail | null
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
  const [response, setResponse] = useState<AxiosResponse<IUserData> | null>(
    null
  )
  const [authState, dispatch] = useReducer(authReducer, initialState)

  const user = response ? response.data : null

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context as IAuthContext
}
