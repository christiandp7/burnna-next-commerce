import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { SidebarContent } from '@burnna/components/Drawer/Sidebar'
import { useDrawer } from '@burnna/context/DrawerContext'

const Sidebar: FC = () => {
	const { sidebarOpen, setSidebarOpen } = useDrawer()
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
	const classes = useStyles()

	return (
		<SwipeableDrawer
			open={sidebarOpen}
			onClose={() => setSidebarOpen(false)}
			onOpen={() => setSidebarOpen(true)}
			classes={{
				paper: classes.drawerPaper,
			}}
			disableSwipeToOpen
			disableBackdropTransition={!iOS}
			disableDiscovery={iOS}>
			<SidebarContent />
		</SwipeableDrawer>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawerPaper: {
			backgroundColor: theme.palette.primary.main,
		},
	}),
)

export default Sidebar
