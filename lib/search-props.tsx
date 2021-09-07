import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import commerce from '@lib/api/commerce'

export async function getSearchStaticProps({
	preview,
	locale,
	locales,
}: GetStaticPropsContext) {
	const config = { locale, locales }
	const pagesPromise = commerce.getAllPages({ config, preview })
	const siteInfoPromise = commerce.getSiteInfo({ config, preview })
	const { pages } = await pagesPromise
	const { categories, brands } = await siteInfoPromise
	// translate
	const i18n = await serverSideTranslations(locale!, ['common'])

	return {
		props: {
			pages,
			categories,
			brands,
			...i18n,
		},
		revalidate: 200,
	}
}

export type SearchPropsType = InferGetStaticPropsType<typeof getSearchStaticProps>
