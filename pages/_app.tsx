// import '@assets/main.css'
// import '@assets/chrome-bug.css'
// import 'keen-slider/keen-slider.min.css'
// swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/effect-fade/effect-fade.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper/core'
// import { ManagedUIContext } from '@components/ui/context'
// custom
import { DrawerContextProvider } from '@burnna/context/DrawerContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { themeSettigs } from '@burnna/theme'
import NextNprogress from 'nextjs-progressbar'
import { appWithTranslation } from 'next-i18next'

const theme = themeSettigs({})

SwiperCore.use([EffectFade, Navigation, Pagination])

const Noop: FC = ({ children }) => <>{children}</>

const MyApp = ({ Component, pageProps }: AppProps) => {
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

export default appWithTranslation(MyApp)
