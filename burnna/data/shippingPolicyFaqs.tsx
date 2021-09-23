import Typography from '@material-ui/core/Typography'

const shippingPolicyFaqs = [
	{
		summary: 'Do I have to pay duties and taxes?',
		details: (
			<>
				<Typography paragraph>
					International customers please be aware that your country may be subject to
					additional taxes, customs duties and fees levied by the destination
					country. These fees are the responsability of the recipient to pay upon
					delivery and are not included in the product price. BURNNA is under no
					responsibility to accept a return, nor issue a refund, where the customer
					has declined to pay these fees.
				</Typography>
				<Typography paragraph>
					Shipments which are rejected by the receiver may result in the customer
					incurring a redirection fee. If the package is returned to BURNNA, the
					customer forfeits the original shipping and return cost.
				</Typography>
				<Typography paragraph>
					BURNNA has no control over processing times or duty rates by Customs in
					each country.
				</Typography>
				<Typography paragraph>
					If by any reason you want to return or exchange your item, any duties paid
					won't be refunded.
				</Typography>
			</>
		),
	},
	{
		summary: 'What if my order arrives damage?',
		details: (
			<>
				<Typography paragraph>
					Orders are usually processed and shipped within 3 to 5 business days after
					they are placed. It can sometimes take an additional 2 to 3 business days
					during peak holiday season, *extrabusy* sales periods, or in cases of any
					unforeseen natural calamities or Enhanced Community Quarantine (ECQ).
				</Typography>
			</>
		),
	},
	{
		summary: 'Do you ship internationally? ',
		details: (
			<>
				<Typography paragraph>Yes we do!</Typography>
				<Typography paragraph>
					Standard orders are typically processed between 3-8 business days. Orders
					are in transit business days only. Please be aware that at times,
					unexpected delays may occur which BURNNA has no control over and is not
					responsible for.
				</Typography>
				<Typography paragraph>
					Orders cannot be cancelled after they have been confirmed through our
					website. As soon as we process your order and your package has left, you
					will receive a shipping confirmation email including a tracking number. If
					you’re having trouble with your order, please don’t hesitate to contact us.
				</Typography>
			</>
		),
	},
	{
		summary: 'How do I track my order?',
		details: (
			<>
				<Typography paragraph>
					Once your order is processed you will receive a confirmation email from
					BURNNA with tracking information.
				</Typography>
			</>
		),
	},
	{
		summary: 'Do I have to pay duties and taxes?',
		details: (
			<>
				<Typography paragraph>
					International customers please be aware that your country may be subject to
					additional taxes, customs duties and fees levied by the destination
					country. NAGNATA is under no responsibility to accept a return, nor issue a
					refund, where the customer has declined to pay these fees.
				</Typography>
				<Typography paragraph>
					Shipments which are rejected by the receiver may result in the customer
					incurring a redirection fee. If the package is returned to NAGNATA, the
					customer forfeits the original shipping cost.
				</Typography>
			</>
		),
	},
	{
		summary: 'Can I get free shipping?',
		details: (
			<>
				<Typography paragraph>
					No. We are a small business + do not have big margins on our products which
					would factor in shipping costs, therefore we cannot absorb the cost of
					complimentary shipping or returns.
				</Typography>
			</>
		),
	},
]

export default shippingPolicyFaqs
