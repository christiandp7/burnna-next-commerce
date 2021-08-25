import React, { FC } from 'react'
// import { makeStyles, styled } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import { ProductOption, ProductOptionValues } from '@commerce/types/product'
import { ColorSelectorButton } from '@burnna/components'
import { SelectedOptions } from '@components/product/helpers'

interface ProductSizeSelectorProps {
	// values: ProductOptionValues[]
	option: ProductOption
	selectedOptions: SelectedOptions
	setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptions>>
}

const ProductSizeSelector: FC<ProductSizeSelectorProps> = ({
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
						<Button
							key={`${option.id}-${i}`}
							className={classes.sizeButton}
							color="primary"
							variant={v.label.toLowerCase() === active ? 'contained' : 'text'}
							size="small"
							onClick={() => {
								setSelectedOptions(selectedOptions => {
									return {
										...selectedOptions,
										[option.displayName.toLowerCase()]: v.label.toLowerCase(),
									}
								})
							}}>
							{v.label.toUpperCase()}
						</Button>
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
			'& button:not(:last-child)': {
				marginRight: theme.spacing(1),
			},
		},
		sizeButton: {
			fontWeight: theme.typography.fontWeightRegular,
			fontSize: theme.typography.h5.fontSize,
			minWidth: '50px',
			'& span': {
				// lineHeight: theme.typography.h5.lineHeight,
			},
		},
	}),
)

export default ProductSizeSelector
