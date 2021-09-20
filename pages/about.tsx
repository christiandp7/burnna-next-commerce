import React, { FC } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import parse from 'html-react-parser'
import Image from 'next/image'
//  components
import { MainLayout } from '@burnna/layouts'
import { Layout } from '@components/common'
// lib
import commerce from '@lib/api/commerce'

export async function getStaticProps({
	locale,
	locales,
	preview,
}: GetStaticPropsContext) {
	const config = { locale, locales }
	const pagePromise = commerce.getPage({
		variables: { id: 'Z2lkOi8vc2hvcGlmeS9QYWdlLzg1MTUxNTgwMzQ1' },
		config,
		preview,
	})
	const { page } = await pagePromise
	const i18n = await serverSideTranslations(locale!, ['common'])
	console.log(page)
	return {
		props: {
			page,
			...i18n,
		},
	}
}

// function About() {
function About({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
	// console.log(page)
	const textContent = page ? page?.body : ''
	const classes = useStyles()
	return (
		<MainLayout>
			<div className={classes.pageWrapper}>
				<Grid container>
					<Grid item xs={12} md={6}>
						<div className={classes.imageContainer}>
							<Image
								src="/images/about/about-img.jpg"
								alt="About image"
								width={1200}
								height={1499}
								layout="responsive"
							/>
							<Typography className={classes.pageTitle} component="h1" variant="h6">
								About
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={6}>
						<div className={classes.rte}>{parse(textContent)}</div>
					</Grid>
				</Grid>
			</div>
		</MainLayout>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		pageWrapper: {
			marginBottom: theme.spacing(2),
			[theme.breakpoints.down('md')]: {
				marginTop: 0,
			},
		},
		imageContainer: {
			position: 'relative',
			width: '100%',
			'& > div': {
				width: '100%',
			},
		},
		// Text
		rte: {
			marginTop: theme.spacing(8),
			padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
			'& h2': {
				textTransform: 'uppercase',
				fontWeight: 700,
				fontSize: theme.typography.h5.fontSize,
				textUnderlineOffset: '4px',
				marginBottom: theme.spacing(2),
				[theme.breakpoints.down('sm')]: {
					marginBottom: theme.spacing(1),
				},
			},
			'& p': {
				marginBottom: '16px',
			},
		},
		pageTitle: {
			position: 'absolute',
			top: '8%',
			width: '100%',
			textAlign: 'center',
			zIndex: 1,
			fontWeight: theme.typography.fontWeightMedium,
			fontSize: theme.spacing(5),
			marginBottom: theme.spacing(3),
			marginTop: theme.spacing(3),
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.spacing(6),
				marginBottom: theme.spacing(2),
			},
		},
	}),
)

export default About

About.Layout = Layout
