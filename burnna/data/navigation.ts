export type NavItem = {
	label: string
	href: string
}

export const sidebarNavigation: NavItem[] = [
	{
		label: 'Men',
		href: '/collection/men',
	},
	{
		label: 'Women',
		href: '/collection/women',
	},
	{
		label: 'Explore',
		href: '/explore',
	},
	{
		label: 'About Us',
		href: 'about-us',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
	{
		label: 'FAQ',
		href: '/faq/return-policy',
	},
]

export const faqNavigationTop: NavItem[] = [
	{
		label: 'Payment',
		href: '/faq/payment',
	},
	{
		label: 'Product Care',
		href: '/faq/product-care',
	},
	{
		label: 'Size Guide',
		href: '/faq/size-guide',
	},
]
export const faqNavigationBottom: NavItem[] = [
	{
		label: 'Return Policy',
		href: '/faq/return-policy',
	},
	{
		label: 'Shipping Policy',
		href: '/faq/shipping-policy',
	},
]
