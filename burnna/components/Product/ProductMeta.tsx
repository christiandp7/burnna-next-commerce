import React, { FC, useContext } from 'react'
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
import Sticky from 'react-sticky-el'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import type { Product } from '@commerce/types/product'

interface Props {
	product: Product
}

const ProductMeta: FC<Props> = ({ product }) => {
	const classes = useStyles()
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

	// const { setCartOpen, setSizeGuideOpen } = useContext(DrawerContext)

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
							<div className={classes.variantsContainer}>
								<div className={classes.variant}>
									<Typography component="h5" variant="h5">
										Color
									</Typography>
									<div className={`${classes.selectorWrapper} selectorColorWrapper`}>
										{/* <ColorSelectorButtonGroup /> */}
									</div>
								</div>
								<div className={classes.variant}>
									<Box
										display="flex"
										justifyContent="space-between"
										alignItems="center">
										<Typography component="h5" variant="h5">
											Size
										</Typography>
										{/* <LinkButton
											className={classes.sizeGuideButton}
											onClick={() => setSizeGuideOpen(true)}>
											Size guide
										</LinkButton> */}
									</Box>
									<div className={classes.selectorWrapper}>
										{/* <SizeSelectorButtonGroup /> */}
									</div>
								</div>
							</div>
							<div className={classes.addToCartContainer}>
								{/* <AddToCartButton onClick={() => setCartOpen(true)}>
									<Grid container justify="space-between">
										<Grid item>
											<Typography variant="h5">Add</Typography>
										</Grid>
										<Grid item>
											<Typography variant="h5">$150</Typography>
										</Grid>
									</Grid>
								</AddToCartButton> */}
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
		variantsContainer: {
			'& h5': {
				cursor: 'default',
			},
		},
		variant: {
			// padding: '15px 0',
			paddingBottom: theme.spacing(1),
		},
		sizeGuideButton: {
			fontSize: theme.typography.h5.fontSize,
			paddingTop: 0,
			paddingBottom: 0,
			'& span': {
				lineHeight: theme.typography.h5.lineHeight,
			},
		},
		selectorWrapper: {
			paddingLeft: theme.spacing(3),
			[theme.breakpoints.down('sm')]: {
				paddingLeft: theme.spacing(1),
			},
		},
		addToCartContainer: {
			padding: '15px 0',
		},
		accordionContainer: {
			padding: '15px 0',
		},
	}),
)

export default ProductMeta
