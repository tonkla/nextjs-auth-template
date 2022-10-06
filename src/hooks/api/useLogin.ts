import { useSWRConfig } from 'swr'
import { useLocalStorage } from 'usehooks-ts'

import { LOGGED_IN_AT } from 'src/consts'
import { Apis, usePost } from 'src/hooks/useFetch'

function useLogin() {
	const [_, setLoggedInAt] = useLocalStorage(LOGGED_IN_AT, '')

	const postLogin = usePost(Apis.login)

	const { mutate } = useSWRConfig()

	async function logIn(username: string, password: string): Promise<boolean> {
		try {
			const res = await postLogin({ username, password })
			if (res?.ok) {
				setLoggedInAt(Date.now().toString())
				// Clear cached SWR error
				mutate(Apis.ping, null, true)
			}
			return res?.ok ?? false
		} catch {
			return false
		}
	}

	return {
		logIn,
	}
}

export default useLogin
