import { ProductVariant } from '@commerce/types/product'
import { ProductOptionValues } from '@commerce/types/product'

export type ColorOptions = {
	label: string
	hexColors?: string[] | undefined
	variantId: string | number
}

export function getOptionsFromVariants(variants: ProductVariant[]) {
	let data: ColorOptions[] = []
	variants.forEach(variant => {
		variant.options.forEach(opt => {
			if (opt.displayName.match(/colou?r/gi)) {
				if (!data.find(item => item.label === opt.values[0].label)) {
					data.push({ ...opt.values[0], variantId: variant.id })
				}
			}
		})
	})
	return data
}
