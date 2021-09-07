import React, { FC } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticPropsContext } from 'next'
import Container from '@material-ui/core/Container'
import { Layout } from '@components/common'
import { FAQLayout } from '@burnna/layouts'
import { FAQHeading, FAQAccordion } from '@burnna/components'
// data
import { returnPolicyFaqs } from '@burnna/data'

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	const i18n = await serverSideTranslations(locale!, ['common'])
	return {
		props: {
			...i18n,
		},
	}
}

function ReturnPolicy() {
	return (
		<FAQLayout mobTop="30px" alignItemsCenter>
			<Container>
				<FAQHeading>Return policy</FAQHeading>
				<FAQAccordion faqs={returnPolicyFaqs} />
			</Container>
		</FAQLayout>
	)
}

export default ReturnPolicy

ReturnPolicy.Layout = Layout
