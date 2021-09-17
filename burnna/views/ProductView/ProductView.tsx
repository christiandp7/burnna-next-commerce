import React, { FC } from 'react'
import { NextSeo } from 'next-seo'
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
import { getColorOptionImagesFromVariants } from '@burnna/utils/getColorOptionImagesFromVariants'
interface ProductViewProps {
	product: Product
	relatedProducts: Product[]
}

const ProductView = ({ product, relatedProducts }: ProductViewProps) => {
	// console.log(product)
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
	const variantImages = getColorOptionImagesFromVariants(product.variants)

	return (
		<>
			<MainLayout>
				<Grid container>
					<Grid item xs={12} md={6}>
						{isDesktop ? (
							<ProductImageDesktop
								images={product.images}
								variantImages={variantImages}
							/>
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
			<NextSeo
				title={product.name}
				description={product.description}
				openGraph={{
					type: 'website',
					title: product.name,
					description: product.description,
					images: [
						{
							url: product.images[0]?.url!,
							width: 800,
							height: 600,
							alt: product.name,
						},
					],
				}}
			/>
		</>
	)
}

export default ProductView

ProductView.Layout = Layout
