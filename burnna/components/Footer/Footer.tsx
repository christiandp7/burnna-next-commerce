import React, { FC } from 'react'
import NextLink from 'next/link'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
// assets
import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { GrSpotify } from 'react-icons/gr'
import { LogoFull } from '@burnna/svg'

const Footer: FC = () => {
	const classes = useStyles()
	return (
		<footer className={classes.footer}>
			<div className={classes.logoFooterContainer}>
				<LogoFull className={classes.logoFooter} />
			</div>
			<div className={classes.footerContent}>
				<Container>
					<Box display="Flex" justifyContent="space-between">
						<Grid className={classes.colContainer} container>
							<Grid item xs={12} md={6}>
								<List component="ul">
									<ListItem component="li">
										<Typography className={`${classes.subtitle} ${classes.link}`}>
											Support
										</Typography>
									</ListItem>
									<ListItem>
										<NextLink href="/contact" passHref>
											<Link className={classes.link}>Contact</Link>
										</NextLink>
									</ListItem>
									<ListItem>
										<NextLink href="/faq/return-policy" passHref>
											<Link className={classes.link}>Returns</Link>
										</NextLink>
									</ListItem>
								</List>
							</Grid>
							<Grid item xs={12} md={6}>
								<List component="ul">
									<ListItem component="li">
										<Typography className={`${classes.subtitle} ${classes.link}`}>
											Information
										</Typography>
									</ListItem>
									<ListItem>
										<NextLink href="/faq/payment" passHref>
											<Link className={classes.link} href="#">
												Faq
											</Link>
										</NextLink>
									</ListItem>
									<ListItem>
										<NextLink href="/faq/size-guide" passHref>
											<Link className={classes.link}>Size Guide</Link>
										</NextLink>
									</ListItem>
									<ListItem>
										<NextLink href="/faq/payment" passHref>
											<Link className={classes.link}>Payment Methods</Link>
										</NextLink>
									</ListItem>
									<ListItem>
										<NextLink href="/faq/shipping-policy" passHref>
											<Link className={classes.link}>Shipping</Link>
										</NextLink>
									</ListItem>
								</List>
							</Grid>
						</Grid>
						<Grid className={classes.colContainer} container>
							<Grid item xs={12} md={6}>
								<List component="ul">
									<ListItem component="li">
										<Typography className={`${classes.subtitle} ${classes.link}`}>
											Social
										</Typography>
									</ListItem>
									<ListItem>
										<Link className={classes.link} href="#">
											<IconButton
												className={classes.socialIcon}
												size="small"
												color="inherit">
												<FaFacebookF />
											</IconButton>
										</Link>
									</ListItem>
									<ListItem>
										<Link className={classes.link} href="#">
											<IconButton
												className={classes.socialIcon}
												size="small"
												color="inherit">
												<GrSpotify />
											</IconButton>
										</Link>
									</ListItem>
									<ListItem>
										<Link
											className={classes.link}
											href="https://www.instagram.com/burnnaswim/"
											target="_blank">
											<IconButton
												className={classes.socialIcon}
												size="small"
												color="inherit">
												<GrInstagram />
											</IconButton>
										</Link>
									</ListItem>
								</List>
							</Grid>
							<Grid item xs={12} md={6}>
								<List component="ul">
									<ListItem component="li">
										<Typography className={`${classes.subtitle} ${classes.link}`}>
											Company
										</Typography>
									</ListItem>
									<ListItem>
										<NextLink href="/about" passHref>
											<Link className={classes.link} href="#">
												About
											</Link>
										</NextLink>
									</ListItem>
									<ListItem>
										<Link className={classes.link} href="#">
											Campaigns
										</Link>
									</ListItem>
									<ListItem>
										<Link className={classes.link} href="#">
											Collabs
										</Link>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</div>
		</footer>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		footer: {
			textTransform: 'uppercase',
		},
		logoFooterContainer: {
			textAlign: 'center',
			margin: '50px 0',
			[theme.breakpoints.down('xs')]: {
				margin: '35px 0',
			},
		},
		logoFooter: {
			maxWidth: '240px',
			[theme.breakpoints.down('sm')]: {
				maxWidth: '38%',
			},
			[theme.breakpoints.down('xs')]: {
				maxWidth: '40%',
			},
		},
		footerContent: {
			color: theme.palette.primary.contrastText,
			backgroundColor: theme.palette.primary.main,
			paddingTop: '85px',
			paddingBottom: '70px',
			[theme.breakpoints.down('xs')]: {
				paddingTop: '55px',
				paddingBottom: '60px',
			},
		},
		colContainer: {
			width: '35%',
			[theme.breakpoints.down('xs')]: {
				width: '45%',
			},
		},
		subtitle: {
			fontWeight: 900,
			cursor: 'default',
		},
		link: {
			fontSize: theme.typography.subtitle1.fontSize,
			color: theme.palette.primary.contrastText,
			letterSpacing: '0.5px',
		},
		socialIcon: {
			color: theme.palette.primary.main,
			padding: '8px',
			backgroundColor: theme.palette.primary.contrastText,
			'&:hover': {
				backgroundColor: grey[400],
			},
		},
	}),
)

export default Footer
