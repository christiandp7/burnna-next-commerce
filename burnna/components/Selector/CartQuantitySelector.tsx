import React, { FC } from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { FiPlus, FiMinus } from 'react-icons/fi'

export interface Props {
	value: number
	increase: () => any
	decrease: () => any
	max?: number
}

const QuantitySelector: FC<Props> = ({ value, increase, decrease, max = 6 }) => {
	return (
		<Grid container alignItems="center" spacing={2}>
			<Grid item>
				<IconButton
					aria-label="add"
					disableRipple
					size="small"
					color="secondary"
					onClick={increase}
					disabled={value < 1 || value >= max}>
					<FiPlus />
				</IconButton>
			</Grid>
			<Grid item>
				<Typography variant="h5" color="inherit">
					{value}
				</Typography>
			</Grid>
			<Grid item>
				<IconButton
					aria-label="add"
					disableRipple
					size="small"
					color="secondary"
					onClick={decrease}
					disabled={value <= 1}>
					<FiMinus />
				</IconButton>
			</Grid>
		</Grid>
	)
}

export default QuantitySelector
