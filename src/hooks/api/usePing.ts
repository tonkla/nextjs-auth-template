import { Apis, useFetch } from 'src/hooks/useFetch'

function usePing(isLoggedIn?: boolean) {
	const { data, error } = useFetch<{ time: number }>(Apis.ping, { isLoggedIn })
	return { time: data?.time ?? 0, error }
}

export default usePing
