import React, { FC, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import type { ProductPrice, ProductVariant } from '@commerce/types/product'
import { AddToCartButton } from '@burnna/components'

interface Props {
	addToCart: () => Promise<void>
	variant: ProductVariant
	loading: boolean
	// price: ProductPrice
	price: string
}

const AddToCart: FC<Props> = ({ addToCart, variant, loading, price }) => {
	return (
		<AddToCartButton
			aria-label="Add to Cart"
			onClick={addToCart}
			loading={loading}
			disabled={variant?.availableForSale === false}>
			{variant?.availableForSale === false ? (
				'Not Available'
			) : (
				<Grid container justifyContent="space-between">
					<Grid item>
						<Typography variant="h5">Add</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h5">{price}</Typography>
					</Grid>
				</Grid>
			)}
		</AddToCartButton>
	)
}

export default AddToCart
