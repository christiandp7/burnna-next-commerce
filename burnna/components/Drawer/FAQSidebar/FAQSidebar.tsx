import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
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

	return (
		<nav aria-label="info sidebar">
			<Drawer
				open={faqSidebarOpen}
				variant={isDesktop ? 'permanent' : 'temporary'}
				onClose={() => setFaqSidebarOpen(false)}
				classes={{
					paper: classes.drawerPaper,
				}}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}>
				<FAQSidebarContent />
			</Drawer>
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
