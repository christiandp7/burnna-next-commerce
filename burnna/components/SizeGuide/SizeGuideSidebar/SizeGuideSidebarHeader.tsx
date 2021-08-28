import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import { FiX } from 'react-icons/fi'
// components
import { SGTabs, SGTab, SGTabPanel } from '../SizeGuideTabs'
import { useDrawer } from '@burnna/context/DrawerContext'

interface Props {
	value: number | null
	handleChange: (event: React.ChangeEvent<{}>, value: any) => void
}

const SizeGuideSidebarHeader: FC<Props> = ({ value, handleChange }) => {
	const { infoSidebar, setInfoSidebar } = useDrawer()
	const classes = useStyles()

	return (
		<Grid item className={classes.header}>
			<AppBar component="div" elevation={0} position="static" color="transparent">
				<Toolbar disableGutters variant="dense">
					<IconButton
						aria-label="close"
						disableRipple
						color="secondary"
						style={{ marginLeft: 'auto' }}
						edge="end"
						onClick={() => setInfoSidebar({ open: false, view: 'sizeguide' })}>
						<FiX />
					</IconButton>
				</Toolbar>
			</AppBar>
			<AppBar component="div" elevation={0} position="static" color="transparent">
				<SGTabs
					value={value}
					onChange={handleChange}
					// fullWidth
					aria-label="Size Guide">
					<SGTab label="Women Swinms" />
					<SGTab label="Men Swimns" />
				</SGTabs>
			</AppBar>
		</Grid>
	)
}

const useStyles = makeStyles(theme => ({
	header: {
		paddingTop: theme.spacing(2),
	},
}))

export default SizeGuideSidebarHeader
