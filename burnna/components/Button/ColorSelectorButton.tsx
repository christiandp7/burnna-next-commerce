import React, { FC } from 'react'
import { styled, Theme } from '@material-ui/core'
import Button from '@material-ui/core/Button'

interface SelectorButtonProps {
	customsize: string
	bg: string
	className: string
	theme: Theme
}

const ColorSelectorButton = styled(({ bg, ...other }) => <Button {...other} />)(
	(props: SelectorButtonProps) => ({
		width: props.customsize,
		height: props.customsize,
		background: props.bg,
		// borderColor: props.theme.palette.neutral.main,
		transition: 'none',
		border: 'solid 1px transparent',
		padding: 0,
		minWidth: 0,
		position: 'relative',
		'&:hover': {
			backgroundColor: props.bg,
		},
	}),
	{ withTheme: true },
)

export default ColorSelectorButton
