import React, { FC } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import Link from '@material-ui/core/Link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { LocaleSwitcher } from '@burnna/components'
import { useDrawer } from '@burnna/context/DrawerContext'
import useCart from '@framework/cart/use-cart'

const HomeHeader: FC = () => {
	const classes = useStyles()
	const { setCartOpen } = useDrawer()
	const { data } = useCart()

	function pad(d: number) {
		return d < 10 ? '0' + d.toString() : d.toString()
	}

	return (
		<ul className={classes.navbar}>
			<li>
				<NextLink href="/collection/all" passHref>
					<Link>
						<Typography variant="h5" color="primary">
							Shop All
						</Typography>
					</Link>
				</NextLink>
			</li>
			<li className={classes.hasChild}>
				<Link href="#">
					<Typography variant="h5" color="primary">
						Our World
					</Typography>
				</Link>
				<ul className={cx(classes.dropdown, 'dropdown')}>
					<li>
						<NextLink href="/about" passHref>
							<Link variant="h5">About</Link>
						</NextLink>
					</li>
					<li>
						<NextLink href="/explore" passHref>
							<Link variant="h5">Explore</Link>
						</NextLink>
					</li>
					<li>
						<NextLink href="/faq/payment" passHref>
							<Link variant="h5">FAQ</Link>
						</NextLink>
					</li>
				</ul>
			</li>
			<li>
				<LocaleSwitcher />
			</li>
			<li>
				<Link component="button" onClick={() => setCartOpen(true)}>
					<Typography variant="h5" color="primary">
						{data && data.lineItems && data.lineItems.length > 0
							? `Bag ${pad(data.lineItems.length)}`
							: 'Bag 00'}
					</Typography>
				</Link>
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
			height: '34px',
			margin: 0,
			listStyle: 'none',
			[theme.breakpoints.down('sm')]: {
				height: '30px',
				justifyContent: 'space-around',
			},
			[theme.breakpoints.down('xs')]: {
				padding: `0 ${theme.spacing(1)}px`,
			},

			'& > li': {
				margin: `0 ${theme.spacing(1)}px`,
				padding: `0 ${theme.spacing(2)}px`,
				[theme.breakpoints.down('xs')]: {
					margin: 0,
				},
			},
			'& a': {
				textDecoration: 'none',
				// fontWeight: 700,
			},
			'& a:hover': {
				textDecoration: 'underline',
				textUnderlineOffset: '1px',
				textDecorationThickness: '1px',
				textDecorationColor: theme.palette.primary.main,
			},
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
			zIndex: 1,
			'& > li': {
				marginBottom: '4px',
			},
		},
	}),
)

export default HomeHeader
