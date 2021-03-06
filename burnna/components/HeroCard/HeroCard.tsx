import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import NextLink from 'next/link'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

interface Props {
	image: {
		src: string
		width: number
		height: number
	}
	link: {
		title: string
		link: string
	}
}

const HeroCard: FC<Props> = ({ image, link }) => {
	const classes = useStyles()
	const { t } = useTranslation('common')

	return (
		<NextLink href={link.link}>
			<a className={classes.rootLink}>
				<Box className={classes.hero}>
					<div className={classes.heroImgWrapper}>
						<Image
							quality={85}
							src={image.src}
							alt={link.title}
							width={image.width}
							height={image.height}
							layout="responsive"
							objectFit="cover"
						/>
					</div>
					<Box className={classes.heroLinkContainer}>
						<NextLink href={link.link} passHref key={link.title}>
							<Link color="secondary" className={classes.heroLink}>
								<Typography component="h2" variant="body1">
									{t(link.title)}
								</Typography>
							</Link>
						</NextLink>
					</Box>
				</Box>
			</a>
		</NextLink>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		hero: {
			position: 'relative',
			height: '100%',
			userSelect: 'none',
			userDrag: 'none',
			'&::before': {
				content: '""',
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: theme.palette.primary.main,
				opacity: 0,
				zIndex: 1,
				transition: 'opacity ease .2s',
			},
			'&:hover': {
				'&::before': {
					opacity: 0.4,
				},
			},
		},
		rootLink: {},
		heroImgWrapper: {
			position: 'absolute',
			top: '0',
			right: '0',
			width: '100%',
			height: '100%',
			'& > div': {
				height: '100%',
			},
		},
		heroLinkContainer: {
			position: 'absolute',
			padding: `${theme.spacing(1)}px ${theme.spacing(2) - 4}px`,
			zIndex: 2,
		},
		heroLink: {
			// color: theme.palette.primary.main,
			textDecoration: 'none',
			'&:hover': {
				textDecoration: 'underline',
				textUnderlineOffset: '1px',
				textDecorationThickness: 'from-font',
			},
			'& h2': {
				fontWeight: 400,
				textTransform: 'uppercase',
			},
		},
	}),
)

export default HeroCard
