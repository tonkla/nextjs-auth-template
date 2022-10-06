import { LOGGED_IN_AT } from 'src/consts'
import { Apis } from 'src/hooks/useFetch'

function useLogout() {
	async function logOut(isLoggedIn = true): Promise<boolean> {
		try {
			localStorage.removeItem(LOGGED_IN_AT)
			if (isLoggedIn) {
				const res = await fetch(Apis.logout, {
					method: 'POST',
					credentials: 'include',
				})
				return res.ok
			}
			return true
		} catch {
			return false
		}
	}

	return {
		logOut,
	}
}

export default useLogout
