import React, { FC } from 'react'
import Image from 'next/image'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
// components
import type { ProductImage, ProductVariantImage } from '@commerce/types/product'

interface Props {
	images: ProductImage[]
	variantImages: (ProductVariantImage | undefined)[]
}

const ProductImageDesktop: FC<Props> = ({ images, variantImages }) => {
	// console.log(variantImages)
	const classes = useStyles()
	return (
		<div className={classes.root}>
			{images.map(img => (
				<Image
					key={img.url}
					src={img.url}
					alt={img.altText || 'product image'}
					width={img.width}
					height={img.height}
					layout="responsive"
				/>
			))}
			{variantImages.map(img => (
				<React.Fragment key={img?.id}>
					{img && (
						<Image
							src={img.originalSrc}
							alt={img.altText || 'product image'}
							width={img.width}
							height={img.height}
							id={img.id}
							layout="responsive"
						/>
					)}
				</React.Fragment>
			))}
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: 'relative',
			lineHeight: 0,
			'& img': {
				width: '100%',
			},
		},
		// logoContainer: {
		// 	position: 'absolute',
		// 	width: '100%',
		// 	top: 0,
		// 	textAlign: 'center',
		// 	paddingTop: theme.spacing(4),
		// 	zIndex: 1,
		// 	[theme.breakpoints.down('md')]: {
		// 		paddingTop: theme.spacing(2),
		// 	},
		// },
		// logo: {
		// 	width: '200px',
		// },
		img: {
			maxWidth: '100%',
		},
	}),
)

export default ProductImageDesktop
