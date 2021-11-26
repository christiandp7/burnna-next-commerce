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
			padding: '4px 8px',
			textAlign: 'center',
		},
		text: {
			letterSpacing: '0.03rem',
		},
	}),
)

export default TopBanner
