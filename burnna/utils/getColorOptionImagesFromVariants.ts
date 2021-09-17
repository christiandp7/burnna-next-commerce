import { ProductVariant } from '@commerce/types/product'
import { getOptionsFromVariants } from './getOptionsFromVariants'

export function getColorOptionImagesFromVariants(variants: ProductVariant[]) {
	const colorOptions = getOptionsFromVariants(variants)
	return colorOptions.map(opt => {
		return variants.find(vari => vari.id === opt.variantId)?.image
	})
}
