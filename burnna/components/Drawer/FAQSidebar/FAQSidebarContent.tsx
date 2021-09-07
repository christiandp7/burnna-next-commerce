import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import NextLink from 'next/link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { LogoSquare } from '@burnna/svg'
// data
import { faqNavigation } from '@burnna/data'
import type { NavItem } from '@burnna/data/navigation'
import { useDrawer } from '@burnna/context/DrawerContext'

const InfoSidebar: FC = () => {
	const classes = useStyles()
	const { setFaqSidebarOpen } = useDrawer()
	const { t } = useTranslation('common')

	return (
		<aside className={classes.sidebar}>
			<NextLink href="/">
				<a className={classes.logoLink}>
					<LogoSquare className={classes.logo} />
				</a>
			</NextLink>
			<div className={classes.sidebarNav}>
				{faqNavigation.map((navItem: NavItem) => (
					<NextLink href={navItem.href} key={navItem.href}>
						<a
							className={classes.sidebarLink}
							onClick={() => setFaqSidebarOpen(false)}>
							<Typography variant="h6" className={classes.sidebarLinkItem}>
								{t(navItem.label)}
							</Typography>
						</a>
					</NextLink>
				))}
			</div>
			<Grid container item justify="space-between" className={classes.footer}>
				<NextLink passHref href="/collection/men">
					<Link color="secondary" onClick={() => setFaqSidebarOpen(false)}>
						<Typography variant="h6">Men</Typography>
					</Link>
				</NextLink>
				<NextLink passHref href="/collection/women">
					<Link color="secondary" onClick={() => setFaqSidebarOpen(false)}>
						<Typography variant="h6">Women</Typography>
					</Link>
				</NextLink>
			</Grid>
		</aside>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		sidebar: {
			top: 0,
			left: 0,
			height: '100vh',
			width: '190px',
			background: theme.palette.primary.main,
			display: 'flex',
			flexDirection: 'column',
			padding: '35px 0',
			position: 'relative',
		},
		// Logo
		logo: {
			maxWidth: '100%',
			// maxHeight: '120px',
			maxHeight: '85px',
			'& path': {
				fill: theme.palette.primary.contrastText,
			},
		},
		divider: {
			padding: `${theme.spacing(3)}px 0`,
		},
		logoLink: {
			color: theme.palette.primary.contrastText,
			padding: '10px 15px',
		},
		// Sidebar Nav
		sidebarNav: {
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			justifyContent: 'center',
			alignItems: 'center',
			margin: 0,
			padding: 0,
			fontFamily: theme.typography.h6.fontFamily,
			fontWeight: 700,
			paddingBottom: theme.spacing(3),
		},
		// Sidebar Links
		sidebarLinkItem: {
			marginBottom: theme.spacing(2),
		},
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

		footer: {
			padding: `0 ${theme.spacing(3)}px`,
			paddingBottom: theme.spacing(2),
		},
	}),
)

export default InfoSidebar
