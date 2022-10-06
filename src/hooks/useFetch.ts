import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'

import { Error } from 'src/types'

export enum Apis {
	ping = '/api/ping',
	login = '/api/login',
	logout = '/api/logout',
}

async function fetcher(url: string) {
	try {
		const res = await fetch(url, { credentials: 'include' })
		if (res.ok) {
			return await res.json()
		}
		const error: Error = {
			status: res.status,
		}
		throw error
	} catch (e) {
		throw e instanceof TypeError ? { status: -1 } : e
	}
}

export function useFetch<T>(api: Apis, options?: { isLoggedIn?: boolean }) {
	const url = options?.isLoggedIn ? api : ''
	const { data, error } = useSWR<T>(url, fetcher)
	return {
		data,
		error: error ? (error as Error) : undefined,
	}
}

export function useFetchImmutable<T>(api: Apis) {
	const { data, error } = useSWRImmutable<T>(api, fetcher)
	return {
		data,
		error: error ? (error as Error) : undefined,
	}
}

export function usePost(api: Apis) {
	async function post(data: any): Promise<Response | undefined> {
		try {
			return await fetch(api, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify(data),
			})
		} catch {
			return undefined
		}
	}
	return post
}
