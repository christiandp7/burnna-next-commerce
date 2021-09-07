import React, { FC } from 'react'
import NextLink from 'next/link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { LogoSquare } from '@burnna/svg'
import { sidebarNavigation } from '@burnna/data'
import type { NavItem } from '@burnna/data/navigation'
import { useDrawer } from '@burnna/context/DrawerContext'

const Sidebar: FC = () => {
	const classes = useStyles()
	const { setSidebarOpen } = useDrawer()

	return (
		<aside className={classes.sidebar}>
			<NextLink href="/">
				<a className={classes.logoLink}>
					<LogoSquare className={classes.logo} />
				</a>
			</NextLink>
			<div className={classes.sidebarNav}>
				{sidebarNavigation.map((navItem: NavItem) => (
					<Typography key={navItem.href} variant="h6">
						<NextLink href={navItem.href}>
							<a
								className={classes.sidebarLink}
								onClick={() => setSidebarOpen(false)}>
								{navItem.label}
							</a>
						</NextLink>
					</Typography>
				))}
			</div>
		</aside>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		sidebar: {
			top: 0,
			left: 0,
			height: '100vh',
			maxHeight: '100vh',
			width: '190px',
			background: theme.palette.primary.main,
			display: 'flex',
			flexDirection: 'column',
			padding: '35px 0',
			[theme.breakpoints.down('sm')]: {
				padding: '22px 0',
			},
		},
		// Logo
		logo: {
			maxWidth: '100%',
			maxHeight: '85px',
			'& path': {
				fill: theme.palette.primary.contrastText,
			},
			[theme.breakpoints.down('sm')]: {
				maxHeight: '70px',
			},
		},
		logoLink: {
			color: theme.palette.primary.contrastText,
			padding: '10px 15px',
			[theme.breakpoints.down('sm')]: {
				padding: '5px 10px',
			},
		},
		// Sidebar Nav
		sidebarNav: {
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			margin: 0,
			padding: 0,
			fontFamily: theme.typography.h6.fontFamily,
			fontWeight: 700,
		},
		// Sidebar Links
		sidebarLink: {
			padding: '5px 8px',
			// fontSize: '1.1rem',
			fontSize: theme.typography.subtitle1.fontSize,
			letterSpacing: '1px',
			color: theme.palette.primary.contrastText,
			textDecoration: 'none',
			'&:hover': {
				textDecoration: 'underline',
				textDecorationThickness: '1px',
				textUnderlineOffset: '3px',
			},
		},
	}),
)

export default Sidebar
