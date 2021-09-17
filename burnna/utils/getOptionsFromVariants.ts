import { ProductVariant } from '@commerce/types/product'

export type ColorOption = {
	label: string
	hexColors?: string[] | undefined
	variantId: string | number
}

export function getOptionsFromVariants(variants: ProductVariant[]) {
	let data: ColorOption[] = []
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

// RETURN array of:
// {
//     "label": "Blue",
//     "hexColors": [
//         [
//             "#0000FF"
//         ]
//     ],
//     "variantId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDY3NzU0NDg4NjQ1Nw=="
// }
