import React, { FC } from 'react'
import cx from 'classnames'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import { FiX } from 'react-icons/fi'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { useDrawer } from '@burnna/context/DrawerContext'
import { CartItem } from '@burnna/components/Drawer/CartSidebar'
import useCart from '@framework/cart/use-cart'
import usePrice from '@framework/product/use-price'

const CartContent: FC = () => {
	const { setCartOpen } = useDrawer()
	const classes = useStyles()
	const { data, isLoading, isEmpty } = useCart()
	const { price: subTotal } = usePrice(
		data && {
			amount: Number(data.subtotalPrice),
			currencyCode: data.currency.code,
		},
	)
	const { price: total } = usePrice(
		data && {
			amount: Number(data.totalPrice),
			currencyCode: data.currency.code,
		},
	)
	return (
		<Grid container wrap="nowrap" direction="column" className={classes.root}>
			<Grid item className={classes.header}>
				<div className={classes.wrapper}>
					<AppBar elevation={0} position="static" color="transparent">
						<Toolbar disableGutters variant="dense" className={classes.toolbar}>
							<IconButton
								aria-label="close"
								disableRipple
								color="secondary"
								edge="start"
								className={classes.close}
								onClick={() => setCartOpen(false)}>
								<FiX />
							</IconButton>
							<Typography
								className={classes.title}
								component="h2"
								variant="h6"
								align="center">
								Cart
							</Typography>
						</Toolbar>
					</AppBar>
				</div>
			</Grid>
			<Grid item xs className={classes.body}>
				{isEmpty ? (
					<Typography align="center">Yout Cart is empty.</Typography>
				) : (
					<Scrollbars
						style={{ height: '100%' }}
						autoHide
						autoHideTimeout={2000}
						autoHideDuration={300}>
						<div className={classes.wrapper}>
							{data!.lineItems.map((item: any) => (
								<CartItem
									key={item.id}
									item={item}
									currencyCode={data!.currency.code}
								/>
							))}
						</div>
					</Scrollbars>
				)}
			</Grid>
			<Grid item className={cx(classes.footer, classes.wrapper)}>
				<div className={classes.subtotal}>
					<ul>
						<li className={classes.subtotalRow}>
							<Typography variant="body1" color="inherit">
								Subtotal
							</Typography>
							<Typography variant="body1" color="inherit">
								{subTotal}
							</Typography>
						</li>
						<li className={classes.subtotalRow}>
							<Typography variant="body1" color="inherit">
								Taxes
							</Typography>
							<Typography variant="body1" color="inherit">
								Calculated at checkout
							</Typography>
						</li>
						<li className={classes.subtotalRow}>
							<Typography variant="body1" color="inherit">
								Shipping
							</Typography>
							<Typography variant="body1" color="inherit">
								<b>FREE</b>
							</Typography>
						</li>
					</ul>
				</div>
				<div className={classes.total}>
					<Typography variant="h5" color="inherit">
						<b>Total</b>
					</Typography>
					<Typography variant="h5" color="inherit">
						<b>{total}</b>
					</Typography>
				</div>
				{isEmpty ? (
					<Button
						variant="contained"
						size="large"
						fullWidth
						href="/"
						className={classes.checkoutButton}
						color="secondary">
						Continue Shopping
					</Button>
				) : (
					<Button
						variant="contained"
						size="large"
						href="/checkout"
						fullWidth
						className={classes.checkoutButton}
						color="secondary">
						Proceed to Checkout ({total})
					</Button>
				)}
			</Grid>
		</Grid>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			height: '100%',
			paddingTop: theme.spacing(2),
			paddingBottom: theme.spacing(3),
			color: theme.palette.primary.contrastText,
			textTransform: 'uppercase',
			cursor: 'default',
			[theme.breakpoints.down(1536)]: {
				paddingTop: theme.spacing(1),
			},
		},
		header: {
			paddingBottom: theme.spacing(1),
			borderBottom: `solid 1px ${theme.palette.neutral.main}`,
			[theme.breakpoints.down(1536)]: {
				paddingBottom: 0,
			},
		},
		toolbar: {
			justifyContent: 'center',
		},
		close: {
			position: 'absolute',
			left: '-4px',
		},
		title: {
			fontSize: theme.typography.h4.fontSize,
		},
		body: {
			paddingTop: theme.spacing(3),
			paddingBottom: theme.spacing(1),
			[theme.breakpoints.down(1536)]: {
				paddingTop: theme.spacing(2),
			},
		},
		wrapper: {
			paddingLeft: theme.spacing(4),
			paddingRight: theme.spacing(4),
			[theme.breakpoints.down(1536)]: {
				paddingLeft: theme.spacing(3),
				paddingRight: theme.spacing(3),
			},
		},
		footer: {
			paddingTop: theme.spacing(2),
			borderTop: `solid 1px ${theme.palette.neutral.main}`,
		},
		subtotal: {
			paddingBottom: theme.spacing(1),
			textTransform: 'none',
			'& > ul': {
				margin: 0,
				padding: 0,
				listStyle: 'none',
			},
		},
		subtotalRow: {
			display: 'flex',
			justifyContent: 'space-between',
			marginBottom: `${theme.spacing(1) - 4}px`,
		},
		total: {
			borderTop: `solid 1px ${theme.palette.neutral.main}`,
			display: 'flex',
			justifyContent: 'space-between',
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(3),
		},
		checkoutButton: {
			fontSize: '1.15rem',
			fontWeight: 600,
			paddingTop: '10px',
			paddingBottom: '10px',
		},
	}),
)

export default CartContent
