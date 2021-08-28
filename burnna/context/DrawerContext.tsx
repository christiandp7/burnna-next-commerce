import React, { FC, createContext, useState } from 'react'

export interface State {
	cartOpen: boolean
	infoSidebar: boolean
	sidebarOpen: boolean
	faqSidebarOpen: boolean
}

const initialState = {
	cartOpen: false,
	infoSidebar: false,
	sidebarOpen: false,
	faqSidebarOpen: false,
}

export type InfoSidebarValue = {
	open: boolean
	view: 'sizeguide' | 'details'
}

const DrawerContext = createContext<State | any>(initialState)

export const DrawerContextProvider: FC = ({ children }) => {
	const [cartOpen, setCartOpen] = useState(false)
	const [infoSidebar, setInfoSidebar] = useState<InfoSidebarValue | null>({
		open: false,
		view: 'sizeguide',
	})
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const [faqSidebarOpen, setFaqSidebarOpen] = useState(false)
	return (
		<DrawerContext.Provider
			value={{
				cartOpen,
				setCartOpen,
				infoSidebar,
				setInfoSidebar,
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
