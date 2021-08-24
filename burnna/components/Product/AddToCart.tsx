import React, { FC, useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useAddItem } from '@framework/cart'
import { ProductOptions } from '@components/product'
import type { Product } from '@commerce/types/product'
import { AddToCartButton } from '@burnna/components'
import usePrice from '@framework/product/use-price'
import {
	getProductVariant,
	selectDefaultOptionFromProduct,
	SelectedOptions,
} from '@components/product/helpers'

interface Props {
	product: Product
	// className?: string
}

const AddToCart: FC<Props> = ({ product }) => {
	const addItem = useAddItem()
	// const { openSidebar } = useUI()
	const [loading, setLoading] = useState(false)
	const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

	const { price } = usePrice({
		amount: product.price.value,
		baseAmount: product.price.retailPrice,
		currencyCode: product.price.currencyCode!,
	})

	useEffect(() => {
		selectDefaultOptionFromProduct(product, setSelectedOptions)
	}, [product])

	const variant = getProductVariant(product, selectedOptions)
	const addToCart = async () => {
		setLoading(true)
		try {
			await addItem({
				productId: String(product.id),
				variantId: String(variant ? variant.id : product.variants[0].id),
			})
			// openSidebar()
			setLoading(false)
		} catch (err) {
			setLoading(false)
		}
	}

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
