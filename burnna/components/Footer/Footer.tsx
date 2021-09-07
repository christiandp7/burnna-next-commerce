import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'
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
// import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { ImWhatsapp } from 'react-icons/im'
import { GrSpotify } from 'react-icons/gr'
import { IoLogoTiktok } from 'react-icons/io5'
import { LogoFull } from '@burnna/svg'

const WAPP_NUMBER = '18298763665'
const WAPP_TEXT = 'Hello Burnna!'
const WHATSAPP = `https://wa.me/${WAPP_NUMBER}?text=${encodeURI(WAPP_TEXT)}`
const TIK_TOK = 'https://vm.tiktok.com/ZMRf4p7Tp/'
const INSTAGRAM = 'https://www.instagram.com/burnnaswim/'
const SPOTIFY = 'https://open.spotify.com/user/mariadoloreslagares'

const Footer: FC = () => {
	const classes = useStyles()
	const { t } = useTranslation('footer')
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
											{t('support')}
										</Typography>
									</ListItem>
									<ListItem>
										<NextLink href="/contact" passHref>
											<Link className={classes.link}>{t('contact')}</Link>
										</NextLink>
									</ListItem>
									<ListItem>
										<NextLink href="/faq/return-policy" passHref>
											<Link className={classes.link}>{t('returns')}</Link>
										</NextLink>
									</ListItem>
								</List>
							</Grid>
							<Grid item xs={12} md={6}>
								<List component="ul">
									<ListItem component="li">
										<Typography className={`${classes.subtitle} ${classes.link}`}>
											{t('information')}
										</Typography>
									</ListItem>
									<ListItem>
										<NextLink href="/faq/payment" passHref>
											<Link className={classes.link}>Faq</Link>
										</NextLink>
									</ListItem>
									<ListItem>
										<NextLink href="/faq/size-guide" passHref>
											<Link className={classes.link}>{t('sizeGuide')}</Link>
										</NextLink>
									</ListItem>
									<ListItem>
										<NextLink href="/faq/payment" passHref>
											<Link className={classes.link}>{t('paymentMethods')}</Link>
										</NextLink>
									</ListItem>
									<ListItem>
										<NextLink href="/faq/shipping-policy" passHref>
											<Link className={classes.link}>{t('shipping')}</Link>
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
											{t('social')}
										</Typography>
									</ListItem>
									<ListItem>
										<Link
											className={classes.link}
											target="_blank"
											rel="noopener"
											href={WHATSAPP}>
											<IconButton
												className={classes.socialIcon}
												size="small"
												color="inherit">
												<ImWhatsapp />
											</IconButton>
										</Link>
									</ListItem>
									<ListItem>
										<Link
											className={classes.link}
											target="_blank"
											rel="noopener"
											href={INSTAGRAM}>
											<IconButton
												className={classes.socialIcon}
												size="small"
												color="inherit">
												<GrInstagram />
											</IconButton>
										</Link>
									</ListItem>
									<ListItem>
										<Link
											className={classes.link}
											target="_blank"
											rel="noopener"
											href={SPOTIFY}>
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
											target="_blank"
											rel="noopener"
											href={TIK_TOK}>
											<IconButton
												className={classes.socialIcon}
												size="small"
												color="inherit">
												<IoLogoTiktok />
											</IconButton>
										</Link>
									</ListItem>
								</List>
							</Grid>
							<Grid item xs={12} md={6}>
								<List component="ul">
									<ListItem component="li">
										<Typography className={`${classes.subtitle} ${classes.link}`}>
											{t('company')}
										</Typography>
									</ListItem>
									<ListItem>
										<NextLink href="/about" passHref>
											<Link className={classes.link}>{t('about')}</Link>
										</NextLink>
									</ListItem>
									<ListItem>
										<NextLink passHref href="/campaign">
											<Link className={classes.link}>{t('campaign')}</Link>
										</NextLink>
									</ListItem>
									<ListItem>
										<NextLink passHref href="/explore">
											<Link className={classes.link}>{t('explore')}</Link>
										</NextLink>
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
