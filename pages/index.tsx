import commerce from '@lib/api/commerce'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { makeStyles, createStyles, Theme } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { HomeLayout } from '@burnna/layouts'
import { HeroCard } from '@burnna/components'
import { Layout } from '@components/common'
import { LogoText } from '@burnna/svg'

// import { ProductCard } from '@components/product'
// import { Grid, Marquee, Hero } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'

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
	categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const classes = useStyles()

	const womenLink = { title: 'shop women', link: '/collection/women' }
	const menLink = { title: 'shop men', link: '/collection/men' }

	const menImage = { src: '/images/home/men_new.jpg', width: 1000, height: 1117 }
	const womenImage = { src: '/images/home/women_new.jpg', width: 828, height: 1039 }

	return (
		<HomeLayout>
			<Box className={classes.heroContainer}>
				<Grid container className={classes.container} spacing={0}>
					<Grid className={classes.column} item xs={12} md={6}>
						<HeroCard image={menImage} link={menLink} />
					</Grid>
					<Grid className={classes.column} item xs={12} md={6}>
						<HeroCard image={womenImage} link={womenLink} />
					</Grid>
				</Grid>
				<Box className={classes.logoContainer}>
					<LogoText className={classes.logoImg} />
				</Box>
			</Box>
		</HomeLayout>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		heroContainer: {
			position: 'relative',
		},
		container: {
			height: 'calc(100vh - 34px)',
		},
		column: {
			height: '100%',
			[theme.breakpoints.down('sm')]: {
				height: '50%',
			},
		},
		// Logo
		logoContainer: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translateX(-50%) translateY(-50%)',
			zIndex: 2,
			width: '40%',
		},
		logoImg: {
			userSelect: 'none',
			userDrag: 'none',
			'& path': {
				fill: theme.palette.primary.contrastText,
			},
		},
	}),
)

Home.Layout = Layout
