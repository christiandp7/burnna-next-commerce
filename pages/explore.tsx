import React, { FC } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticPropsContext } from 'next'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { MainLayout } from '@burnna/layouts'
import { HugeTitleExplore } from '@burnna/svg'
import { exploreItems } from '@burnna/data'
import type { ExploreItem } from '@burnna/data'
import { Layout } from '@components/common'

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	const i18n = await serverSideTranslations(locale!, ['common'])
	return {
		props: {
			...i18n,
		},
	}
}
function Explore() {
	const classes = useStyles()
	return (
		<MainLayout>
			<div className={classes.galleryWrapper}>
				<Grid container>
					{exploreItems.map((item: ExploreItem) => (
						<Grid key={item.img.src} item xs={item.xsCol || 6} md={item.mdCol || 4}>
							<div className={classes.imageContainer}>
								<Image
									src={item.img.src}
									alt={item.img.alt}
									width={item.img.width}
									height={item.img.height}
									layout="responsive"
									objectFit="cover"
								/>
							</div>
						</Grid>
					))}
				</Grid>
				<Container className={classes.titleWrapper}>
					<HugeTitleExplore />
				</Container>
			</div>
		</MainLayout>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		galleryWrapper: {
			position: 'relative',
			cursor: 'default',
		},
		imageContainer: {
			height: '100%',
			'& > div': {
				height: '100%',
			},
		},
		titleWrapper: {
			position: 'absolute',
			top: '36%',
			left: '50%',
			transform: 'translateX(-50%)',
			maxWidth: '65%',
			textAlign: 'center',
			// marginTop: '18px',
			marginBottom: '12px',
			[theme.breakpoints.up('md')]: {
				maxWidth: '60%',
				// marginTop: '30px',
				marginBottom: '18px',
			},
		},
	}),
)

export default Explore

Explore.Layout = Layout
