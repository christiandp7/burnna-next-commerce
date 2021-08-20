import { FC } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json'

const Head: FC = () => {
	return (
		<>
			<DefaultSeo {...config} />
			<NextHead>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="manifest" href="/site.webmanifest" key="site-manifest" />
				<meta name="theme-color" content="#0A0A0A" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;600&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;600;700&display=swap"
					rel="stylesheet"
				/>
			</NextHead>
		</>
	)
}

export default Head
