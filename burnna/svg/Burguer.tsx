import React, { FC } from 'react'

const Burguer: FC = () => {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4 24.333H14.6667"
				stroke="black"
				strokeWidth="1.6"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
			<path
				d="M4 15.333H21.3333"
				stroke="black"
				strokeWidth="1.6"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
			<path
				d="M4 7H28"
				stroke="black"
				strokeWidth="1.6"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default Burguer
