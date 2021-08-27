import React, { FC } from 'react'
import Image from 'next/image'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
// components
import { LogoText } from '@burnna/svg'
import type { ProductImage } from '@commerce/types/product'

interface Props {
	images: ProductImage[]
}

const ProductImageDesktop: FC<Props> = ({ images }) => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			{/* <div className={classes.logoContainer}>
				<LogoText className={classes.logo} />
			</div> */}
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
			{/* <img className={classes.img} src={} alt="product" /> */}
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
