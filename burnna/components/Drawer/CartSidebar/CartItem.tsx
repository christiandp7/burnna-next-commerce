import React, { FC, useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { FiTrash2 } from 'react-icons/fi'
import type { LineItem } from '@commerce/types/cart'
import usePrice from '@framework/product/use-price'
import { useDrawer } from '@burnna/context/DrawerContext'
// components
// import QuantitySelector from '../Button/QuantitySelector'
// assets
// import productImg from '../../assets/images/product/girl-product-1.jpg'

interface Props {
	item: LineItem
	currencyCode: string
}

const CartItem: FC<Props> = ({ item, currencyCode }) => {
	const [counter, setCounter] = useState(1)
	const classes = useStyles()

	const { setCartOpen } = useDrawer()

	const { price } = usePrice({
		amount: item.variant.price * item.quantity,
		baseAmount: item.variant.listPrice * item.quantity,
		currencyCode,
	})

	return (
		<Grid container className={classes.root}>
			<Grid item className={classes.imageGridWrapper}>
				<NextLink href={`/product/${item.path}`}>
					<Image
						onClick={() => setCartOpen(false)}
						// className={s.productImage}
						width={150}
						height={175}
						src={item.variant.image!.url}
						alt={item.variant.image!.altText}
						unoptimized
						objectFit="cover"
					/>
				</NextLink>
			</Grid>
			<Grid container direction="column" className={classes.detailsWrapper} item xs>
				<Grid item>
					<Typography component="h4" variant="h5" color="inherit">
						{item.name}
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
							{price}
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
		imageContainer: {
			width: '100%',
		},
		detailsWrapper: {
			padding: `0 ${theme.spacing(2)}px`,
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
