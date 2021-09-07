import React, { FC, useContext } from 'react'
import cx from 'classnames'
import { useTranslation } from 'next-i18next'
import NextLink from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Link from '@material-ui/core/Link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Burguer, LogoText } from '@burnna/svg'
import { useDrawer } from '@burnna/context/DrawerContext'
import useCart from '@framework/cart/use-cart'
import LocaleSwitcher from '../LocaleSwitcher'

const HEADER_HEIGHT: number = 40
interface Props {
	faqLayout?: boolean
}

const Header: FC<Props> = ({ faqLayout = false }) => {
	const classes = useStyles()
	const { setSidebarOpen, setFaqSidebarOpen, setCartOpen } = useDrawer()
	const { data } = useCart()
	const { t } = useTranslation('common')

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	function pad(d: number) {
		return d < 10 ? '0' + d.toString() : d.toString()
	}

	return (
		<div className={classes.appBarWrapper}>
			<AppBar
				className={cx({ infoLayoutHeader: faqLayout }, classes.appBar)}
				position="fixed">
				<Container>
					<Toolbar className={classes.toolbar} disableGutters={true}>
						<Grid container spacing={0}>
							<Grid item container alignItems="center" xs>
								{faqLayout ? (
									<Hidden lgUp>
										<IconButton
											edge="start"
											className={classes.menuButton}
											color="inherit"
											aria-label="menu"
											onClick={() => setFaqSidebarOpen(true)}>
											<Burguer />
										</IconButton>
									</Hidden>
								) : (
									<IconButton
										edge="start"
										className={classes.menuButton}
										color="inherit"
										aria-label="menu"
										onClick={() => setSidebarOpen(true)}>
										<Burguer />
									</IconButton>
								)}
								<Hidden mdDown>
									<ul className={`${classes.linklist} ${classes.linklistLeft}`}>
										<li>
											<NextLink href="/collection/women" passHref>
												<Link className={classes.link}>{t('women')}</Link>
											</NextLink>
										</li>
										<li>
											<NextLink href="/collection/men" passHref>
												<Link className={classes.link}>{t('men')}</Link>
											</NextLink>
										</li>
										<li className={classes.hasChild}>
											<Link className={classes.link} underline="none" href="#">
												{t('ourWorld')}
											</Link>
											<ul className={cx(classes.dropdown, 'dropdown')}>
												<li>
													<NextLink href="/about" passHref>
														<Link>{t('about')}</Link>
													</NextLink>
												</li>
												<li>
													<NextLink href="/campaign" passHref>
														<Link>{t('campaign')}</Link>
													</NextLink>
												</li>
												<li>
													<NextLink href="/explore" passHref>
														<Link>{t('explore')}</Link>
													</NextLink>
												</li>
												<li>
													<NextLink href="/faq/payment" passHref>
														<Link>FAQ</Link>
													</NextLink>
												</li>
											</ul>
										</li>
									</ul>
								</Hidden>
							</Grid>
							<Grid item container justifyContent="center" xs={4} sm={2}>
								<div className={cx(classes.logoContainer, 'fixed')}>
									<NextLink href="/" passHref>
										<Link className={classes.logoLink}>
											<LogoText className={classes.logo} />
										</Link>
									</NextLink>
								</div>
							</Grid>
							<Grid item container xs justifyContent="flex-end" alignItems="center">
								<Hidden mdDown>
									<ul className={classes.linklist}>
										<li>
											<LocaleSwitcher />
										</li>
										<li>
											<Button
												className={classes.link}
												variant="text"
												disableRipple={true}
												onClick={() => setCartOpen(true)}>
												{data && data.lineItems && data.lineItems.length > 0
													? `${t('bag')} ${pad(data.lineItems.length)}`
													: `${t('bag')} 00`}
											</Button>
										</li>
									</ul>
								</Hidden>
								<Hidden lgUp>
									{/* <IconButton
										edge="end"
										className={classes.cartButton}
										color="inherit"
										aria-label="menu"
										onClick={() => setCartOpen(true)}>
										{data && data.lineItems && data.lineItems.length > 0 ? (
											<Badge
												badgeContent={data?.lineItems.length}
												color="primary"
												anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
												<HiOutlineShoppingBag size="28" />
											</Badge>
										) : (
											<HiOutlineShoppingBag size="28" />
										)}
									</IconButton> */}
									<Link
										className={cx(classes.link, classes.bagMobile)}
										// variant="text"
										onClick={() => setCartOpen(true)}>
										{data && data.lineItems && data.lineItems.length > 0
											? `${t('bag')} ${pad(data.lineItems.length)}`
											: `${t('bag')} 00`}
									</Link>
								</Hidden>
							</Grid>
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		// AppBar
		appBarWrapper: {},
		appBar: {
			backgroundColor: theme.palette.cream.main,
			textTransform: 'uppercase',
			boxShadow: 'none',
			[theme.breakpoints.up('md')]: {
				height: HEADER_HEIGHT,
			},
			'&.infoLayoutHeader': {
				[theme.breakpoints.up('lg')]: {
					paddingLeft: '190px',
				},
			},
		},
		// Toolbar
		toolbar: {
			position: 'relative',
			justifyContent: 'space-between',
			listStyle: 'none',
			padding: 0,
			minHeight: HEADER_HEIGHT,
			[theme.breakpoints.down('md')]: {
				justifyContent: 'center',
			},
			[theme.breakpoints.down('sm')]: {
				minHeight: HEADER_HEIGHT,
			},
		},
		// Links
		linklist: {
			display: 'flex',
			alignItems: 'center',
			margin: 0,
			padding: 0,
			listStyle: 'none',
			'& > li': {
				margin: `0 ${theme.spacing(2)}px`,
				color: theme.palette.primary.main,
				[theme.breakpoints.down('sm')]: {
					display: 'none',
				},
			},
		},
		linklistLeft: {
			flexGrow: 1,
			justifyContent: 'space-evenly',
		},
		linklistRight: {
			justifyContent: 'flex-end',
		},
		link: {
			// fontFamily: theme.typography.h6.fontFamily,
			fontWeight: 200,
			fontSize: theme.typography.subtitle1.fontSize,
			color: theme.palette.primary.main,
			padding: '5px 8px',
			textDecoration: 'none',
			textUnderlineOffset: '2px',
			textDecorationThickness: 'auto',
			'&.active': {
				// textDecoration: 'underline',
			},
			'&:hover': {
				textDecoration: 'underline',
				background: 'transparent',
			},
			'& > span:not(.MuiButton-label)': {
				fontWeight: 400,
				// fontFamily: '"Proxima Nova Condensed"',
				letterSpacing: '0.5px',
			},
		},
		// Logo
		logoLink: {
			lineHeight: 0,
		},
		logoContainer: {
			'&.fixed': {
				[theme.breakpoints.up('lg')]: {
					position: 'relative',
					bottom: '-140%',
				},
			},
		},
		logo: {
			maxWidth: 160,
			[theme.breakpoints.down('lg')]: {
				maxWidth: 120,
			},
			[theme.breakpoints.down('sm')]: {
				maxWidth: 110,
			},
			[theme.breakpoints.down('xs')]: {
				maxWidth: 95,
			},
			[theme.breakpoints.up(1599)]: {
				maxWidth: 180,
			},
		},
		// desktop
		desktopNav: {
			[theme.breakpoints.down('md')]: {
				display: 'none',
			},
		},
		// menuButton
		menuButton: {
			padding: '10px 8px',
			color: theme.palette.neutral.main,
			[theme.breakpoints.down('md')]: {
				position: 'absolute',
				left: theme.spacing(1),
			},
			// [theme.breakpoints.down('sm')]: {
			// 	padding: theme.spacing(1),
			// },
			'& svg': {
				width: '20px',
				height: 'auto',
				// [theme.breakpoints.down('sm')]: {
				// 	width: '26px',
				// 	height: '20px',
				// },
				'& path': {
					stroke: theme.palette.neutral.main,
				},
			},
			'&:hover': {
				'& svg': {
					'& path': {
						stroke: theme.palette.primary.main,
					},
				},
			},
		},
		cartButton: {
			position: 'absolute',
			right: theme.spacing(1),
			color: theme.palette.neutral.main,
			[theme.breakpoints.down('sm')]: {
				padding: theme.spacing(1),
			},
			'&:active': {
				color: theme.palette.primary.main,
			},
			'& svg': {
				width: '28px',
				height: '28px',
				[theme.breakpoints.down('sm')]: {
					width: '24px',
					height: '24px',
				},
			},
			'& path': {
				strokeWidth: '1.3px',
			},
		},
		bagMobile: {
			paddingRight: '4px',
		},

		// dropdown menu
		hasChild: {
			position: 'relative',
			'&:hover': {
				'& .dropdown': {
					display: 'block',
				},
			},
		},
		dropdown: {
			display: 'none',
			position: 'absolute',
			listStyle: 'none',
			minWidth: '100%',
			backgroundColor: theme.palette.cream.main,
			paddingTop: theme.spacing(2),
			padding: theme.spacing(1),
			'& > li': {
				marginBottom: '4px',
			},
		},
	}),
)

export default Header
