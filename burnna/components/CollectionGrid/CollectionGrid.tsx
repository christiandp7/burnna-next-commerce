import React, { FC } from 'react'
import type { Product } from '@commerce/types/product'
import Grid from '@material-ui/core/Grid'

interface Props {
	products: Product[]
}

const CollectionGrid: FC<Props> = ({ products }) => {
	return (
		<Grid container>
			{products.map(product => (
				<Grid item xs={6} sm={4}>
					{/* <CollectionGirdItem product={product} /> */}
				</Grid>
			))}
		</Grid>
	)
}

export default CollectionGrid
