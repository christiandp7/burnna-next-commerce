import React, { FC, createContext, useState } from 'react'

export interface State {
	cartOpen: boolean
	sizeGuideOpen: boolean
	sidebarOpen: boolean
	faqSidebarOpen: boolean
}

const initialState = {
	cartOpen: false,
	sizeGuideOpen: false,
	sidebarOpen: false,
	faqSidebarOpen: false,
}

const DrawerContext = createContext<State | any>(initialState)

export const DrawerContextProvider: FC = ({ children }) => {
	const [cartOpen, setCartOpen] = useState(false)
	const [sizeGuideOpen, setSizeGuideOpen] = useState(false)
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const [faqSidebarOpen, setFaqSidebarOpen] = useState(false)
	return (
		<DrawerContext.Provider
			value={{
				cartOpen,
				setCartOpen,
				sizeGuideOpen,
				setSizeGuideOpen,
				sidebarOpen,
				setSidebarOpen,
				faqSidebarOpen,
				setFaqSidebarOpen,
			}}>
			{children}
		</DrawerContext.Provider>
	)
}

export const useDrawer = () => {
	const context = React.useContext(DrawerContext)
	if (context === undefined) {
		throw new Error(`useUI must be used within a UIProvider`)
	}
	return context
}
