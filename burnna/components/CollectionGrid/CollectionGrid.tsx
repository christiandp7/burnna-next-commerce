import React, { FC } from 'react'
import type { Product } from '@commerce/types/product'
import Grid from '@material-ui/core/Grid'
import { CollectionGridItem } from '@burnna/components'

interface Props {
	products: Product[]
}

const CollectionGrid: FC<Props> = ({ products }) => {
	console.log(products)
	return (
		<Grid container>
			{products.map(product => (
				<Grid item xs={6} sm={4} key={product.path}>
					<CollectionGridItem product={product} />
				</Grid>
			))}
		</Grid>
	)
}

export default CollectionGrid
