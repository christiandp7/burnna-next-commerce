import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const TopBanner = () => {
	const classes = useStyles()
	const { t } = useTranslation('common')

	return (
		<div className={classes.root}>
			<Typography color="secondary" component="span" className={classes.text}>
				{t('topBannerText')}
			</Typography>
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: theme.palette.primary.main,
			padding: '8px 12px',
			textAlign: 'center',
			lineHeight: 1,
			[theme.breakpoints.down('md')]: {
				padding: '5px 12px',
			},
		},
		text: {
			letterSpacing: '0.05rem',
			lineHeight: 1,
		},
	}),
)

export default TopBanner
