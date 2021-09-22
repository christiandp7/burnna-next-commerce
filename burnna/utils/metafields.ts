import type { Metafield } from '@commerce/types/product'

export type ColorVariant = {
	color: string
	page: string
	hexcolors?: string[]
}

export const getColoVariantsFromMetafields = (metafields: Metafield[]) => {
	const variant_1_items = metafields.filter(item => item.key.includes('variant_1'))
	const variant_2_items = metafields.filter(item => item.key.includes('variant_2'))
	const variant_3_items = metafields.filter(item => item.key.includes('variant_3'))

	// const variant_1: ColorVariant = {
	// 	color: variant_1_items.find(item => item.key === 'variant_1_color')?.value || '',
	// 	page: variant_1_items.find(item => item.key === 'variant_1_page')?.value || '',
	// }
	// const variant_2: ColorVariant = {
	// 	color: variant_2_items.find(item => item.key === 'variant_2_color')?.value || '',
	// 	page: variant_2_items.find(item => item.key === 'variant_2_page')?.value || '',
	// }
	// const variant_3: ColorVariant = {
	// 	color: variant_3_items.find(item => item.key === 'variant_3_color')?.value,
	// 	page: variant_3_items.find(item => item.key === 'variant_3_page')?.value,
	// }

	// const variant_1_color =
	// 	variant_1_items.find(item => item.key === 'variant_1_color')?.value || ''
	// const variant_2_color =
	// 	variant_2_items.find(item => item.key === 'variant_2_color')?.value || ''
	// const variant_3_color =
	// 	variant_3_items.find(item => item.key === 'variant_3_color')?.value || ''

	// const variant_1_page =
	// 	variant_1_items.find(item => item.key === 'variant_1_page')?.value || ''
	// const variant_2_page =
	// 	variant_2_items.find(item => item.key === 'variant_2_page')?.value || ''
	// const variant_3_page =
	// 	variant_3_items.find(item => item.key === 'variant_3_page')?.value || ''

	// const obj: Array<ColorVariant> = [
	// 	{
	// 		color: String(variant_1_color),
	// 		page: String(variant_1_page),
	// 	},
	// 	{
	// 		color: String(variant_2_color),
	// 		page: String(variant_2_page),
	// 	},
	// 	{
	// 		color: String(variant_3_color),
	// 		page: String(variant_3_page),
	// 	},
	// ]

	const variants = [variant_1_items, variant_2_items, variant_3_items]

	const obj = variants.map(variant => {
		return {
			color: variant.find(childItem => childItem.key === 'variant_1_color')?.value,
			hexColors: variant.find(childItem => childItem.key === 'variant_1_color')
				?.hexColors,
			page: variant.find(childItem => childItem.key === 'variant_1_page')?.value,
		}
	})

	// const obj = [
	// 	variant_1_items.length === 2 && { ...variant_1 },
	// 	variant_2_items.length === 2 && { ...variant_2_items },
	// 	variant_3_items.length === 2 && { ...variant_3_items },
	// ]

	// return ubj
	// return obj.filter(item => item)

	return obj.filter(item => item.color !== undefined)
	// return obj
}
