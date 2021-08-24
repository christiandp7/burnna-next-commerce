import React, { FC, createContext, useState } from 'react'

export interface State {
	displaySidebar: boolean
	displayDropdown: boolean
	displayModal: boolean
	sidebarView: string
	modalView: string
	userAvatar: string
}

const initialState = {
	cartOpen: false,
	sizeGuideOpen: false,
}

const DrawerContext = createContext<State | any>(initialState)

export const DrawerContextProvider: FC = ({ children }) => {
	const [cartOpen, setCartOpen] = useState(false)
	const [sizeGuideOpen, setSizeGuideOpen] = useState(false)
	return (
		<DrawerContext.Provider
			value={{
				cartOpen,
				setCartOpen,
				sizeGuideOpen,
				setSizeGuideOpen,
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
