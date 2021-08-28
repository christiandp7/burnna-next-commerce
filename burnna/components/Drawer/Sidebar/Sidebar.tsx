import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import { SidebarContent } from '@burnna/components/Drawer/Sidebar'
import { useDrawer } from '@burnna/context/DrawerContext'

const Sidebar: FC = () => {
	const { sidebarOpen, setSidebarOpen } = useDrawer()
	const classes = useStyles()

	return (
		<Drawer
			open={sidebarOpen}
			onClose={() => setSidebarOpen(false)}
			classes={{
				paper: classes.drawerPaper,
			}}>
			<SidebarContent />
		</Drawer>
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
