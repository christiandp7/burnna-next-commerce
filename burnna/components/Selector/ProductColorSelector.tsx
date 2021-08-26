import React, { FC } from 'react'
import cx from 'classnames'
// import { makeStyles, styled } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import { ProductOption, ProductOptionValues } from '@commerce/types/product'
import { ColorSelectorButton } from '@burnna/components'
import { SelectedOptions } from '@components/product/helpers'

interface ProductColorSelectorProps {
	// values: ProductOptionValues[]
	option: ProductOption
	selectedOptions: SelectedOptions
	setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptions>>
}

const ProductColorSelector: FC<ProductColorSelectorProps> = ({
	option,
	selectedOptions,
	setSelectedOptions,
}) => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			{option.values &&
				option.values.map((v, i: number) => {
					const active = selectedOptions[option.displayName.toLowerCase()]
					return (
						<Tooltip
							title={v.label}
							key={`${v.label}-${i}`}
							disableFocusListener
							disableTouchListener
							placement="bottom">
							<span>
								<ColorSelectorButton
									disableRipple={true}
									className={cx({
										[classes.activeButton]: v.label.toLowerCase() === active,
										[classes.noHexColorButton]: !v.hexColors,
									})}
									bg={v.hexColors ? v.hexColors[0] : 'transparent'}
									customsize="30px"
									variant={!v.hexColors ? 'contained' : 'text'}
									disableElevation
									onClick={() => {
										setSelectedOptions(selectedOptions => {
											return {
												...selectedOptions,
												[option.displayName.toLowerCase()]: v.label.toLowerCase(),
											}
										})
									}}>
									{v.hexColors ? '' : v.label.toUpperCase()}
								</ColorSelectorButton>
							</span>
						</Tooltip>
					)
				})}
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			margin: `${theme.spacing(1)}px 0`,
			'& span': {
				margin: '0 10px',
				// marginRight: theme.spacing(2),
			},
		},
		activeButton: {
			boxShadow: 'inset 0 0 0 1px #fff',
			border: 'solid 1px #000',
			'&:hover': {
				border: 'solid 1px #000',
				boxShadow: 'inset 0 0 0 1px #fff',
			},
		},
		noHexColorButton: {
			width: 'auto',
		},
	}),
)

export default ProductColorSelector
