import React, { FC } from 'react'
import Container from '@material-ui/core/Container'
import { Layout } from '@components/common'
import { FAQLayout } from '@burnna/layouts'
import { FAQHeading, FAQAccordion } from '@burnna/components'
// data
import { returnPolicyFaqs } from '@burnna/data'

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
