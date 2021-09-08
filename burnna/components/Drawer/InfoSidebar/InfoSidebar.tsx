import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import type { InfoSidebarValue } from '@burnna/context/DrawerContext'
import { useDrawer } from '@burnna/context/DrawerContext'
// components
import { SizeGuideSidebarContent } from '@burnna/components/SizeGuide'
import { ProductDetailsContent } from '@burnna/components/Product'

interface Props {
	description: string | undefined
}

const InfoSidebar: FC<Props> = ({ description }) => {
	const { infoSidebar, setInfoSidebar } = useDrawer()
	const classes = useStyles()
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

	return (
		<SwipeableDrawer
			open={infoSidebar.open}
			onClose={() => setInfoSidebar({ open: false, view: infoSidebar.view })}
			onOpen={() => setInfoSidebar({ open: true, view: infoSidebar.view })}
			anchor="left"
			classes={{
				paper: classes.drawerPaper,
			}}
			transitionDuration={{
				enter: 550,
				exit: 350,
			}}
			disableSwipeToOpen
			// swipeAreaWidth={20}
			// minFlingVelocity={2000}
			disableBackdropTransition={!iOS}
			disableDiscovery={iOS}>
			{infoSidebar.view === 'details' ? (
				<ProductDetailsContent description={description || ''} />
			) : (
				<SizeGuideSidebarContent />
			)}
		</SwipeableDrawer>
	)
}

const useStyles = makeStyles(theme => ({
	drawerPaper: {
		width: '420px',
		maxWidth: '100%',
		backgroundColor: theme.palette.primary.main,
	},
}))

export default InfoSidebar
