// import '@assets/main.css'
// import '@assets/chrome-bug.css'
// import 'keen-slider/keen-slider.min.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
// import { ManagedUIContext } from '@components/ui/context'
// custom
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { themeSettigs } from '@burnna/theme'

const theme = themeSettigs()

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
	const Layout = (Component as any).Layout || Noop

	useEffect(() => {
		document.body.classList?.remove('loading')
	}, [])

	return (
		<>
			<Head />
			<ThemeProvider theme={theme}>
				{/* <ManagedUIContext> */}
				<CssBaseline />
				<Layout pageProps={pageProps}>
					<Component {...pageProps} />
				</Layout>
				{/* </ManagedUIContext> */}
			</ThemeProvider>
		</>
	)
}
