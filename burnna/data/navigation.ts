export type NavItem = {
	label: string
	href: string
}

export const sidebarNavigation: NavItem[] = [
	{
		label: 'women',
		href: '/collection/women',
	},
	{
		label: 'men',
		href: '/collection/men',
	},
	{
		label: 'explore',
		href: '/explore',
	},
	{
		label: 'aboutUs',
		href: '/about',
	},
	{
		label: 'contact',
		href: '/contact',
	},
	{
		label: 'FAQ',
		href: '/faq/return-policy',
	},
]

export const faqNavigation: NavItem[] = [
	{
		label: 'payment',
		href: '/faq/payment',
	},
	// {
	// 	label: 'Product Care',
	// 	href: '/faq/product-care',
	// },
	{
		label: 'sizeGuide',
		href: '/faq/size-guide',
	},
	{
		label: 'returnPolicy',
		href: '/faq/return-policy',
	},
	{
		label: 'shippingPolicy',
		href: '/faq/shipping-policy',
	},
]
