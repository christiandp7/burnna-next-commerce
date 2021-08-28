import React, { FC } from 'react'
import Grid from '@material-ui/core/Grid'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { MainLayout } from '@burnna/layouts'
import { Layout } from '@components/common'
import type { Product } from '@commerce/types/product'
import {
	ProductImageDesktop,
	ProductImageMobile,
	ProductMeta,
} from '@burnna/components'
import { InfoSidebar } from '@burnna/components/Drawer'
interface ProductViewProps {
	product: Product
	relatedProducts: Product[]
}

const ProductView = ({ product, relatedProducts }: ProductViewProps) => {
	console.log(product)
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
	return (
		<MainLayout>
			<Grid container>
				<Grid item xs={12} md={6}>
					{isDesktop ? (
						<ProductImageDesktop images={product.images} />
					) : (
						<ProductImageMobile images={product.images} />
					)}
				</Grid>
				<Grid item xs={12} md={6}>
					<ProductMeta product={product} />
				</Grid>
			</Grid>
			<InfoSidebar description={product.descriptionHtml} />
		</MainLayout>
	)
}

export default ProductView

ProductView.Layout = Layout
