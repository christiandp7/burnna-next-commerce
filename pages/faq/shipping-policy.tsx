import React, { FC } from 'react'
import Container from '@material-ui/core/Container'
import { Layout } from '@components/common'
import { FAQLayout } from '@burnna/layouts'
import { FAQHeading, FAQAccordion } from '@burnna/components'
// data
import { shippingPolicyFaqs } from '@burnna/data'

function ShippingPolicy() {
	return (
		<FAQLayout top="30px" mobTop="30px" alignItemsCenter>
			<Container>
				<FAQHeading>Shipping policy</FAQHeading>
				<FAQAccordion faqs={shippingPolicyFaqs} />
			</Container>
		</FAQLayout>
	)
}

export default ShippingPolicy

ShippingPolicy.Layout = Layout
