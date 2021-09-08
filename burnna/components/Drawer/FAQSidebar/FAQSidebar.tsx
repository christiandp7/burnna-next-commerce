import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Hidden from '@material-ui/core/Hidden'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { useDrawer } from '@burnna/context/DrawerContext'
import { FAQSidebarContent } from '@burnna/components/Drawer/FAQSidebar'

const drawerWidth = 190

const InfoSidebar: FC = () => {
	const { faqSidebarOpen, setFaqSidebarOpen } = useDrawer()
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
	const classes = useStyles()
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

	return (
		<nav aria-label="info sidebar">
			<SwipeableDrawer
				open={faqSidebarOpen}
				variant={isDesktop ? 'permanent' : 'temporary'}
				onClose={() => setFaqSidebarOpen(false)}
				onOpen={() => setFaqSidebarOpen(true)}
				classes={{
					paper: classes.drawerPaper,
				}}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				disableSwipeToOpen
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}>
				<FAQSidebarContent />
			</SwipeableDrawer>
		</nav>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawerPaper: {
			backgroundColor: theme.palette.primary.main,
		},
	}),
)

export default InfoSidebar
