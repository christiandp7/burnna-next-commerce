import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableViews, { OnChangeIndexCallback } from 'react-swipeable-views'
// components
import SGTabPanel from '../SizeGuideTabs/SGTabPanel'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// data
// import { bodySizeItems, measurementsItems } from '../sizeGuideData'
import { BodyTable, MeasurementsTable } from '@burnna/components'

interface Props {
	value: any
	handleSwipable: OnChangeIndexCallback | undefined
}

const SizeGuideSidebarBody: FC<Props> = ({ value, handleSwipable }) => {
	const classes = useStyles()
	const { t } = useTranslation('common')
	return (
		<Grid item xs className={classes.body}>
			<SwipeableViews
				axis="x"
				index={value}
				enableMouseEvents
				// hysteresis={0.2}
				disabled={true}
				className={classes.swipableViews}
				disableLazyLoading
				onChangeIndex={handleSwipable}>
				<SGTabPanel className={classes.tabPanel} value={value} index={0}>
					<div className={classes.tabPanelWrapper}>
						<div className={classes.accordionWrapper}>
							<Typography className={classes.accordionTitle} variant="body1">
								{t('bodySize')}
							</Typography>
							{/* <SizeGuideAccordion sizeGuideItems={bodySizeItems} /> */}
							<BodyTable />
						</div>
						<div className={classes.accordionWrapper}>
							<Typography className={classes.accordionTitle} variant="body1">
								{t('measurements')}
							</Typography>
							{/* <SizeGuideAccordion sizeGuideItems={measurementsItems} /> */}
							<MeasurementsTable />
						</div>
					</div>
				</SGTabPanel>
				<SGTabPanel className={classes.tabPanel} value={value} index={1}>
					<div className={classes.tabPanelWrapper}>
						<div className={classes.accordionWrapper}>
							<Typography className={classes.accordionTitle} variant="body1">
								{t('bodySize')}
							</Typography>
							{/* <SizeGuideAccordion sizeGuideItems={bodySizeItems} /> */}
							<BodyTable />
						</div>
						<div className={classes.accordionWrapper}>
							<Typography className={classes.accordionTitle} variant="body1">
								{t('measurements')}
							</Typography>
							{/* <SizeGuideAccordion sizeGuideItems={measurementsItems} /> */}
							<MeasurementsTable />
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
