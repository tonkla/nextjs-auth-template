import { PropsWithChildren, useEffect, useState } from 'react'
import { useReadLocalStorage } from 'usehooks-ts'

import { LOGGED_IN_AT } from 'src/consts'
import { SessionContext } from 'src/contexts/session'

function SessionProvider({ children }: PropsWithChildren) {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const loggedInAt = useReadLocalStorage(LOGGED_IN_AT)

	useEffect(() => setIsLoggedIn(!!loggedInAt), [loggedInAt, setIsLoggedIn])

	return (
		<SessionContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
			{children}
		</SessionContext.Provider>
	)
}

export default SessionProvider
