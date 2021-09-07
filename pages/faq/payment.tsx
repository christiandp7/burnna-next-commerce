import React, { FC } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticPropsContext } from 'next'
import { Layout } from '@components/common'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
// import Heading from '../../components/Typography/Heading'
// import FAQLayout from '../../layouts/FAQLayout'
import { FAQHeading } from '@burnna/components'
import { FAQLayout } from '@burnna/layouts'

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	const i18n = await serverSideTranslations(locale!, ['common'])
	return {
		props: {
			...i18n,
		},
	}
}

function Payment() {
	return (
		<FAQLayout top="50px" mobTop="30px" alignItemsCenter>
			<Container>
				<FAQHeading>Payment</FAQHeading>
				<Typography paragraph>
					<u>
						We accept MasterCard, VISA, VISA Electron, American Express, Discover,
						PayPal and Bank Transfer
					</u>
				</Typography>
				<Typography paragraph>
					All transactions are encrypted for your safety, for more information about
					card purchases please read our Privacy policy.
				</Typography>
				<Typography paragraph>
					If the card transaction is approved, the amount will be reserved
					immediately and you will receive an order confirmation to your email.{' '}
					<br /> If the credit card transaction is not approved, your order will be
					cancelled. <br /> Please contact your bank or card provider if you have any
					questions about this.
				</Typography>
			</Container>
		</FAQLayout>
	)
}

export default Payment

Payment.Layout = Layout
