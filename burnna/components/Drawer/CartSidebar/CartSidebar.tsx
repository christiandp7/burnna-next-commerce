import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
// components
// import CartContent from './CartContent'
import { useDrawer } from '@burnna/context/DrawerContext'
import { CartContent } from '@burnna/components/Drawer/CartSidebar'

const Cart: FC = () => {
	const classes = useStyles()
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
	const { cartOpen, setCartOpen } = useDrawer()

	return (
		<SwipeableDrawer
			open={cartOpen}
			onClose={() => setCartOpen(false)}
			onOpen={() => setCartOpen(true)}
			anchor="right"
			classes={{
				paper: classes.drawerPaper,
			}}
			transitionDuration={{
				enter: 400,
				exit: 350,
			}}
			disableSwipeToOpen
			disableBackdropTransition={!iOS}
			disableDiscovery={iOS}>
			<CartContent />
		</SwipeableDrawer>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawerPaper: {
			width: '420px',
			maxWidth: '100%',
			backgroundColor: theme.palette.primary.main,
			[theme.breakpoints.up(1536)]: {
				width: '480px',
			},
		},
	}),
)

export default Cart
