import React, { FC, useState, useEffect } from 'react'
import cx from 'classnames'
import NextLink from 'next/link'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { FiTrash2 } from 'react-icons/fi'
import type { LineItem } from '@commerce/types/cart'
import { useDrawer } from '@burnna/context/DrawerContext'
import usePrice from '@framework/product/use-price'
import useUpdateItem from '@framework/cart/use-update-item'
import useRemoveItem from '@framework/cart/use-remove-item'
import { CartQuantitySelector } from '@burnna/components'
import { setLabel } from '@burnna/utils/colors'

type ItemOption = {
	name: string
	nameId: number
	value: string
	valueId: number
}
interface Props {
	item: LineItem
	currencyCode: string
}

const CartItem: FC<Props> = ({ item, currencyCode }) => {
	const [removing, setRemoving] = useState(false)
	const [quantity, setQuantity] = useState<number>(item.quantity)
	const removeItem = useRemoveItem()
	const updateItem = useUpdateItem({ item })
	const classes = useStyles()
	const { setCartOpen } = useDrawer()
	const options = (item as any).options

	// console.log(options)

	const { price } = usePrice({
		amount: item.variant.price * item.quantity,
		baseAmount: item.variant.listPrice * item.quantity,
		currencyCode,
	})

	const { price: comparePrice } = usePrice({
		amount: item.variant.listPrice * item.quantity,
		baseAmount: item.variant.listPrice * item.quantity,
		currencyCode,
	})

	const increaseQuantity = async (n = 1) => {
		const val = Number(quantity) + n
		setQuantity(val)
		await updateItem({ quantity: val })
	}

	const handleRemove = async () => {
		setRemoving(true)
		try {
			await removeItem(item)
		} catch (error) {
			setRemoving(false)
		}
	}

	useEffect(() => {
		// Reset the quantity state if the item quantity changes
		if (item.quantity !== Number(quantity)) {
			setQuantity(item.quantity)
		}
		// TODO: currently not including quantity in deps is intended, but we should
		// do this differently as it could break easily
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [item.quantity])

	return (
		<Grid
			container
			className={cx(classes.root, { [classes.removingItem]: removing })}>
			<Grid item className={classes.imageGridWrapper}>
				<NextLink href={`/product/${item.path}`}>
					<a className={classes.imageContainer}>
						<Image
							onClick={() => setCartOpen(false)}
							// className={s.productImage}
							width={85}
							height={110}
							src={item.variant.image!.url}
							alt={item.variant.image!.altText}
							unoptimized
							objectFit="cover"
						/>
					</a>
				</NextLink>
			</Grid>
			<Grid container direction="column" className={classes.detailsWrapper} item xs>
				<Grid item>
					<NextLink href={`/product/${item.path}`} passHref>
						<Link color="secondary" onClick={() => setCartOpen(false)}>
							<Typography component="h4" variant="inherit" color="inherit">
								{item.name}
							</Typography>
						</Link>
					</NextLink>
				</Grid>

				{options && options.length > 0 && (
					<Grid item xs>
						{options.map((option: ItemOption) => (
							<Typography
								key={`${item.id}-${option.name}`}
								className={classes.option}
								variant="caption"
								color="inherit">
								{option.name}: {setLabel(option.value)}
							</Typography>
						))}
					</Grid>
				)}

				<Grid item>
					<CartQuantitySelector
						value={quantity}
						increase={() => increaseQuantity(1)}
						decrease={() => increaseQuantity(-1)}
					/>
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
						<Typography
							className={classes.priceContainer}
							variant="body1"
							color="inherit">
							{item.variant.listPrice && (
								<span className={classes.compareAtPrice}>{comparePrice}</span>
							)}
							<span className={classes.price}>{price}</span>
						</Typography>
					</Grid>
					<Grid item>
						{removing ? (
							<CircularProgress size={20} color="secondary" />
						) : (
							<IconButton
								disableRipple
								size="small"
								edge="end"
								aria-label="remove"
								color="secondary"
								onClick={handleRemove}>
								<FiTrash2 />
							</IconButton>
						)}
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
		removingItem: {
			opacity: '50%',
			pointerEvents: 'none',
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
			padding: `0 ${theme.spacing(2) - 4}px`,
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
		option: {
			display: 'block',
			width: '100%',
		},
		priceContainer: {
			lineHeight: '1.25',
			paddingTop: 1,
		},
		price: {
			display: 'block',
		},
		compareAtPrice: {
			display: 'block',
			color: '#c7c7c7',
			textDecoration: 'line-through',
		},
	}),
)

export default CartItem
