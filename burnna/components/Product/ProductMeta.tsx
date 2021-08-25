import React, { FC, useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
// import Button from '@material-ui/core/Button'
// components
// import AddToCartButton from '../Button/AddToCartButton'
// import ColorSelectorButtonGroup from '../Button/ColorSelectorButtonGroup'
// import CustomAccordion from '../Accordion/CustomAccordion'
// import SizeSelectorButtonGroup from '../Button/SizeSelectorButtonGroup'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
// import LinkButton from '../Button/LinkButton'
// import DrawerContext from '../../context/DrawerContext'
import usePrice from '@framework/product/use-price'
import Sticky from 'react-sticky-el'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import type { Product } from '@commerce/types/product'
import AddToCart from './AddToCart'
import { ProductOptions } from '@burnna/components/Product'
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

	const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

	useEffect(() => {
		selectDefaultOptionFromProduct(product, setSelectedOptions)
	}, [product])

	return (
		<div className={`${classes.slugContainer} slugContainer`}>
			<Sticky disabled={!isDesktop} boundaryElement=".slugContainer">
				<div className={classes.rootWrapper}>
					<div className={classes.root}>
						<div className={classes.wrapper}>
							<div className={classes.productHeading}>
								<Typography
									component="h2"
									variant="h3"
									className={classes.productTitle}>
									{product.name}
								</Typography>
								{/* <Typography
						component="h3"
						variant="h4"
						className={classes.productSubtitle}>
						One Piece
					</Typography> */}
							</div>
							{/* product Options here */}
							{product.options && product.options.length > 0 && (
								<ProductOptions
									options={product.options}
									selectedOptions={selectedOptions}
									setSelectedOptions={setSelectedOptions}
								/>
							)}
							<div className={classes.addToCartContainer}>
								<AddToCart product={product} />
							</div>
						</div>
						<div className={classes.accordionContainer}>
							{/* <CustomAccordion /> */}
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
			paddingBottom: theme.spacing(3),
			cursor: 'default',
		},
		productTitle: {},
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
