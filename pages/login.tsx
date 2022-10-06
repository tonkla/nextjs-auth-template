import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Button from 'src/components/Button/Primary'
import Input from 'src/components/Input'
import { SessionContext } from 'src/contexts/session'
import useLogin from 'src/hooks/api/useLogin'

const schema = z.object({
	username: z.string().min(1),
	password: z.string().min(1),
})

type Schema = z.infer<typeof schema>

function Login() {
	const { isLoggedIn, setIsLoggedIn } = useContext(SessionContext)

	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const router = useRouter()

	const { logIn } = useLogin()

	const { register, handleSubmit } = useForm<Schema>({ resolver: zodResolver(schema) })

	useEffect(() => {
		if (isLoggedIn) router.replace('/')
	}, [isLoggedIn, router])

	async function onSubmit({ username, password }: Schema) {
		setIsLoading(true)
		setError('')
		if (await logIn(username, password)) {
			setIsLoggedIn(true)
		} else {
			setError('Incorrect username or password.')
		}
		setIsLoading(false)
	}

	return (
		!isLoggedIn && (
			<div className="flex grow justify-center pt-40">
				<form className="w-60" onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col items-center justify-center space-y-2 rounded-xl">
						<div className="w-full">
							<Input placeholder="Username" {...register('username')} />
						</div>
						<div className="w-full">
							<Input placeholder="Password" type="password" {...register('password')} />
						</div>
						<div className="flex w-full items-center justify-center">
							<Button type="submit" isLoading={isLoading}>
								Log In
							</Button>
						</div>
					</div>
					{error && (
						<div className="mt-4 flex w-full justify-center text-sm text-red-500">{error}</div>
					)}
				</form>
			</div>
		)
	)
}

export default Login
