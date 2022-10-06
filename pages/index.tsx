import { useContext } from 'react'

import PrivateRoute from 'src/components/PrivateRoute'
import { webConfigs } from 'src/configs'
import { SessionContext } from 'src/contexts/session'
import usePing from 'src/hooks/api/usePing'

function Home() {
	const { isLoggedIn } = useContext(SessionContext)

	const { time } = usePing(isLoggedIn)

	return (
		<PrivateRoute>
			<div className="flex grow flex-col">
				<h1 className="text-2xl text-blue-600">{webConfigs.siteTitle}</h1>
				<div className="mt-4 text-blue-500">Latest Ping: {new Date(time).toLocaleString()}</div>
			</div>
		</PrivateRoute>
	)
}

export default Home
