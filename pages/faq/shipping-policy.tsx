import React, { FC } from 'react'
import Container from '@material-ui/core/Container'
import { FAQLayout } from '@burnna/layouts'
import { FAQHeading, FAQAccordion } from '@burnna/components'
// data
import { shippingPolicyFaqs } from '@burnna/data'

const ShippingPolicy: FC = () => {
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
