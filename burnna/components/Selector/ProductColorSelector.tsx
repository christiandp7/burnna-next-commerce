import React, { FC } from 'react'
// import { makeStyles, styled } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles, styled, createStyles, Theme } from '@material-ui/core'
import { ProductOptionValues } from '@commerce/types/product'

interface SelectorButtonProps {
	size: string
	bgColor: string
	theme: Theme
}

const SelectorButton = styled(({ bgColor, ...other }) => <Button {...other} />)(
	(props: SelectorButtonProps) => ({
		width: props.size,
		height: props.size,
		backgroundColor: props.bgColor,
		// borderRadius: '50%',
		border: 'solid 1px',
		borderColor: props.theme.palette.neutral.main,
		padding: '0',
		color: 'white',
		minWidth: '0',
		'&:hover': {
			backgroundColor: props.bgColor,
			// boxShadow: `0 1px 3px 4px ${props.bgColor}`,
		},
	}),
	{ withTheme: true },
)

interface ProductColorSelectorProps {
	values: ProductOptionValues[]
}

const ProductColorSelector: FC<ProductColorSelectorProps> = ({ values }) => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			{values.map((v, i: number) => {
				v.hexColors ? (
					<SelectorButton
						disableRipple={true}
						bgColor={v.hexColors ? v.hexColors[0] : 'transparent'}
						size="32px"
					/>
				) : (
					<SelectorButton disableRipple={true} bgColor="transparent" size="32px">
						{v.label.toUpperCase()}
					</SelectorButton>
				)
			})}
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			margin: `${theme.spacing(2)}px 0`,
			'& button': {
				margin: '0 10px',
				// marginRight: theme.spacing(2),
			},
		},
	}),
)

export default ProductColorSelector
