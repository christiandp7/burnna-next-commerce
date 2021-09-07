import React, { FC, useState } from 'react'
import { withStyles, Theme } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'

const Accordion = withStyles((theme: Theme) => ({
	root: {
		// border: '1px solid rgba(0, 0, 0, .125)',
		background: 'transparent',
		border: 0,
		// borderBottom: `solid 1px ${theme.palette.neutral.main}`,
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

const AccordionSummary = withStyles({
	root: {
		backgroundColor: 'transparent',
		// borderBottom: '1px solid rgba(0, 0, 0, .125)',
		padding: 0,
		marginBottom: -1,
		minHeight: 50,
		textDecoration: 'underline',
		textDecorationThickness: '1px',
		textUnderlineOffset: '2px',
		'&$expanded': {
			textDecoration: 'none',
		},
	},
	content: {
		'&$expanded': {
			margin: '12px 0',
		},
	},
	expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme: Theme) => ({
	root: {
		display: 'block',
		paddingBottom: '26px',
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		textTransform: 'none',
	},
}))(MuiAccordionDetails)

interface FAQAccordionProps {
	faqs: {
		summary: string
		details: React.ReactNode
	}[]
}

const FAQAccordion: FC<FAQAccordionProps> = ({ faqs }) => {
	const [expanded, setExpanded] = React.useState<string | false>('panel0')

	const handleChange =
		(panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false)
		}

	return (
		<div>
			{faqs &&
				faqs.map((faq, i) => (
					<Accordion
						key={faq.summary}
						square
						expanded={expanded === `panel${i}`}
						onChange={handleChange(`panel${i}`)}>
						<AccordionSummary
							aria-controls="panel2d-content"
							id={`panel${i}d-header`}>
							<Typography component="h5" variant="h5">
								{faq.summary}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>{faq.details}</AccordionDetails>
					</Accordion>
				))}
		</div>
	)
}

export default FAQAccordion
