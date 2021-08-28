import React, { FC } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import Scrollbars from 'react-custom-scrollbars-2'
import parse from 'html-react-parser'

interface Props {
	description: string
}

const ProductDetailsContent: FC<Props> = ({ description }) => {
	const classes = useStyles()
	return (
		<Scrollbars
			style={{ minHeight: '100vh' }}
			autoHide
			autoHideTimeout={2000}
			autoHideDuration={300}
			className={classes.root}>
			{/* <div className={classes.root}> */}
			<div className={classes.rte}>{parse(description && description)}</div>
			{/* <div dangerouslySetInnerHTML={{ __html: description && description }} /> */}
			{/* </div> */}
		</Scrollbars>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			color: theme.palette.primary.contrastText,
			cursor: 'default',
			'& > div': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			},
		},
		rte: {
			padding: `0 ${theme.spacing(4)}px`,
			paddingTop: theme.spacing(5),
			paddingBottom: theme.spacing(4),
			[theme.breakpoints.down('sm')]: {
				padding: `0 ${theme.spacing(2)}px`,
			},
			'& p': {
				marginTop: 0,
			},
			'& ul': {
				paddingLeft: theme.spacing(4),
				marginTop: 0,
			},
		},
	}),
)

export default ProductDetailsContent
