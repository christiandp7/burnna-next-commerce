import React, { FC } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Layout } from '@components/common'
import Container from '@material-ui/core/Container'
import { FAQLayout } from '@burnna/layouts'
import parse from 'html-react-parser'
// lib
import commerce from '@lib/api/commerce'
import { makeStyles, Theme, createStyles } from '@material-ui/core'

export async function getStaticProps({
	locale,
	locales,
	preview,
}: GetStaticPropsContext) {
	const config = { locale, locales }
	const pagePromise = commerce.getPage({
		variables: { id: 'Z2lkOi8vc2hvcGlmeS9QYWdlLzg1MjMyODc3NzUz' },
		config,
		preview,
	})
	const { page } = await pagePromise
	const i18n = await serverSideTranslations(locale!, ['common'])

	return {
		props: {
			page,
			...i18n,
		},
	}
}

function Payment({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
	const textContent = page ? page?.body : ''
	const classes = useStyles()
	return (
		<FAQLayout top="60px" mobTop="50px" alignItemsCenter>
			<Container className={classes.rte}>{parse(textContent)}</Container>
		</FAQLayout>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		rte: {
			'& h2, & h3': {
				fontWeight: 700,
				fontFamily: theme.typography.h6.fontFamily,
				fontSize: theme.typography.h5.fontSize,
				textUnderlineOffset: '4px',
				marginBottom: theme.spacing(3),
			},
			'& a': {
				color: theme.palette.primary.main,
			},
		},
	}),
)

export default Payment

Payment.Layout = Layout
