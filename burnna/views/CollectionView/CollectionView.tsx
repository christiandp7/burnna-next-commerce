import React from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import useSearch from '@framework/product/use-search'
import { SearchPropsType } from '@lib/search-props'
import { useSearchMeta } from '@lib/search'
import getSlug from '@lib/get-slug'
import { Layout } from '@components/common'
import { MainLayout } from '@burnna/layouts'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
// import { LogoText } from '@burnna/svg'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { CollectionGrid } from '@burnna/components'

import SkeletonGrid from '@burnna/components/Skeleton'

const CollectionView = ({ categories, brands }: SearchPropsType) => {
	// console.log(categories)
	const { t } = useTranslation('common')
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

	const { data, isLoading } = useSearch({
		search: typeof q === 'string' ? q : '',
		categoryId: activeCategory?.id,
		brandId: (activeBrand as any)?.entityId,
		sort: typeof sort === 'string' ? sort : '',
		locale,
	})

	// console.log(data)

	const classes = useStyles()

	return (
		<MainLayout>
			<div className={classes.collectionWrapper}>
				{isLoading && <SkeletonGrid />}
				{!isLoading &&
					(data?.found ? (
						<CollectionGrid products={data?.products || []} />
					) : (
						<Box
							height="65vh"
							display="flex"
							alignItems="center"
							justifyContent="center">
							<Typography variant="body1" className={classes.comingSoon}>
								{t('comingSoon')}...
							</Typography>
						</Box>
					))}
			</div>
		</MainLayout>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		collectionWrapper: {
			position: 'relative',
		},
		// logoContainer: {
		// 	position: 'absolute',
		// 	width: '100%',
		// 	top: 0,
		// 	textAlign: 'center',
		// 	paddingTop: theme.spacing(3),
		// 	zIndex: 1,
		// 	[theme.breakpoints.down('md')]: {
		// 		display: 'none',
		// 	},
		// },
		// logo: {
		// 	width: '200px',
		// },
		comingSoon: {
			textTransform: 'uppercase',
		},
	}),
)

export default CollectionView

CollectionView.Layout = Layout
