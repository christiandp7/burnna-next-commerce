import React from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const LocaleSwitcher = () => {
	const { locale, asPath: currentPath } = useRouter()
	return (
		<NextLink
			href={currentPath}
			passHref
			locale={locale === 'en-US' ? 'es' : 'en-US'}>
			<Link>
				<Typography variant="h5" color="primary">
					{locale === 'en-US' ? 'Es' : 'En'}
				</Typography>
			</Link>
		</NextLink>
	)
}

export default LocaleSwitcher
