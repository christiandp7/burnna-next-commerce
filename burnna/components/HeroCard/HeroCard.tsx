import { FC } from 'react'
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

	return (
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
					<Link className={classes.heroLink}>
						<Typography component="h2" variant="body1">
							{link.title}
						</Typography>
					</Link>
				</NextLink>
			</Box>
		</Box>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		hero: {
			position: 'relative',
			height: '100%',
			userSelect: 'none',
			userDrag: 'none',
		},
		heroImgWrapper: {
			position: 'absolute',
			top: '0',
			right: '0',
			width: '100%',
			height: '100%',
			'& > div': {
				// width: '100%',
				height: '100%',
			},
		},
		heroLinkContainer: {
			position: 'absolute',
			padding: `${theme.spacing(1)}px ${theme.spacing(2) - 4}px`,
		},
		heroLink: {
			color: theme.palette.primary.main,
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
