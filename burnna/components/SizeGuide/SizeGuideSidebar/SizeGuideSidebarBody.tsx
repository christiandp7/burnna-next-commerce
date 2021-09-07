import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews, { OnChangeIndexCallback } from 'react-swipeable-views'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { FiX } from 'react-icons/fi'
// components
import SGTabs from '../SizeGuideTabs/SGTabs'
import SGTab from '../SizeGuideTabs/SGTab'
import SGTabPanel from '../SizeGuideTabs/SGTabPanel'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// import LinkButton from '../Button/LinkButton'
import { SizeGuideAccordion } from '@burnna/components/Accordion'
// data
import { bodySizeItems, measurementsItems } from '../sizeGuideData'
// import Heading from '../Typography/Heading'

interface Props {
	value: any
	handleSwipable: OnChangeIndexCallback | undefined
}

const SizeGuideSidebarBody: FC<Props> = ({ value, handleSwipable }) => {
	const classes = useStyles()
	return (
		<Grid item xs className={classes.body}>
			<SwipeableViews
				axis="x"
				index={value}
				enableMouseEvents
				className={classes.swipableViews}
				disableLazyLoading
				onChangeIndex={handleSwipable}>
				<SGTabPanel className={classes.tabPanel} value={value} index={0}>
					<div className={classes.tabPanelWrapper}>
						<div className={classes.accordionWrapper}>
							<Typography className={classes.accordionTitle} variant="body1">
								Body Size
							</Typography>
							<SizeGuideAccordion sizeGuideItems={bodySizeItems} />
						</div>
						<div className={classes.accordionWrapper}>
							<Typography className={classes.accordionTitle} variant="body1">
								Measurements
							</Typography>
							<SizeGuideAccordion sizeGuideItems={measurementsItems} />
						</div>
					</div>
				</SGTabPanel>
				<SGTabPanel className={classes.tabPanel} value={value} index={1}>
					<div className={classes.tabPanelWrapper}>
						<div className={classes.accordionWrapper}>
							<Typography className={classes.accordionTitle} variant="body1">
								Body Size
							</Typography>
							<SizeGuideAccordion sizeGuideItems={bodySizeItems} />
						</div>
						<div className={classes.accordionWrapper}>
							<Typography className={classes.accordionTitle} variant="body1">
								Measurements
							</Typography>
							<SizeGuideAccordion sizeGuideItems={measurementsItems} />
						</div>
					</div>
				</SGTabPanel>
			</SwipeableViews>
		</Grid>
	)
}

const useStyles = makeStyles(theme => ({
	body: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
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
		// alignItems: 'center',
	},
	accordionWrapper: {},
	accordionTitle: {
		marginBottom: `${theme.spacing(1) - 2}px`,
		textTransform: 'uppercase',
		fontFamily: theme.typography.h6.fontFamily,
		fontWeight: theme.typography.fontWeightBold,
		letterSpacing: '1.5px',
	},
}))

export default SizeGuideSidebarBody
