import Typography from '@material-ui/core/Typography'

const returnPolicyFaqs = [
	{
		summary: 'Can I get a refund?',
		details: (
			<>
				<Typography paragraph>
					At Burnna we do not accept refunds for change of mind, however we want you
					to find the perfect fit for your body so we are happy to organize a credit
					note for you. Burnna is unable to receive any changes or cancellations on
					orders that have already been placed with our online store.
				</Typography>
				<Typography paragraph>
					Customers are responsible for the cost of return shipping. You are
					responsible for the original shipping charges, any duties, taxes and/or
					customs charges that are incurred on the package, and the cost of returning
					the package to us. This amount will be deducted from your purchase credit.
				</Typography>
			</>
		),
	},
	{
		summary: 'What if my order arrives damage?',
		details: (
			<>
				<Typography paragraph>
					Whilst we hope this never happens, we work hard to ensure all items sold
					meet the highest quality standars. If you do receive damaged goods, or have
					a manufacturing fault occur, please contact us immediately
					contact@burnna.com with photo evidence so we can personally assists you and
					sort out your problem as quickly as possible. Items must be in their
					original condition, with hang tags remaining in place and packaging, Items
					must be unworn and unwashed.
				</Typography>
				<Typography paragraph>
					We do not accept returns that fail to meet these requirements.
				</Typography>
				<Typography paragraph>
					Burnna has the right to reject a return if the product is not deemed
					faulty. We are not responsible for any items that have been lost when
					returning a faulty product, therefore we suggest returning items using a
					reliable courier with a tracking option.
				</Typography>
				<Typography paragraph>
					Return handling and return shipping costs are responsibility of the
					customer. Shipping cost are non-refundable.
				</Typography>
			</>
		),
	},
	{
		summary: 'Sales Items',
		details: (
			<Typography paragraph>
				Sales items do not have an exchange or refund.
			</Typography>
		),
	},
	{
		summary: 'How long does a exchange take to process?',
		details: (
			<>
				<Typography paragraph>
					Once we have your items checked in, please give us 4 to 10 business days to
					process your exchange. We’ll notify you once we’ve received and inspected
					the item/s, and confirm whether or not your exchange has been approved.
				</Typography>
				<Typography paragraph>
					For exchanges, we’ll send you a confirmation email to let you know when
					your exchange is on the way. <br />
					To create a voucher, please email us to contact@burnna.com
				</Typography>
			</>
		),
	},
	{
		summary: 'Important Information',
		details: (
			<ul>
				<Typography component="li" paragraph>
					Items must be returned to us in perfect condition accompanied by the return
					information label.
				</Typography>
				<Typography component="li" paragraph>
					Make sure all products are exactly as you received them, with tag and seal
					still attached.
				</Typography>
				<Typography component="li" paragraph>
					All shoes must be tried on a carpeted surface until you have decided to
					keep them.
				</Typography>
				<Typography component="li" paragraph>
					All products that come in their own box, including but not limited to shoes
					and accessories, must be returned in their original, undamaged box as this
					is considered part of the product.
				</Typography>
				<Typography component="li" paragraph>
					Please make sure to return tall products that come in their own box inside
					another solid carton box to not damage the original packaging.
				</Typography>
			</ul>
		),
	},
	{
		summary: 'Lost, damaged & stole items',
		details: (
			<Typography paragraph>
				BURNNA is not responsible for any lost, damaged or stolen packages once it is
				shipped from out facility. In addition, packages that say delivered that have
				not arrived fall in the lost, damaged and stolen category. Please contact the
				shipping carrier and open an enquiry directly.
			</Typography>
		),
	},
]

export default returnPolicyFaqs
