import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'
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
	const { t } = useTranslation('common')
	function pad(d: number) {
		return d < 10 ? '0' + d.toString() : d.toString()
	}

	return (
		<ul className={classes.navbar}>
			<li>
				<NextLink href="/collection/all" passHref>
					<Link>
						<Typography variant="h5" color="primary">
							{t('shopAll')}
						</Typography>
					</Link>
				</NextLink>
			</li>
			<li className={classes.hasChild}>
				<Link href="#">
					<Typography variant="h5" color="primary">
						{t('ourWorld')}
					</Typography>
				</Link>
				<ul className={cx(classes.dropdown, 'dropdown')}>
					<li>
						<NextLink href="/about" passHref>
							<Link variant="h5">{t('about')}</Link>
						</NextLink>
					</li>
					<li>
						<NextLink href="/explore" passHref>
							<Link variant="h5">{t('explore')}</Link>
						</NextLink>
					</li>
					<li>
						<NextLink href="/faq/payment" passHref>
							<Link variant="h5">FAQ</Link>
						</NextLink>
					</li>
				</ul>
			</li>
			<li className={classes.hasChild}>
				<Link href="#">
					<Typography variant="h5" color="primary">
						{t('campaign')}
					</Typography>
				</Link>
				<ul className={cx(classes.dropdown, 'dropdown')}>
					<li>
						<NextLink href="/ss21" passHref>
							<Link variant="h5">SS21</Link>
						</NextLink>
					</li>
					<li>
						<NextLink href="/ss22" passHref>
							<Link variant="h5">SS22</Link>
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
							? `${t('bag')} ${pad(data.lineItems.length)}`
							: `${t('bag')} 00`}
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
					padding: `0 ${theme.spacing(1) - 2}px`,
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
			[theme.breakpoints.down('sm')]: {
				position: 'static',
			},
			'&:hover': {
				'& .dropdown': {
					display: 'block',
					[theme.breakpoints.down('sm')]: {
						display: 'flex',
					},
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
			zIndex: 10,
			[theme.breakpoints.down('sm')]: {
				left: '0',
				justifyContent: 'space-evenly',
			},
			'& > li': {
				marginBottom: '4px',
			},
		},
	}),
)

export default HomeHeader
