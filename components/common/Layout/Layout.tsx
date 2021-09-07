import cn from 'classnames'
import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { CommerceProvider } from '@framework'
import { useUI } from '@components/ui/context'
import type { Page } from '@commerce/types/page'
import { Navbar, Footer } from '@components/common'
import type { Category } from '@commerce/types/site'
import ShippingView from '@components/checkout/ShippingView'
import CartSidebarView from '@components/cart/CartSidebarView'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import { Sidebar, Button, Modal, LoadingDots } from '@components/ui'
import PaymentMethodView from '@components/checkout/PaymentMethodView'
import CheckoutSidebarView from '@components/checkout/CheckoutSidebarView'

import LoginView from '@components/auth/LoginView'

interface Props {
	pageProps: {
		pages?: Page[]
		categories: Category[]
	}
}

const Layout: FC<Props> = ({
	children,
	pageProps: { categories = [], ...pageProps },
}) => {
	const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
	const { locale = 'en-US' } = useRouter()
	const navBarlinks = categories.slice(0, 2).map(c => ({
		label: c.name,
		href: `/search/${c.slug}`,
	}))

	return <CommerceProvider locale={locale}>{children}</CommerceProvider>
}

export default Layout
