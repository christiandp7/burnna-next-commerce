import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import Grid from '@material-ui/core/Grid'
import rangeMap from '@lib/range-map'

const SkeletonGrid: FC = () => {
	const classes = useStyles()
	return (
		<Grid container>
			{rangeMap(6, i => (
				<Grid item xs={6} sm={4} key={i} className={classes.container}>
					<Skeleton animation="wave" variant="rect" height="60vw" width="100%" />
					<Skeleton animation="wave" variant="text" width="60%" />
					<Skeleton animation="wave" variant="text" width="36%" />
				</Grid>
			))}
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
export default SkeletonGrid
