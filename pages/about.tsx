import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
import Image from 'next/image'
//  components
import { MainLayout } from '@burnna/layouts'
import { Layout } from '@components/common'
// import Heading from '../components/Typography/Heading'
// assets
// import { HugeTitleAbout } from '@burnna/svg'

function About() {
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
						</div>
					</Grid>
					<Grid item xs={12} md={6}>
						<div className={classes.rte}>
							<Typography className={classes.pageTitle} component="h1" variant="h6">
								About
							</Typography>
							<Typography className={classes.title} component="h2" variant="h6">
								Who are we?
							</Typography>
							<Typography component="p" variant="body1">
								A brand propelled by the firm belief that great things come from
								connection. Connection to one’s self and between extraordinary
								individuals who have a life’s vision and act upon it.
							</Typography>
							<Typography component="p" variant="body1">
								BURNNA was created, not with the sole purpose of selling beach and
								resort-wear, but rather more with the intention of advocating for a
								lifestyle propelled by the leisure and exoticism that fill our native
								lands through digital narratives and actionable content.
							</Typography>
						</div>
						<div className={classes.rte}>
							<Typography className={classes.title} component="h2" variant="h6">
								How were we created?
							</Typography>
							<Typography component="p" variant="body1">
								BURNNA was founded in 2021 by Antonella Camargo and Laura Harada.
								Both stem their roots in different regions of Latin America, one with
								an Andean spirit and the other with a Caribbean soul, this
								complementation became an essential aspect of the decision-making
								process when offering a multifaceted brand experience.
							</Typography>
							<Typography component="p" variant="body1">
								Upon meeting in university they shared a passion for traveling,
								connecting with new people and experiencing life from outside their
								comfort zone. This brewed a depth of appreciating different
								backgrounds and recognising the beauty in the contrasts of each.
								“Inspired by the ideas and experiences collected over the years, we
								decided to combine our love of fashion, art, photography, culture,
								and joie de vivre to create a platform that expresses our beliefs.”
							</Typography>
							<Typography component="p" variant="body1">
								Despite the newborn challenges sparked during and post the pandemic,
								they ceased to see an opportunity with buoyancy and resilience in
								every step of the way, approaching the whole process of starting a
								brand with much more perspective and resourcefulness than it would’ve
								been required in different times.
							</Typography>
						</div>
					</Grid>
				</Grid>
			</div>
		</MainLayout>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		pageWrapper: {
			// marginTop: theme.spacing(4),
			marginBottom: theme.spacing(2),
			[theme.breakpoints.down('md')]: {
				marginTop: 0,
			},
		},
		imageContainer: {
			width: '100%',
			'& > div': {
				width: '100%',
			},
		},
		// Text
		rte: {
			padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
			'& p': {
				marginBottom: '16px',
			},
		},
		pageTitle: {
			fontWeight: theme.typography.fontWeightMedium,
			fontSize: theme.spacing(8),
			marginBottom: theme.spacing(3),
			marginTop: theme.spacing(3),
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.spacing(6),
				marginBottom: theme.spacing(2),
			},
		},
		title: {
			textTransform: 'uppercase',
			fontWeight: 700,
			fontSize: theme.typography.h5.fontSize,
			textUnderlineOffset: '4px',
			marginBottom: theme.spacing(3),
			[theme.breakpoints.down('sm')]: {
				marginBottom: theme.spacing(2),
			},
		},
	}),
)

export default About

About.Layout = Layout
