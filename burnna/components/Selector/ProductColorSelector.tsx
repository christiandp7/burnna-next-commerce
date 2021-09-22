import React, { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'
import NextLink from 'next/link'
// import { makeStyles, styled } from '@material-ui/styles'
import Backdrop from '@material-ui/core/Backdrop'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import type { ProductOption, Metafield } from '@commerce/types/product'
import { ColorSelectorButton } from '@burnna/components'
import { SelectedOptions } from '@components/product/helpers'
import { getColoVariantsFromMetafields } from '@burnna/utils/metafields'
import { setBgColor, setLabel } from '@burnna/utils/colors'
interface ProductColorSelectorProps {
	option: ProductOption
	selectedOptions: SelectedOptions
	setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptions>>
	metafields: Metafield[]
}

const ProductColorSelector: FC<ProductColorSelectorProps> = ({
	option,
	selectedOptions,
	setSelectedOptions,
	metafields,
}) => {
	const [backdrop, setBackdrop] = useState(false)
	const router = useRouter()
	const classes = useStyles()
	const colorVariants = getColoVariantsFromMetafields(metafields)

	const openBackdrop = (href: string) => {
		setBackdrop(true)
		router.push(href)
	}

	useEffect(() => {
		const handleRouteChange = () => {
			setBackdrop(false)
		}

		router.events.on('routeChangeComplete', handleRouteChange)

		// If the component is unmounted, unsubscribe
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [])

	return (
		<div className={classes.root}>
			{option.values &&
				option.values.map((v, i: number) => {
					// console.log(v.hexColors)
					const active = selectedOptions[option.displayName.toLowerCase()]
					return (
						<Tooltip
							title={setLabel(v.label)}
							key={`${v.label}-${i}`}
							disableFocusListener
							disableTouchListener
							placement="bottom">
							<span>
								<ColorSelectorButton
									disableRipple
									className={cx({
										[classes.activeButton]: v.label.toLowerCase() === active,
										[classes.noHexColorButton]: !v.hexColors,
									})}
									bg={v.hexColors ? setBgColor(v.hexColors) : 'transparent'}
									customsize="30px"
									// variant={!v.hexColors ? 'contained' : 'text'}
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

			{/* Metafiled color options */}
			{colorVariants &&
				colorVariants.map(opt => (
					<Tooltip
						title={setLabel(opt.color || '')}
						key={opt.color}
						disableFocusListener
						disableTouchListener
						placement="bottom">
						<span>
							<ColorSelectorButton
								disableRipple
								bg={opt.hexColors ? setBgColor(opt.hexColors) : 'transparent'}
								customsize="30px"
								disableElevation
								onClick={() => openBackdrop(opt.page || '/')}>
								{opt.hexColors ? '' : setLabel(opt.color || '')}
							</ColorSelectorButton>
						</span>
					</Tooltip>
				))}

			<Backdrop className={classes.backdrop} open={backdrop}></Backdrop>
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
			// width: 'auto',
		},
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			backgroundColor: 'rgba(245, 242, 237, .4)',
			opacity: 0.2,
		},
	}),
)

export default ProductColorSelector
