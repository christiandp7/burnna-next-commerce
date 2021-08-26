// import '@assets/main.css'
// import '@assets/chrome-bug.css'
// import 'keen-slider/keen-slider.min.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
// import { ManagedUIContext } from '@components/ui/context'
// custom
import { DrawerContextProvider } from '@burnna/context/DrawerContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { themeSettigs } from '@burnna/theme'
import NextNprogress from 'nextjs-progressbar'

const theme = themeSettigs({})

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
				<DrawerContextProvider>
					<CssBaseline />
					<Layout pageProps={pageProps}>
						<NextNprogress
							color="#0A0A0A"
							startPosition={0.3}
							stopDelayMs={500}
							height={2}
							// showOnShallow={true}
						/>
						<Component {...pageProps} />
					</Layout>
				</DrawerContextProvider>
				{/* </ManagedUIContext> */}
			</ThemeProvider>
		</>
	)
}
