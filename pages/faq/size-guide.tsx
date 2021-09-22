import React, { FC } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticPropsContext } from 'next'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import { Layout } from '@components/common'
import { FAQLayout } from '@burnna/layouts'
import { SizeGuideTable } from '@burnna/components'

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	const i18n = await serverSideTranslations(locale!, ['common'])
	return {
		props: {
			...i18n,
		},
	}
}

function SizeGuide() {
	const classes = useStyles()
	return (
		<FAQLayout top="100px" mobTop="50px" alignItemsCenter>
			<Container maxWidth="sm">
				<div className={classes.heading}>
					<Typography component="h1" variant="h4">
						Size Guide
					</Typography>
					<Typography variant="h4" color="initial">
						women
					</Typography>
				</div>
				<SizeGuideTable />
				{/* <MeasurementsTable /> */}
			</Container>
		</FAQLayout>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		heading: {
			textAlign: 'center',
			marginBottom: theme.spacing(3),
			'& > h1': {
				fontFamily: theme.typography.h6.fontFamily,
				fontWeight: theme.typography.fontWeightBold,
				marginBottom: theme.spacing(1),
			},
			'& > h4': {
				fontWeight: theme.typography.fontWeightBold,
			},
		},
	}),
)

export default SizeGuide

SizeGuide.Layout = Layout
