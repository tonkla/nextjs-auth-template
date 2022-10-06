import Link from 'next/link'
import { ComponentProps, forwardRef, MouseEvent, useContext } from 'react'

import { SessionContext } from 'src/contexts/session'
import useLogout from 'src/hooks/api/useLogout'

const Header = forwardRef<HTMLElement, ComponentProps<'header'>>(function Header(_, ref) {
	const { isLoggedIn, setIsLoggedIn } = useContext(SessionContext)

	const { logOut } = useLogout()

	async function handleLogout(e: MouseEvent<HTMLAnchorElement>) {
		e.preventDefault()
		setIsLoggedIn(false)
		logOut(isLoggedIn)
	}

	return (
		<header className="container mx-auto" ref={ref}>
			<div className="flex p-4">
				<div className="w-1/2">
					<Link href="/">
						<a>Home</a>
					</Link>
				</div>
				<div className="flex w-1/2 justify-end">
					{isLoggedIn ? (
						<Link href="/logout">
							<a className="select-none" onClick={handleLogout}>
								Log Out
							</a>
						</Link>
					) : (
						<Link href="/login">
							<a className="select-none">Log In</a>
						</Link>
					)}
				</div>
			</div>
		</header>
	)
})

export default Header
