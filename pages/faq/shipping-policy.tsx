import React, { FC } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticPropsContext } from 'next'
import Container from '@material-ui/core/Container'
import { Layout } from '@components/common'
import { FAQLayout } from '@burnna/layouts'
import { FAQHeading, FAQAccordion } from '@burnna/components'
// data
import { shippingPolicyFaqs } from '@burnna/data'

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	const i18n = await serverSideTranslations(locale!, ['common'])
	return {
		props: {
			...i18n,
		},
	}
}

function ShippingPolicy() {
	return (
		<FAQLayout top="60px" mobTop="50px" alignItemsCenter>
			<Container>
				<FAQHeading>Shipping policy</FAQHeading>
				<FAQAccordion faqs={shippingPolicyFaqs} />
			</Container>
		</FAQLayout>
	)
}

export default ShippingPolicy

ShippingPolicy.Layout = Layout
