import React, { FC, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Scrollbars } from 'react-custom-scrollbars-2'
// components
import Grid from '@material-ui/core/Grid'
// data
import SizeGuideSidebarHeader from './SizeGuideSidebarHeader'
import SizeGuideSidebarFooter from './SizeGuideSidebarFooter'
import SizeGuideSidebarBody from './SizeGuideSidebarBody'

const SizeGuideSidebarContent: FC = () => {
	const classes = useStyles()
	const [value, setValue] = useState<number | null>(0)

	const handleChange = (event: React.ChangeEvent<{}>, newValue: any) => {
		setValue(newValue)
	}

	const handleSwipable = (newValue: number) => {
		setValue(newValue)
	}

	return (
		<Scrollbars
			style={{ minHeight: '100vh' }}
			autoHide
			autoHideTimeout={2000}
			autoHideDuration={300}>
			<Grid container wrap="nowrap" direction="column" className={classes.root}>
				{/* HEADER */}
				<SizeGuideSidebarHeader value={value} handleChange={handleChange} />
				{/* BODY */}
				<SizeGuideSidebarBody value={value} handleSwipable={handleSwipable} />
				{/* FOOTER */}
				<SizeGuideSidebarFooter />
			</Grid>
		</Scrollbars>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		color: theme.palette.primary.contrastText,
		cursor: 'default',
		padding: `0 ${theme.spacing(4)}px`,
		[theme.breakpoints.down('sm')]: {
			padding: `0 ${theme.spacing(2)}px`,
		},
	},

	body: {
		marginTop: theme.spacing(1),
	},
	swipableViews: {
		height: '100%',
		'& .react-swipeable-view-container': {
			height: '100%',
		},
	},
	tabPanel: { height: '100%' },
	tabPanelWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		height: '100%',
	},
	accordionWrapper: {},
	accordionTitle: {
		marginBottom: theme.spacing(1),
		fontWeight: theme.typography.fontWeightBold,
	},
}))

export default SizeGuideSidebarContent
