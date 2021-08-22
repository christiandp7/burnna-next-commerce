import React, { FC } from 'react'
import Container from '@material-ui/core/Container'
import { FAQLayout } from '@burnna/layouts'
import { FAQHeading, FAQAccordion } from '@burnna/components'
// data
import { returnPolicyFaqs } from '@burnna/data'

const ReturnPolicy: FC = () => {
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
