import React, { FC } from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles, Theme, createStyles } from '@material-ui/core'

interface Props {
	children: React.ReactNode | string
	loading?: boolean
	onClick?: () => void
	disabled?: boolean
}

const AddToCartButton: FC<Props> = ({ children, loading = false, ...props }) => {
	const classes = useStyles()
	return (
		<Button disabled={loading} className={classes.root} {...props}>
			{loading ? <CircularProgress size={28} color="secondary" /> : children}
		</Button>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			background: '#403737',
			border: 0,
			borderRadius: 0,
			color: 'white',
			// height: '60px',
			width: '100%',
			padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
			'&:hover': {
				background: theme.palette.primary.main,
				boxShadow: '0 2px 10px 1px rgba(10, 10, 10, .3)',
			},
		},
	}),
)

export default AddToCartButton
