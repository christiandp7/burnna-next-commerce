import React, { FC, useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useDrawer } from '@burnna/context/DrawerContext'
import usePrice from '@framework/product/use-price'
import Sticky from 'react-sticky-el'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import type { Product } from '@commerce/types/product'
import AddToCart from './AddToCart'
import { ProductOptions } from '@burnna/components/Product'
import { useAddItem } from '@framework/cart'
import {
	getProductVariant,
	selectDefaultOptionFromProduct,
	SelectedOptions,
} from '@components/product/helpers'

interface Props {
	product: Product
}

const ProductMeta: FC<Props> = ({ product }) => {
	const classes = useStyles()
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

	const { price } = usePrice({
		amount: product.price.value,
		baseAmount: product.price.retailPrice,
		currencyCode: product.price.currencyCode!,
	})

	const addItem = useAddItem()
	const { setCartOpen } = useDrawer()
	const [loading, setLoading] = useState(false)
	const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

	// console.log(selectedOptions)
	console.log(product)

	useEffect(() => {
		selectDefaultOptionFromProduct(product, setSelectedOptions)
	}, [product])

	const variant = getProductVariant(product, selectedOptions)
	const addToCart = async () => {
		setLoading(true)
		try {
			await addItem({
				productId: String(product.id),
				variantId: String(variant ? variant.id : product.variants[0].id),
			})
			setCartOpen(true)
			setLoading(false)
		} catch (err) {
			setLoading(false)
		}
	}

	return (
		<div className={`${classes.slugContainer} slugContainer`}>
			<Sticky disabled={!isDesktop} boundaryElement=".slugContainer">
				<div className={classes.rootWrapper}>
					<div className={classes.root}>
						<div className={classes.wrapper}>
							<div className={classes.productHeading}>
								<Typography
									component="h1"
									variant="h1"
									className={classes.productTitle}>
									{product.name}
								</Typography>
							</div>
							{product.options && product.options.length > 0 && (
								<ProductOptions
									options={product.options}
									selectedOptions={selectedOptions}
									setSelectedOptions={setSelectedOptions}
								/>
							)}
							<div className={classes.addToCartContainer}>
								{variant && (
									<AddToCart
										addToCart={addToCart}
										loading={loading}
										variant={variant}
										price={price}
									/>
								)}
							</div>
						</div>
						<div className={classes.accordionContainer}>
							{/* <CustomAccordion /> */}
							<div className="">
								{/* {product?.descriptionHtml && product.descriptionHtml} */}
							</div>
						</div>
					</div>
				</div>
			</Sticky>
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		slugContainer: {
			[theme.breakpoints.up('md')]: {
				height: '100%',
			},
		},
		rootWrapper: {
			[theme.breakpoints.up('md')]: {
				minHeight: '100vh',
				paddingTop: '65px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			},
		},
		root: {
			padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
			textTransform: 'uppercase',
			margin: '0 auto',
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				padding: `0 ${theme.spacing(3)}px`,
			},
			[theme.breakpoints.up('md')]: {
				maxWidth: '500px',
			},
			[theme.breakpoints.up('2lg')]: {
				maxWidth: '600px',
			},
		},
		wrapper: {
			[theme.breakpoints.up('md')]: {
				// maxWidth: '85%',
			},
		},
		productHeading: {
			// paddingBottom: '30px',
			paddingBottom: theme.spacing(2),
			cursor: 'default',
		},
		productTitle: {
			// fontWeight: 700,
		},
		productSubtitle: {},

		addToCartContainer: {
			padding: '15px 0',
		},
		accordionContainer: {
			padding: '15px 0',
		},
	}),
)

export default ProductMeta
