import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

interface Props {
	children?: any
}

const FAQHeading: FC<Props> = ({ children, ...props }) => {
	const classes = useStyles(props)
	return (
		<Typography {...props} component="h2" variant="h4" className={classes.root}>
			{children}
		</Typography>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			fontWeight: 700,
			fontFamily: theme.typography.h6.fontFamily,
			// textDecoration: props.underline && 'underline',
			textUnderlineOffset: '4px',
			marginBottom: theme.spacing(3),
		},
	}),
)

export default FAQHeading
