import React, { FC, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
// import FAQSidebar from '../components/FAQSidebar/FAQSidebar'
// import Cart from '../components/Cart/Cart'
// import { Scrollbars } from 'react-custom-scrollbars-2'
import { Header, Footer } from '@burnna/components'

// const drawerWidth = 190

interface Props {
	top?: string
	bottom?: string
	mobTop?: string
	alignItemsCenter?: boolean
}

const InfoLayout: FC<Props> = ({ children, ...props }) => {
	// const [sidebar, setSidebar] = useState(false)
	// const [cart, setCart] = useState(false)

	const classes = useStyles(props)

	return (
		<div className={classes.root}>
			{/* <FAQSidebar open={sidebar} setOpen={setSidebar} /> */}
			{/* <Cart open={cart} setOpen={setCart} /> */}
			{/* <Scrollbars
				style={{ height: '100vh' }}
				className={classes.scrollbars}
				autoHide
				autoHideTimeout={2000}
				autoHideDuration={300}> */}
			<Header
				faqLayout
				// openSidebar={setSidebar}
				// openCart={setCart}
				// menu={false}
			/>
			<main className={classes.main}>{children}</main>
			<Footer />
			{/* </Scrollbars> */}
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		main: (props: Props) => ({
			paddingTop: props.top || '65px',
			paddingBottom: props.bottom || '30px',
			minHeight: 'calc(100vh - 65px)',
			display: props.alignItemsCenter ? 'flex' : 'block',
			alignItems: 'center',
			[theme.breakpoints.down('md')]: {
				paddingTop: props.mobTop || '40px',
				paddingBottom: props.bottom || '12px',
			},
		}),
		scrollbars: {
			[theme.breakpoints.up('md')]: {
				marginLeft: '190px',
			},
			// flexGrow: 1,
		},
	}),
)

export default InfoLayout
