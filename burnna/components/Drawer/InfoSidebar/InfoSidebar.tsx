import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
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
				<ProductDetailsContent description={description || ''} />
			) : (
				<SizeGuideSidebarContent />
			)}
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