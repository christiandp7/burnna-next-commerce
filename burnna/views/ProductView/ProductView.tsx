import React, { FC } from 'react'
import Grid from '@material-ui/core/Grid'
import { MainLayout } from '@burnna/layouts'
import { Layout } from '@components/common'
import type { Product } from '@commerce/types/product'
interface ProductViewProps {
	product: Product
	relatedProducts: Product[]
}

const ProductView = ({ product, relatedProducts }: ProductViewProps) => {
	return (
		<MainLayout>
			<Grid container>
				<Grid item xs={12} md={6}>
					{/* {isDesktop ? <ProductImageDesktop /> : <ProductImageMobile />} */}
				</Grid>
				<Grid item xs={12} md={6}>
					{/* <ProductMeta /> */}
				</Grid>
			</Grid>
			{/* <SizeGuideSidebar /> */}
		</MainLayout>
	)
}

export default ProductView

ProductView.Layout = Layout
