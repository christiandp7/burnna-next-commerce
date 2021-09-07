import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

interface Props {
	sizes: Array<string | number>
}

const SizeGuideRow: FC<Props> = ({ sizes }) => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			{sizes.map((size, i) => (
				<Typography key={`${size}-${i}`} variant="body1" className={classes.size}>
					{size}
				</Typography>
			))}
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	size: {
		marginRight: theme.spacing(2),
	},
}))

export default SizeGuideRow
