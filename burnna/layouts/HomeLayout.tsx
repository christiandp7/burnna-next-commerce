import React, { FC, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Footer, HomeHeader } from '@burnna/components'
import { CartSidebar } from '@burnna/components/Drawer'
import { Newsletter } from '@burnna/components/Modal'

interface Props {
	children: React.ReactNode
}

const HomeLayout: FC<Props> = ({ children }) => {
	// const [sidebar, setSidebar] = useState(false)
	// const [cart, setCart] = useState(false)

	const classes = useStyles()

	return (
		<>
			<CartSidebar />
			<HomeHeader />
			<main className={classes.main}>{children}</main>
			<Footer />
			<Newsletter />
		</>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		main: {
			paddingBottom: '30px',
			minHeight: '70vh',
			[theme.breakpoints.down('md')]: {
				paddingBottom: '12px',
			},
		},
	}),
)

export default HomeLayout
