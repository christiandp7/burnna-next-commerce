import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
// import Sidebar from '../components/Sidebar/Sidebar'
// import Header from '../components/Header/Header'
// import Footer from '../components/Footer/Footer'
// import Cart from '../components/Cart/Cart'
import { Footer, Header } from '@burnna/components'
import { CartSidebar, Sidebar } from '@burnna/components/Drawer'

interface Props {
	children: React.ReactNode
}

const MainLayout: FC<Props> = ({ children, ...props }) => {
	const classes = useStyles(props)

	return (
		<>
			<Sidebar />
			<CartSidebar />
			<Header />
			<main className={classes.main}>{children}</main>
			<Footer />
		</>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		main: {
			// paddingTop: '40px',
			paddingTop: '70px', // with topBanner
			paddingBottom: '30px',
			minHeight: '70vh',
			[theme.breakpoints.down('md')]: {
				// paddingTop: '40px',
				paddingTop: '60px', // with topBanner
				paddingBottom: '12px',
			},
		},
	}),
)

export default MainLayout
