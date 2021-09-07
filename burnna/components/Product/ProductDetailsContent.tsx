import React, { FC } from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import Scrollbars from 'react-custom-scrollbars-2'
import parse from 'html-react-parser'
import { FiX } from 'react-icons/fi'
import { useDrawer } from '@burnna/context/DrawerContext'

interface Props {
	description: string
}

const ProductDetailsContent: FC<Props> = ({ description }) => {
	const { setInfoSidebar } = useDrawer()
	const classes = useStyles()
	return (
		<Scrollbars
			style={{ minHeight: '100vh' }}
			autoHide
			autoHideTimeout={2000}
			autoHideDuration={300}
			className={classes.root}>
			{/* <div className={classes.root}> */}
			<Grid container wrap="nowrap" direction="column" className={classes.container}>
				<Grid item className={classes.header}>
					<AppBar
						component="div"
						elevation={0}
						position="static"
						color="transparent">
						<Toolbar variant="dense">
							<IconButton
								aria-label="close"
								disableRipple
								color="secondary"
								style={{ marginLeft: 'auto' }}
								edge="end"
								onClick={() => setInfoSidebar({ open: false, view: 'details' })}>
								<FiX />
							</IconButton>
						</Toolbar>
					</AppBar>
				</Grid>
				<Grid item xs className={classes.body}>
					<div className={classes.rte}>{parse(description && description)}</div>
				</Grid>
			</Grid>
		</Scrollbars>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			color: theme.palette.primary.contrastText,
			cursor: 'default',
		},
		container: {
			height: '100%',
		},
		header: {
			paddingTop: theme.spacing(2),
		},
		body: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		rte: {
			padding: `0 ${theme.spacing(4)}px`,
			paddingTop: theme.spacing(3),
			paddingBottom: theme.spacing(3),
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
