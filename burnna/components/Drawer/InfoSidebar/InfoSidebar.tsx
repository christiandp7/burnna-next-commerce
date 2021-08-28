import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import type { InfoSidebarValue } from '@burnna/context/DrawerContext'
import { useDrawer } from '@burnna/context/DrawerContext'
// components
import { SizeGuideSidebarContent } from '@burnna/components/SizeGuide'
// import SizeGuideSidebarContent from './SizeGuideSidebarContent'

const InfoSidebar: FC = () => {
	const { infoSidebar, setInfoSidebar } = useDrawer()
	const classes = useStyles()

	return (
		<Drawer
			open={infoSidebar.open}
			onClose={() => setInfoSidebar({ open: false, view: infoSidebar.view })}
			anchor="left"
			classes={{
				paper: classes.drawerPaper,
			}}
			transitionDuration={{
				enter: 550,
				exit: 350,
			}}>
			{infoSidebar.view === 'details' ? (
				<h1>Details</h1>
			) : (
				<SizeGuideSidebarContent />
			)}
			{/* <SizeGuideSidebarContent /> */}
		</Drawer>
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
