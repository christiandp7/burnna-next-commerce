import React, { FC } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticPropsContext } from 'next'
import { Layout } from '@components/common'
import { FAQLayout } from '@burnna/layouts'

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	const i18n = await serverSideTranslations(locale!, ['common'])
	return {
		props: {
			...i18n,
		},
	}
}

function ProductCare() {
	return <FAQLayout>Product Care</FAQLayout>
}

export default ProductCare

ProductCare.Layout = Layout
