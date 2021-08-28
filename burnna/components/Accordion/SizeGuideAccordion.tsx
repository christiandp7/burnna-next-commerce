import React, { FC, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import { SizeGuideItem } from '../SizeGuide/sizeGuideData/sizeGuideData'
import SizeGuideRow from './SizeGuideRow'

const Accordion = withStyles(theme => ({
	root: {
		backgroundColor: 'transparent',
		color: theme.palette.primary.contrastText,
		border: 0,
		borderBottom: `solid 1px ${theme.palette.primary.contrastText}`,
		boxShadow: 'none',
		'&:before': {
			display: 'none',
		},
		'&$expanded': {
			margin: 'auto',
		},
	},
	expanded: {},
}))(MuiAccordion)

const AccordionSummary = withStyles(theme => ({
	root: {
		backgroundColor: 'transparent',
		fontSize: theme.typography.h6.fontSize,
		// borderBottom: '1px solid rgba(0, 0, 0, .125)',
		padding: 0,
		marginBottom: -1,
		minHeight: 34,
		'&$expanded': {
			minHeight: '50px',
		},
	},
	content: {
		margin: `${theme.spacing(1) - 4}px 0`,
		'&$expanded': {
			margin: `${theme.spacing(1)}px 0`,
			textDecoration: 'underline',
			// textDecorationThickness: '2px',
			textUnderlineOffset: '2px',
		},
	},
	expanded: {},
}))(MuiAccordionSummary)

const AccordionDetails = withStyles(theme => ({
	root: {
		display: 'block',
		backgroundColor: 'transparent',
		paddingBottom: theme.spacing(2),
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		textTransform: 'none',
	},
}))(MuiAccordionDetails)

interface Props {
	sizeGuideItems: SizeGuideItem[]
}

const SizeGuideAccordion: FC<Props> = ({ sizeGuideItems }) => {
	const [expanded, setExpanded] = useState(null)

	const handleChange =
		(panel: any) => (event: React.ChangeEvent<{}>, newExpanded: any) => {
			setExpanded(newExpanded ? panel : false)
		}

	return (
		<div>
			{sizeGuideItems &&
				sizeGuideItems.map((sgItem, i) => (
					<Accordion
						key={sgItem.summary}
						square
						expanded={expanded === `panel${i}`}
						onChange={handleChange(`panel${i}`)}>
						<AccordionSummary
							aria-controls="panel2d-content"
							id={`panel${i}d-header`}>
							<Typography variant="subtitle1">{sgItem.summary}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<SizeGuideRow sizes={sgItem.details} />
						</AccordionDetails>
					</Accordion>
				))}
		</div>
	)
}

export default SizeGuideAccordion
