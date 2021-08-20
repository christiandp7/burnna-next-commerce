import React, { FC, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
// import HomeHeader from '../components/HomeHeader/HomeHeader'
// import Footer from '../components/Footer/Footer'
// import { Scrollbars } from 'react-custom-scrollbars-2'

interface Props {
	children: React.ReactNode
}

const HomeLayout: FC<Props> = ({ children }) => {
	// const [sidebar, setSidebar] = useState(false)
	// const [cart, setCart] = useState(false)

	const classes = useStyles()

	return (
		<>
			{/* <HomeHeader /> */}
			<main className={classes.main}>{children}</main>
			{/* <Footer /> */}
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
