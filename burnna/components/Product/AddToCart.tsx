import React, { FC, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import type { ProductVariant } from '@commerce/types/product'
import { AddToCartButton } from '@burnna/components'
import { useTranslation } from 'react-i18next'

interface Props {
	addToCart: () => Promise<void>
	variant: ProductVariant
	loading: boolean
	price: string
	comparePrice: string
}

const AddToCart: FC<Props> = ({
	addToCart,
	variant,
	loading,
	price,
	comparePrice,
}) => {
	const classes = useStyles()
	const { t } = useTranslation('common')

	return (
		<AddToCartButton
			aria-label="Add to Cart"
			onClick={addToCart}
			loading={loading}
			disabled={variant?.availableForSale === false}>
			{variant?.availableForSale === false ? (
				<Typography color="secondary" variant="h5">
					{t('soldOut')}
				</Typography>
			) : (
				<Grid container justifyContent="space-between">
					<Grid item>
						<Typography variant="h5">{t('add')}</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h5">
							{price}
							{variant.listPrice && (
								<span className={classes.compareAtPrice}>{comparePrice}</span>
							)}
						</Typography>
					</Grid>
				</Grid>
			)}
		</AddToCartButton>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		compareAtPrice: {
			color: '#c7c7c7',
			marginLeft: theme.spacing(1),
			textDecoration: 'line-through',
		},
	}),
)

export default AddToCart
