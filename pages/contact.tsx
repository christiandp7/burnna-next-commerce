import React, { FC } from 'react'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
// components
import { MainLayout } from '@burnna/layouts'
import { FAQHeading } from '@burnna/components'
// assets
import { HugeTitleContact } from '@burnna/svg'

const Contact: FC = () => {
	const classes = useStyles()
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
							<FAQHeading>CUSTOMER SERVICE:</FAQHeading>
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
									href="https://instagram.com/burnna___"
									target="_blank"
									rel="noopener"
									color="inherit">
									@burnna___
								</Link>
							</Typography>
							<Typography component="p" variant="body1">
								<b>TikTok:</b>{' '}
								<Link
									href="https://tiktok.com/burnna"
									target="_blank"
									rel="noopener"
									color="inherit">
									@burnna
								</Link>
							</Typography>
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
			maxWidth: '65%',
			textAlign: 'center',
			// marginTop: '18px',
			marginBottom: '12px',
			[theme.breakpoints.up('md')]: {
				maxWidth: '50%',
				// marginTop: '30px',
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
			'& p': {
				marginBottom: '16px',
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
