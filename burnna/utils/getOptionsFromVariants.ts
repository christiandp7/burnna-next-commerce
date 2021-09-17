import { ProductVariant } from '@commerce/types/product'
import { ProductOptionValues } from '@commerce/types/product'

export function getOptionsFromVariants(variants: ProductVariant[]) {
	let data: ProductOptionValues[] = []
	variants.forEach(variant => {
		variant.options.forEach(opt => {
			if (opt.displayName.match(/colou?r/gi)) {
				if (!data.find(item => item.label === opt.values[0].label)) {
					data.push({ ...opt.values[0] })
				}
			}
		})
	})
	return data
}
