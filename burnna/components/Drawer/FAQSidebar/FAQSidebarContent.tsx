import React, { FC } from 'react'
import NextLink from 'next/link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { LogoSquare } from '@burnna/svg'
// data
import { faqNavigationTop, faqNavigationBottom } from '@burnna/data'

const InfoSidebar: FC = () => {
	const classes = useStyles()

	return (
		<aside className={classes.sidebar}>
			<NextLink href="/">
				<a className={classes.logoLink}>
					<LogoSquare className={classes.logo} />
				</a>
			</NextLink>
			<div className={classes.sidebarNav}>
				{faqNavigationTop.map(navItem => (
					<Typography variant="h6" className={classes.sidebarLinkItem}>
						<NextLink href={navItem.href}>
							<a className={classes.sidebarLink}>{navItem.label}</a>
						</NextLink>
					</Typography>
				))}
				<div className={classes.divider}></div>
				{faqNavigationBottom.map(navItem => (
					<Typography variant="h6" className={classes.sidebarLinkItem}>
						<NextLink href={navItem.href}>
							<a className={classes.sidebarLink}>{navItem.label}</a>
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
			width: '190px',
			background: theme.palette.primary.main,
			display: 'flex',
			flexDirection: 'column',
			padding: '35px 0',
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
			marginBottom: theme.spacing(3),
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
	}),
)

export default InfoSidebar
