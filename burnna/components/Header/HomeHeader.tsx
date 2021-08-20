import React, { FC } from 'react'
// import { Link } from 'react-router-dom'
import NextLink from 'next/link'
import Link from '@material-ui/core/Link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const HomeHeader: FC = () => {
	const classes = useStyles()

	return (
		<ul className={classes.navbar}>
			<li>
				<NextLink href="/collection" passHref>
					<Link>
						<Typography variant="h5" color="primary">
							Shop All
						</Typography>
					</Link>
				</NextLink>
			</li>
			<li>
				<NextLink href="/" passHref>
					<Link>
						<Typography variant="h5" color="primary">
							Our World
						</Typography>
					</Link>
				</NextLink>
			</li>
			<li>
				<NextLink href="/" passHref>
					<Link>
						<Typography variant="h5" color="primary">
							Español
						</Typography>
					</Link>
				</NextLink>
			</li>
		</ul>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		navbar: {
			display: 'flex',
			justifyContent: 'flex-end',
			alignItems: 'center',
			padding: `0 ${theme.spacing(2)}px`,
			height: '55px',
			margin: 0,
			listStyle: 'none',
			[theme.breakpoints.down('xs')]: {
				justifyContent: 'center',
				padding: `0 ${theme.spacing(1)}px`,
			},

			'& li': {
				margin: `0 ${theme.spacing(3)}px`,
				[theme.breakpoints.down('xs')]: {
					margin: `0 ${theme.spacing(1)}px`,
				},
			},
			'& a': {
				textDecoration: 'none',
				fontWeight: 700,
			},
			'& a:hover': {
				textDecoration: 'underline',
				textUnderlineOffset: '1px',
				textDecorationThickness: '1px',
				textDecorationColor: theme.palette.primary.main,
			},
		},
	}),
)

export default HomeHeader
