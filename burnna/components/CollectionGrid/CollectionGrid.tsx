import React, { FC } from 'react'
import type { Product } from '@commerce/types/product'
import Grid from '@material-ui/core/Grid'
import { CollectionGridItem } from '@burnna/components'
import Skeleton from '@material-ui/lab/Skeleton'
import rangeMap from '@lib/range-map'
import { makeStyles, createStyles, Theme } from '@material-ui/core'

interface Props {
	products: Product[]
	isLoading: boolean
}

const CollectionGrid: FC<Props> = ({ products, isLoading }) => {
	// console.log(products)
	return (
		<Grid container>
			{isLoading
				? rangeMap(6, i => <SkeletonGridItem key={i} />)
				: products.map(product => (
						<Grid item xs={6} sm={4} key={product.path}>
							<CollectionGridItem product={product} />
						</Grid>
				  ))}
		</Grid>
	)
}

const SkeletonGridItem: FC = () => {
	const classes = useStyles()
	return (
		<Grid item xs={6} sm={4} className={classes.container}>
			<Skeleton animation="wave" variant="rect" height="60vw" width="100%" />
			<Skeleton animation="wave" variant="text" width="60%" />
			<Skeleton animation="wave" variant="text" width="36%" />
		</Grid>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			padding: `0 ${theme.spacing(1)}px`,
			paddingBottom: theme.spacing(1),
			[theme.breakpoints.up('sm')]: {
				'& > span:first-child': {
					maxHeight: '38vw',
				},
			},
			// [theme.breakpoints.up('md')]: {
			// 	'& > span:first-child': {
			// 		maxHeight: '40vw',
			// 	},
			// },
		},
	}),
)

export default CollectionGrid
