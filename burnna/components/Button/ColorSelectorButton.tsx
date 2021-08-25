import React, { FC } from 'react'
import { styled, Theme } from '@material-ui/core'
import Button from '@material-ui/core/Button'

interface SelectorButtonProps {
	customsize: string
	bg: string
	// active: boolean
	className: string
	theme: Theme
}

const ColorSelectorButton = styled(({ bg, ...other }) => <Button {...other} />)(
	(props: SelectorButtonProps) => ({
		width: props.customsize,
		height: props.customsize,
		backgroundColor: props.bg,
		border: 'solid 1px',
		// transform: props.theme.transitions.create(0.4, 'ease')
		// transform: 'scale(1.25)',
		borderColor: props.theme.palette.neutral.main,
		padding: 0,
		fontSize: '10px',
		minWidth: 0,
		transition: 'transform ease .18s',
		'&:hover': {
			backgroundColor: props.bg,
		},
	}),
	{ withTheme: true },
)

export default ColorSelectorButton
