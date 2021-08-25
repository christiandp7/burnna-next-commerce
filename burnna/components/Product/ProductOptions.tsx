import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import type { ProductOption } from '@commerce/types/product'
import { SelectedOptions } from '@components/product/helpers'
import { ProductColorSelector, ProductSizeSelector } from '@burnna/components'

interface Props {
	options: ProductOption[]
	selectedOptions: SelectedOptions
	setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptions>>
}

const ProductOptions: FC<Props> = ({
	options,
	selectedOptions,
	setSelectedOptions,
}) => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			{options &&
				options.map(opt => (
					<div className={classes.option} key={opt.displayName}>
						<Typography component="h5" variant="h5">
							{opt.displayName}
						</Typography>
						<div className={classes.selectorWrapper}>
							{opt.displayName.toLowerCase() === 'color' && (
								<ProductColorSelector
									option={opt}
									selectedOptions={selectedOptions}
									setSelectedOptions={setSelectedOptions}
								/>
							)}
							{opt.displayName.toLowerCase() === 'size' && (
								<ProductSizeSelector
									option={opt}
									selectedOptions={selectedOptions}
									setSelectedOptions={setSelectedOptions}
								/>
							)}
						</div>
					</div>
				))}
			<div className={classes.option}>
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Typography component="h5" variant="h5">
						Size
					</Typography>

					{/* <LinkButton
											className={classes.sizeGuideButton}
											onClick={() => setSizeGuideOpen(true)}>
											Size guide
										</LinkButton> */}
				</Box>
				<div className={classes.selectorWrapper}>
					{/* <SizeSelectorButtonGroup /> */}
				</div>
			</div>
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& h5': {
				cursor: 'default',
			},
		},
		option: {
			// padding: '15px 0',
			paddingBottom: theme.spacing(1),
		},
		sizeGuideButton: {
			fontSize: theme.typography.h5.fontSize,
			paddingTop: 0,
			paddingBottom: 0,
			'& span': {
				lineHeight: theme.typography.h5.lineHeight,
			},
		},
		selectorWrapper: {
			paddingLeft: theme.spacing(3),
			[theme.breakpoints.down('sm')]: {
				paddingLeft: theme.spacing(1),
			},
		},
	}),
)

export default ProductOptions
