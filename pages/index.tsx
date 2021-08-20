import commerce from '@lib/api/commerce'
// import { Layout } from '@components/common'
// import { ProductCard } from '@components/product'
// import { Grid, Marquee, Hero } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticProps({
	preview,
	locale,
	locales,
}: GetStaticPropsContext) {
	const config = { locale, locales }
	const productsPromise = commerce.getAllProducts({
		variables: { first: 6 },
		config,
		preview,
		// Saleor provider only
		...({ featured: true } as any),
	})
	const pagesPromise = commerce.getAllPages({ config, preview })
	const siteInfoPromise = commerce.getSiteInfo({ config, preview })
	const { products } = await productsPromise
	const { pages } = await pagesPromise
	const { categories, brands } = await siteInfoPromise

	return {
		props: {
			products,
			categories,
			brands,
			pages,
		},
		revalidate: 60,
	}
}

export default function Home({
	products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return <>Home Page</>
}

// Home.Layout = Layout
