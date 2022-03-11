import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticPropsContext } from 'next'
import cn from 'classnames'
import Image from 'next/image'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Layout } from '@components/common'
import { MainLayout } from '@burnna/layouts'

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	const i18n = await serverSideTranslations(locale!, ['common'])
	return {
		props: {
			...i18n,
		},
	}
}

const Campaign22 = () => {
	const classes = useStyles()
	return (
		<MainLayout>
			<div className={classes.root}>
				{/* Row 1 */}
				<div className={classes.row}>
					<div className={cn(classes.imageContainer, classes.img1)}>
						<Image
							unoptimized
							width={1601}
							height={2400}
							src="/images/ss22/a1.jpg"
							placeholder="blur"
							blurDataURL="/images/ss22/a1.jpg"
							layout="responsive"
						/>
						<div className="caption">
							<Typography variant="h5">“Everything is sculpture”</Typography>
							<br />
							<Typography variant="h5">
							BURNNA’S second collection is inspired by the works and ideas of artist and landscape architect, Isamu Noguchi.  As creators we consider him a touchstone of sophisticated design and interdisciplinary art. 
							</Typography>
							<br />
							<Typography variant="h5">
							In this recent campaign we explore the elements of design through our relationship with the space surrounding us. We like to focus on the contrast the soft lines of the feminine sculpted body has in regards to the clean and sharp structure of the space provided. We explore color and value through the different hues of our prints to transmit depth and emotional states, in contrast to the monochromatic grey exterior. Shape and space are the pillars of this newly found conversation, of how the space around and yourself interact harmoniously in an intimate portrait. 
							</Typography>
							<br />
							<Typography variant="h5">
							We strive to create sculptural pieces with state of the art details and body hugging technology, that rectify our main premise: that everything is a sculpture.
							</Typography>
						</div>
					</div>
				</div>
				{/* Row 2 */}
				<div className={cn(classes.row, classes.row2)}>
					<div className={classes.imageContainer}>
						<Image
							unoptimized
							width={1601}
							height={2400}
							src="/images/ss22/a2.jpg"
							placeholder="blur"
							blurDataURL="/images/ss22/a2.jpg"
							layout="responsive"
						/>
					</div>
					<div className={classes.imageContainer}>
						<Image
							unoptimized
							width={1601}
							height={2400}
							src="/images/ss22/a3.jpg"
							placeholder="blur"
							blurDataURL="/images/ss22/a3.jpg"
							layout="responsive"
						/>
					</div>
				</div>
				{/* Row 3 */}
				<div className={cn(classes.row, classes.row3, 'no-padd')}>
					<div className={classes.imageContainer}>
						<Image
							unoptimized
							width={1601}
							height={2400}
							src="/images/ss22/b2.jpg"
							placeholder="blur"
							blurDataURL="/images/ss22/b2.jpg"
							layout="responsive"
						/>
					</div>
				</div>
				{/* Row 4 */}
				<div className={cn(classes.row, classes.row4)}>
					<div className="rte">
						<div>
							{/* Credits */}
							<Typography variant="h5">CREDITS</Typography>
							<br />
							<Typography variant="h5">
								CREATIVE DIRECTORS: LAURA HARADA, ANTONELLA CAMARGO
							</Typography>
							<Typography variant="h5">
								PHOTOGRAPHERS: LESLIE SOTO, PEPE MELO
							</Typography>
							<Typography variant="h5">
								MODELS: MARIA GOMEZ, ANNETTE LUNA, ACUARELA BEARD, ISABEL PLANAS
							</Typography>
							<Typography variant="h5">STYLIST: CAVOLO</Typography>
							<Typography variant="h5">MAKEUP ARTIST: ZOE MARIE</Typography>
							<Typography variant="h5">HAIR STYLIST: YSIANA JIMENEZ</Typography>
						</div>
					</div>
					<div className={classes.imageContainer}>
						<Image
							unoptimized
							width={1601}
							height={2400}
							src="/images/ss22/b3.jpg"
							placeholder="blur"
							blurDataURL="/images/ss22/b3.jpg"
							layout="responsive"
						/>
					</div>
				</div>
				{/* Row 5 */}
				<div className={cn(classes.row, classes.row5)}>
					<div className={classes.imageContainer}>
						<Image
							unoptimized
							width={1601}
							height={2400}
							src="/images/ss22/b5.jpg"
							placeholder="blur"
							blurDataURL="/images/ss22/b5.jpg"
							layout="responsive"
						/>
					</div>
				</div>
				{/* Row 6 */}
				<div className={cn(classes.row, classes.row6)}>
					<div className={classes.imageContainer}>
						<Image
							unoptimized
							width={1601}
							height={2400}
							src="/images/ss22/n1.jpg"
							placeholder="blur"
							blurDataURL="/images/ss22/n1.jpg"
							layout="responsive"
						/>
					</div>
				</div>
				{/* Row 7 */}
				<div className={cn(classes.row, classes.row7)}>
					<div className={classes.imageContainer}>
						<Image
							unoptimized
							width={1601}
							height={2400}
							src="/images/ss22/n2.jpg"
							placeholder="blur"
							blurDataURL="/images/ss22/n2.jpg"
							layout="responsive"
						/>
					</div>
					<div className={classes.imageContainer}>
						<Image
							unoptimized
							width={1601}
							height={2400}
							src="/images/ss22/n3.jpg"
							placeholder="blur"
							blurDataURL="/images/ss22/n3.jpg"
							layout="responsive"
							objectFit="cover"
						/>
					</div>
				</div>
				{/* Row 8 */}
				<div className={cn(classes.row, classes.row8)}>
					<div className={classes.imageContainer}>
						<Image
							unoptimized
							width={1601}
							height={2400}
							src="/images/ss22/n4.jpg"
							placeholder="blur"
							blurDataURL="/images/ss22/n4.jpg"
							layout="responsive"
						/>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: '1920px',
			margin: '0 auto',
			// padding: '0 5%',
		},
		row: {
			width: '100%',
			marginBottom: theme.spacing(12),
			[theme.breakpoints.down('sm')]: {
				marginBottom: theme.spacing(5),
			},
			'&:not(.no-padd)': {
				padding: '0 5%',
			},
		},
		imageContainer: {
			'& > div': {
				maxWidth: '100%',
			},
		},

		img1: {
			width: '60%',
			'& .caption': {
				marginTop: theme.spacing(4),
				textAlign: 'justify',
				[theme.breakpoints.down('sm')]: {
					marginTop: theme.spacing(2),
				},
			},
			[theme.breakpoints.down('sm')]: {
				width: '100%',
			},
		},
		row2: {
			display: 'flex',
			'& > div': {
				width: '50%',
				'&:first-child': {
					marginRight: '4%',
				},
			},
		},
		row3: {
			display: 'flex',
			justifyContent: 'flex-end',
			'& > div': {
				width: '85%',
			},
		},
		row4: {
			display: 'flex',
			[theme.breakpoints.down('sm')]: {
				flexWrap: 'wrap',
			},
			'& > div': {
				'&:first-child': {
					width: '35%',
					display: 'flex',
					paddingRight: theme.spacing(2),
					alignItems: 'flex-end',
					marginRight: '10%',
					[theme.breakpoints.down('sm')]: {
						width: '100%',
						marginRight: 0,
						marginTop: theme.spacing(2),
						order: 1,
					},
				},
				'&:last-child': {
					width: '48%',
					[theme.breakpoints.down('sm')]: {
						width: '100%',
					},
				},
			},
		},
		row5: {
			'& > div': {
				width: '55%',
			},
		},
		row6: {
			display: 'flex',
			justifyContent: 'flex-end',
			'& > div': {
				width: '60%',
			},
		},
		row7: {
			display: 'flex',
			'& > div': {
				width: '49%',
				'&:first-child': {
					marginRight: '2%',
				},
				'&:last-child': {
					'&> div': {
						height: '100%',
					},
				},
			},
		},
		row8: {
			'& > div': {
				width: '100%',
			},
		},
	}),
)

export default Campaign22

Campaign22.Layout = Layout
