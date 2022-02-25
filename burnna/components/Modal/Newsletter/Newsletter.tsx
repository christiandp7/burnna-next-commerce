import React from 'react'
import Image from 'next/image'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { FiX } from 'react-icons/fi'
import Hidden from '@material-ui/core/Hidden'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const Newsletter = () => {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Open Newsletter 1
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				{/* <DialogTitle id="alert-dialog-title">
					{"Use Google's location service?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Let Google help apps determine location. This means sending anonymous
						location data to Google, even when no apps are running.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Disagree
					</Button>
					<Button onClick={handleClose} color="primary" autoFocus>
						Agree
					</Button>
				</DialogActions> */}
				<Grid container className={classes.modalContainer}>
					<Hidden smDown>
						<Grid item xs>
							<div className={classes.imageContainer}>
								<Image
									quality="100"
									src="/images/campaign/campaign_05.jpg"
									alt="Newsletter image"
									width={1200}
									height={1789}
									layout="fill"
									objectFit="cover"
									objectPosition="top"
								/>
							</div>
						</Grid>
					</Hidden>
					<Grid item xs>
						<div className={classes.formOuter}>
							<IconButton
								aria-label="close"
								size="small"
								onClick={handleClose}
								className={classes.closeButton}>
								<FiX />
							</IconButton>
							<div className={classes.formContainer}>
								<div className={classes.formHeading}>
									<Typography variant="h1" className={classes.formTitle}>
										Newsletter
									</Typography>
									<Typography className={classes.formSubtitle}>
										Subiscribe to our Newsletter for news.
									</Typography>
								</div>

								<form>
									<TextField
										id="outlined-basic"
										label="Name"
										variant="outlined"
										required
										size="small"
										fullWidth
										className={classes.inputText}
									/>
									<TextField
										id="outlined-basic"
										label="Email"
										variant="outlined"
										required
										size="small"
										fullWidth
										className={classes.inputText}
									/>
									<Button
										color="primary"
										size="large"
										fullWidth
										className={classes.submitButton}>
										Subscribe
									</Button>
								</form>
							</div>
						</div>
					</Grid>
				</Grid>
			</Dialog>
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modalContainer: {
			width: '500px',
			[theme.breakpoints.down('sm')]: {
				width: '100%',
			},
		},
		imageContainer: {
			position: 'relative',
			width: '100%',
			height: '100%',
		},
		formOuter: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			position: 'relative',
			height: '100%',
			width: '100%',
		},
		formContainer: {
			width: '100%',
			padding: `${theme.spacing(5)}px ${theme.spacing(2)}px`,
		},
		closeButton: {
			position: 'absolute',
			top: theme.spacing(1),
			right: theme.spacing(1),
		},
		formHeading: {
			marginBottom: theme.spacing(2),
			textAlign: 'center',
		},
		formTitle: {
			textAlign: 'center',
			fontWeight: 900,
			cursor: 'default',
			marginBottom: theme.spacing(1),
		},
		formSubtitle: {},
		inputText: {
			marginBottom: `${theme.spacing(1) + 2}px`,
		},
		submitButton: {
			background: theme.palette.primary.main,
			color: theme.palette.primary.contrastText,
			marginTop: theme.spacing(1),
			'&:hover': {
				background: '#403737',
				boxShadow: '0 2px 10px 1px rgba(10, 10, 10, .3)',
			},
		},
	}),
)

export default Newsletter
