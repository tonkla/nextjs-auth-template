import type { AppProps } from 'next/app'

import Layout from 'src/components/Layout'
import SessionProvider from 'src/components/SessionProvider'

import 'src/styles/app.css'

function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	)
}

export default App
