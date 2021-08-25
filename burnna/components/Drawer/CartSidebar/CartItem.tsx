import React, { FC, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { FiTrash2 } from 'react-icons/fi'
import type { LineItem } from '@commerce/types/cart'
// components
// import QuantitySelector from '../Button/QuantitySelector'
// assets
// import productImg from '../../assets/images/product/girl-product-1.jpg'

interface Props {
	item: LineItem
	currencyCode: string
}

const CartItem: FC<Props> = () => {
	const [counter, setCounter] = useState(1)
	const classes = useStyles()

	return (
		<Grid container className={classes.root}>
			<Grid item className={classes.imageGridWrapper}>
				{/* <img src={productImg} className={classes.image} alt="product img cart" /> */}
			</Grid>
			<Grid container direction="column" className={classes.detailsWrapper} item xs>
				<Grid item>
					<Typography component="h4" variant="h5" color="inherit">
						N One Piece
					</Typography>
				</Grid>
				<Grid item xs>
					<Typography variant="body1" color="inherit">
						Color: White
					</Typography>
					<Typography variant="body1" color="inherit">
						Size: L
					</Typography>
				</Grid>
				<Grid item>
					{/* <QuantitySelector counter={counter} setCounter={setCounter} /> */}
				</Grid>
			</Grid>
			<Grid item>
				<Grid
					container
					direction="column"
					className={classes.priceWrapper}
					alignItems="flex-end"
					justify="space-between">
					<Grid item>
						<Typography variant="h5" color="inherit">
							$150.00
						</Typography>
					</Grid>
					<Grid item>
						<IconButton
							disableRipple
							size="small"
							edge="end"
							aria-label="remove"
							color="secondary">
							<FiTrash2 />
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginBottom: `${theme.spacing(1) + 4}px`,
		},
		imageGridWrapper: {
			flexGrow: 0,
			maxWidth: '18%',
			flexBasis: '18%',
		},
		image: {
			width: '100%',
		},
		detailsWrapper: {
			padding: `0 ${theme.spacing(3)}px`,
			paddingBottom: theme.spacing(1),
			'& h4': {
				fontWeight: 700,
				marginBottom: '2px',
			},
		},
		priceWrapper: {
			height: '100%',
			paddingBottom: theme.spacing(1),
		},
	}),
)

export default CartItem
