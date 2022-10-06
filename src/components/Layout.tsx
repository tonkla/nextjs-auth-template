import { PropsWithChildren, useLayoutEffect, useRef, useState } from 'react'

import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

function Layout({ children }: PropsWithChildren) {
	const href = useRef<HTMLElement>(null)
	const fref = useRef<HTMLElement>(null)

	const [hh, setHh] = useState(0)
	const [fh, setFh] = useState(0)

	useLayoutEffect(() => {
		setHh(href?.current?.clientHeight ?? 0)
		setFh(fref?.current?.clientHeight ?? 0)
	}, [href, fref])

	return (
		<>
			<Header ref={href} />
			<main className="container mx-auto">
				<div className="flex p-4" style={{ minHeight: `calc(100vh - ${hh}px - ${fh}px)` }}>
					{children}
				</div>
			</main>
			<Footer ref={fref} />
		</>
	)
}

export default Layout
