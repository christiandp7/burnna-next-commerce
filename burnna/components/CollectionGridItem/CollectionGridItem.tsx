import React, { FC, useState, useEffect } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Tooltip from '@material-ui/core/Tooltip'
import Grow from '@material-ui/core/Grow'
import usePrice from '@framework/product/use-price'
import { Product, ProductOption, ProductOptionValues } from '@commerce/types/product'
import TextTruncate from 'react-truncate'
import { setBgColor, setLabel } from '@burnna/utils/colors'

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
	const [colorOptions, setColorOptions] = useState<ProductOption | null>(null)

	const handleMouseEnter = () => {
		setShowDetails(true)
	}
	const handleMouseLeave = () => {
		setShowDetails(false)
	}

	useEffect(() => {
		if (product.options.length > 0) {
			getColorOptions(product.options)
		}
	}, [colorOptions])

	const getColorOptions = (options: ProductOption[]) => {
		const colorOpts = options.find(opt => opt.displayName.match(/colou?r/gi))
		if (colorOpts) {
			setColorOptions(colorOpts)
		}
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
				{product.options && (
					<div className={classes.productVariantsContainer}>
						<Grow timeout={{ enter: 500, exit: 500 }} in={showDetails}>
							<div className={classes.productVariants}>
								{colorOptions?.values &&
									colorOptions?.values.map((v: ProductOptionValues) => (
										<Tooltip
											key={v?.label}
											title={setLabel(v.label)}
											placement="right">
											<Box
												className={classes.productColorVariantBadge}
												style={{
													background: v.hexColors
														? setBgColor(v.hexColors)
														: 'transparent',
												}}
											/>
										</Tooltip>
									))}
							</div>
						</Grow>
					</div>
				)}
			</div>

			<div className={classes.productCaptionRow}>
				<NextLink href={`/product/${product.slug}`} passHref>
					<Link className={classes.productTitleLink}>
						<TextTruncate lines={1}>
							<Typography component="h4" className={classes.productTitle}>
								{product.name}
							</Typography>
						</TextTruncate>
					</Link>
				</NextLink>
				<Typography component="h4" className={classes.productPrice}>
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
		alignItems: 'center',
		padding: `${theme.spacing(1)}px ${theme.spacing(2) - 4}px`,
		color: theme.palette.primary.main,
		whiteSpace: 'nowrap',
		[theme.breakpoints.down('sm')]: {
			padding: `2px 4px`,
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
		[theme.breakpoints.down('md')]: {
			padding: `${theme.spacing(1) - 4}px ${theme.spacing(1)}px`,
		},
		'& a': {
			textDecoration: 'none',
		},
		'& a:hover': {
			textDecoration: 'underline',
		},
	},
	productTitleLink: {
		width: '100%',
		fontWeight: 700,
		[theme.breakpoints.down('sm')]: {
			fontWeight: 400,
		},
	},
	productTitle: {
		textTransform: 'uppercase',
		color: theme.palette.primary.main,
		fontWeight: 700,
		fontSize: theme.typography.caption.fontSize,
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			fontWeight: 400,
			fontSize: theme.typography.body2.fontSize,
		},
		[theme.breakpoints.up(1536)]: {
			fontSize: theme.typography.body1.fontSize,
		},
	},
	productPrice: {
		cursor: 'default',
		fontWeight: 700,
		fontSize: theme.typography.caption.fontSize,
		[theme.breakpoints.down('sm')]: {
			fontWeight: 400,
			fontSize: theme.typography.body2.fontSize,
		},
		[theme.breakpoints.up(1536)]: {
			fontSize: theme.typography.body1.fontSize,
		},
	},
}))

export default CollectionGridItem
