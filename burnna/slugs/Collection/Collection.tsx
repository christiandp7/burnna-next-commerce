import React from 'react'
import { useRouter } from 'next/router'
import useSearch from '@framework/product/use-search'
import { SearchPropsType } from '@lib/search-props'
import { useSearchMeta } from '@lib/search'
import getSlug from '@lib/get-slug'
import { Layout } from '@components/common'
import { MainLayout } from '@burnna/layouts'

const Collection = ({ categories, brands }: SearchPropsType) => {
	// console.log(categories)

	const router = useRouter()
	const { asPath, locale } = router
	const { q, sort } = router.query
	// `q` can be included but because categories and designers can't be searched
	// in the same way of products, it's better to ignore the search input if one
	// of those is selected

	const { pathname, category, brand } = useSearchMeta(asPath)
	const activeCategory = categories.find((cat: any) => cat.slug === category)
	const activeBrand = brands.find(
		(b: any) => getSlug(b.node.path) === `brands/${brand}`,
	)?.node

	const { data } = useSearch({
		search: typeof q === 'string' ? q : '',
		categoryId: activeCategory?.id,
		brandId: (activeBrand as any)?.entityId,
		sort: typeof sort === 'string' ? sort : '',
		locale,
	})
	console.log(data)

	return (
		<MainLayout>
			<h1>collections!!!</h1>
		</MainLayout>
	)
}

export default Collection

Collection.Layout = Layout
