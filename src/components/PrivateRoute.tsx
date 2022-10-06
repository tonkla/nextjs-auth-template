import { useRouter } from 'next/router'
import { PropsWithChildren, useContext, useEffect } from 'react'

import { SessionContext } from 'src/contexts/session'
import useLogout from 'src/hooks/api/useLogout'
import usePing from 'src/hooks/api/usePing'

function PrivateRoute({ children }: PropsWithChildren) {
	const { isLoggedIn, setIsLoggedIn } = useContext(SessionContext)

	const router = useRouter()

	const { error } = usePing(!!isLoggedIn)

	const { logOut } = useLogout()

	useEffect(() => {
		if (!isLoggedIn && router.pathname !== '/login') {
			router.replace('/login')
		}
	}, [isLoggedIn, router])

	useEffect(() => {
		if (error?.status === 401) {
			setIsLoggedIn(false)
			logOut(false)
		}
	}, [isLoggedIn, setIsLoggedIn, error, router, logOut])

	return isLoggedIn ? <>{children}</> : null
}

export default PrivateRoute
