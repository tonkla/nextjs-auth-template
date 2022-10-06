import { createContext } from 'react'

export interface ISessionContext {
	isLoggedIn: boolean
	setIsLoggedIn: (v: boolean) => void
}

export const defaultSessionContext: ISessionContext = {
	isLoggedIn: false,
	setIsLoggedIn: () => {},
}

export const SessionContext = createContext(defaultSessionContext)
