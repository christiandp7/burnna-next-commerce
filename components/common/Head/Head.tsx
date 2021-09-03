import { FC } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json'

const Head: FC = () => {
	return (
		<>
			<DefaultSeo {...config} />
			<NextHead>
				<link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="manifest" href="/site.webmanifest" key="site-manifest" /> */}
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#0A0A0A" />
			</NextHead>
		</>
	)
}

export default Head
