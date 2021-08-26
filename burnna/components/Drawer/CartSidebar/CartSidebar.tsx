import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
// components
// import CartContent from './CartContent'
import { useDrawer } from '@burnna/context/DrawerContext'
import { CartContent } from '@burnna/components/Drawer/CartSidebar'

const Cart: FC = () => {
	const classes = useStyles()

	const { cartOpen, setCartOpen } = useDrawer()

	return (
		<Drawer
			open={cartOpen}
			onClose={() => setCartOpen(false)}
			anchor="right"
			classes={{
				paper: classes.drawerPaper,
			}}
			transitionDuration={{
				enter: 550,
				exit: 350,
			}}>
			<CartContent />
		</Drawer>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawerPaper: {
			width: '440px',
			maxWidth: '100%',
			backgroundColor: theme.palette.primary.main,
			[theme.breakpoints.up(1536)]: {
				width: '480px',
			},
		},
	}),
)

export default Cart
