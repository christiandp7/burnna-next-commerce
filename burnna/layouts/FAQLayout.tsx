import React, { FC, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
// import FAQSidebar from '../components/FAQSidebar/FAQSidebar'
// import Cart from '../components/Cart/Cart'
// import { Scrollbars } from 'react-custom-scrollbars-2'
import { Header, Footer } from '@burnna/components'
import { CartSidebar, FAQSidebar } from '@burnna/components/Drawer'

// const drawerWidth = 190

interface Props {
	top?: string
	bottom?: string
	mobTop?: string
	alignItemsCenter?: boolean
}

const InfoLayout: FC<Props> = ({ children, ...props }) => {
	const classes = useStyles(props)

	return (
		<div className={classes.root}>
			<FAQSidebar />
			<CartSidebar />
			{/* <Scrollbars
				style={{ height: '100vh' }}
				className={classes.contentWrapper}
				autoHide
				autoHideTimeout={2000}
				autoHideDuration={300}> */}
			<div className={classes.contentWrapper}>
				<Header
					faqLayout
					// openSidebar={setSidebar}
					// openCart={setCart}
					// menu={false}
				/>
				<main className={classes.main}>{children}</main>
				<Footer />
			</div>
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
			paddingTop: props.top || '50px',
			paddingBottom: props.bottom || '30px',
			minHeight: 'calc(100vh - 40px)',
			display: props.alignItemsCenter ? 'flex' : 'block',
			alignItems: 'center',
			[theme.breakpoints.down('md')]: {
				paddingTop: props.mobTop || '40px',
				paddingBottom: props.bottom || '12px',
			},
		}),
		contentWrapper: {
			width: '100%', // temporal style
			[theme.breakpoints.up('lg')]: {
				marginLeft: '190px',
			},
			// flexGrow: 1,
		},
	}),
)

export default InfoLayout
