import React, { FC, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
// import Sidebar from '../components/Sidebar/Sidebar'
// import Header from '../components/Header/Header'
// import Footer from '../components/Footer/Footer'
// import Cart from '../components/Cart/Cart'
import { Footer, Header } from '@burnna/components'

interface Props {
	children: React.ReactNode
}

const MainLayout: FC<Props> = ({ children, ...props }) => {
	// const [sidebar, setSidebar] = useState(false)
	// const [cart, setCart] = useState(false)

	const classes = useStyles(props)

	return (
		<>
			{/* <Sidebar open={sidebar} setOpen={setSidebar} />
			<Cart open={cart} setOpen={setCart} /> */}
			{/* <Header openSidebar={setSidebar} /> */}
			<Header />
			<main className={classes.main}>{children}</main>
			<Footer />
		</>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		main: {
			paddingTop: '65px',
			paddingBottom: '30px',
			minHeight: '70vh',
			[theme.breakpoints.down('md')]: {
				paddingTop: 0,
				paddingBottom: '12px',
			},
		},
	}),
)

export default MainLayout
