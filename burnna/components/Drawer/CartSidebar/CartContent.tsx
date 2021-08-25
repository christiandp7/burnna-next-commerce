import React, { FC } from 'react'
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
				<AppBar elevation={0} position="static" color="transparent">
					<Toolbar disableGutters variant="dense">
						<IconButton
							aria-label="close"
							disableRipple
							color="secondary"
							edge="start"
							onClick={() => setCartOpen(false)}>
							<FiX />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Typography component="h2" variant="h4" align="center">
					Cart
				</Typography>
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
						{data!.lineItems.map((item: any) => (
							<CartItem
								key={item.id}
								item={item}
								currencyCode={data!.currency.code}
							/>
						))}
					</Scrollbars>
				)}
			</Grid>
			<Grid item className={classes.footer}>
				<div className={classes.total}>
					<Typography variant="body1" color="inherit">
						Subtotal
					</Typography>
					<Typography variant="body1" color="inherit">
						{subTotal}
					</Typography>
				</div>
				<div className={classes.total}>
					<Typography variant="h5" color="inherit">
						Total
					</Typography>
					<Typography variant="h5" color="inherit">
						{total}
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
			padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`,
			color: theme.palette.primary.contrastText,
			textTransform: 'uppercase',
			cursor: 'default',
			[theme.breakpoints.down('md')]: {
				padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
			},
		},
		header: {
			// paddingBottom: theme.spacing(3),
			borderBottom: `solid 2px ${theme.palette.neutral.main}`,
		},
		body: {
			paddingTop: theme.spacing(3),
		},
		footer: {
			paddingTop: theme.spacing(3),
		},
		total: {
			borderTop: `solid 2px ${theme.palette.neutral.main}`,
			display: 'flex',
			justifyContent: 'space-between',
			paddingTop: `${theme.spacing(1) + 2}px`,
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
