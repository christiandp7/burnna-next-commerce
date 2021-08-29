import React from 'react'
import NextLink from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
// components
// import LinkButton from '../Button/LinkButton'

const SizeGuideSidebarFooter = () => {
	const classes = useStyles()
	return (
		<Grid container item justify="space-between" className={classes.footer}>
			{/* <LinkButton color="secondary">Details</LinkButton> */}
			{/* <LinkButton color="secondary">Assistance</LinkButton> */}
			<NextLink passHref href="/faq/size-guide">
				<Link color="secondary">Details</Link>
			</NextLink>
			<NextLink passHref href="/faq/size-guide">
				<Link color="secondary">Assistance</Link>
			</NextLink>
		</Grid>
	)
}

const useStyles = makeStyles(theme => ({
	footer: {
		// marginTop: theme.spacing(1),
		paddingBottom: theme.spacing(3),
	},
}))

export default SizeGuideSidebarFooter