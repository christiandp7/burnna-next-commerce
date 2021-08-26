import React, { FC, useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Tooltip from '@material-ui/core/Tooltip'
import Grow from '@material-ui/core/Grow'
import usePrice from '@framework/product/use-price'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
// import Fade from 'react-reveal/Fade'
import { Product } from '@commerce/types/product'

interface Props {
	product: Product
}

// const placeholderImg = {
// 	src: '/product-img-placeholder.svg',
// 	width: 800,
// 	height: 800,
// }

const placeholderImg = '/product-img-placeholder.svg'

const CollectionGridItem: FC<Props> = ({ product }) => {
	// console.log(product)

	const [showDetails, setShowDetails] = useState(false)

	const handleMouseEnter = () => {
		setShowDetails(true)
	}
	const handleMouseLeave = () => {
		setShowDetails(false)
	}

	const { price } = usePrice({
		amount: product.price.value,
		baseAmount: product.price.retailPrice,
		currencyCode: product.price.currencyCode!,
	})

	const classes = useStyles()
	return (
		<div
			className={classes.grirdItemContainer}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<div className={classes.productImageRow}>
				{product?.images && (
					<NextLink href={`/product/${product.slug}`}>
						<a className={classes.imageContainer}>
							<Image
								quality="85"
								alt={product.name || 'Product Image'}
								src={product.images[0]?.url || placeholderImg}
								width={product.images[0]?.width || 800}
								height={product.images[0]?.height || 800}
								className={!product.images[0]?.url ? classes.imagePlaceholder : ''}
								placeholder="blur"
								blurDataURL={product.images[0]?.url || placeholderImg}
								layout="responsive"
							/>
						</a>
					</NextLink>
				)}
				{product.variants.length > 0 && (
					<div className={classes.productVariantsContainer}>
						variant
						{/* {product.variants && (
							<Grow timeout={{ enter: 500, exit: 500 }} in={showDetails}>
								<div className={classes.productVariants}>
									{product.variants.color &&
										product.variants.color.map(color => (
											<Tooltip title={color.name} placement="right">
												<Box
													className={classes.productColorVariantBadge}
													bgcolor={color.hex}
												/>
											</Tooltip>
										))}
								</div>
							</Grow>
						)} */}
					</div>
				)}
			</div>

			<div className={classes.productCaptionRow}>
				<NextLink href="/product">
					<Typography variant="h6" component="h4" className={classes.productTitle}>
						{product.name}
					</Typography>
				</NextLink>
				<Typography variant="h6" component="h4" className={classes.productPrice}>
					{price}
				</Typography>
			</div>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	grirdItemContainer: {
		height: '100%',
		position: 'relative',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
	},
	productImageRow: {
		position: 'relative',
		height: '100%',
	},
	lazyLoadWrapper: {
		width: '100%',
		height: '100%',
	},
	imageContainer: {
		display: 'block',
		width: '100%',
		height: '100%',
		'& > div': {
			height: '100%',
		},
	},
	// image: {
	// 	width: '100%',
	// 	height: '100%',
	// 	objectFit: 'cover',
	// 	transition: `all ease-out 800ms !important`,
	// },
	imagePlaceholder: {
		height: '100%',
		objectFit: 'cover',
	},
	productVariantsContainer: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		width: '100%',
		padding: '0 18px',
		paddingBottom: '15px',
		zIndex: 1,
	},
	productVariants: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
		marginBottom: '20px',
		width: '100%',
	},
	productColorVariantBadge: {
		margin: '8px 0',
		width: '28px',
		height: '28px',
		border: 'solid 2px #707070',
		transition: `transform ${theme.transitions.easing.easeIn} 150ms`,
		'&:hover': {
			transform: 'scale(1.1)',
		},
	},

	productCaptionRow: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
		color: theme.palette.primary.main,
		[theme.breakpoints.down('md')]: {
			padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
		},
		'& a': {
			textDecoration: 'none',
		},
		'& a:hover': {
			textDecoration: 'underline',
		},
	},
	productTitle: {
		textTransform: 'uppercase',
		color: theme.palette.primary.main,
		fontWeight: 700,
	},
	productPrice: {
		cursor: 'default',
		fontWeight: 700,
	},
}))

export default CollectionGridItem
