import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid'
// import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
// import Link from '@material-ui/core/Link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import parse from 'html-react-parser'
// components
import { MainLayout } from '@burnna/layouts'
// import { FAQHeading } from '@burnna/components'
// assets
import { HugeTitleContact } from '@burnna/svg'
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
		variables: { id: 'Z2lkOi8vc2hvcGlmeS9QYWdlLzg1MjE2NTI2NTIx' },
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

function Contact({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
	const classes = useStyles()
	const textContent = page ? page?.body : ''
	return (
		<MainLayout>
			<Container className={classes.titleWrapper}>
				<HugeTitleContact />
			</Container>
			<Grid container>
				<Grid item xs={12} md={6}>
					<Image
						className={classes.image}
						src="/images/contact/contact-img.jpg"
						alt="contact img"
						width={1037}
						height={1051}
						layout="responsive"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<div className={classes.rteWrapper}>
						<div className={classes.rte}>
							{parse(textContent)}
							{/* <FAQHeading>CUSTOMER SERVICE:</FAQHeading>
							<Typography component="p" variant="body1">
								Monday to Friday: 9am to 6pm
							</Typography>
							<Typography component="p" variant="body1">
								<b>Whatsapp:</b>
							</Typography>
							<Typography component="p" variant="body1">
								+57 34700000 - Colombia & Ecuador
								<br />
								+31 0000000 - República Dominicana
							</Typography>
							<Typography component="p" variant="body1">
								<b>General:</b>{' '}
								<Link href="mailto:hello@burnna.com" color="inherit">
									hello@burnna.com
								</Link>
								<br />
								<b>Sales & customer service:</b>{' '}
								<Link href="mailto:contact@burnna.com" color="inherit">
									contact@burnna.com
								</Link>
								<br />
								<b>Press:</b>{' '}
								<Link href="mailto:press@burnna.com" color="inherit">
									press@burnna.com
								</Link>
							</Typography>
							<br />
							<FAQHeading>CONNECT</FAQHeading>
							<Typography component="p" variant="body1">
								<b>Instagram:</b>{' '}
								<Link
									href="https://instagram.com/burnnaswim"
									target="_blank"
									rel="noopener"
									color="inherit">
									@burnnaswim
								</Link>
							</Typography> */}
							{/* <Typography component="p" variant="body1">
								<b>TikTok:</b>{' '}
								<Link
									href="https://tiktok.com/burnnaswim"
									target="_blank"
									rel="noopener"
									color="inherit">
									@burnnaswim
								</Link>
							</Typography> */}
						</div>
					</div>
				</Grid>
			</Grid>
		</MainLayout>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		titleWrapper: {
			maxWidth: '40%',
			textAlign: 'center',
			marginTop: '10px',
			marginBottom: '6px',
			[theme.breakpoints.up('md')]: {
				maxWidth: '40%',
				// marginTop: '30px',
				marginTop: '22px',
				marginBottom: '18px',
			},
		},
		image: {
			width: '100%',
		},
		rteWrapper: {
			display: 'flex',
			alignItems: 'center',
			height: '100%',
			justifyContent: 'center',
		},
		rte: {
			padding: '40px 30px',
			'& h2, & h3': {
				fontWeight: 700,
				fontFamily: theme.typography.h6.fontFamily,
				textUnderlineOffset: '4px',
				marginBottom: theme.spacing(3),
			},
			'& p': {
				marginBottom: '16px',
			},
			'& a': {
				color: theme.palette.primary.main,
			},
			// [theme.breakpoints.down('md')]: {},
		},
		title: {
			textTransform: 'uppercase',
			fontWeight: 700,
			fontFamily: theme.typography.h6.fontFamily,
			textDecoration: 'underline',
			textUnderlineOffset: '4px',
			marginBottom: '30px',
		},
	}),
)

export default Contact

Contact.Layout = Layout
