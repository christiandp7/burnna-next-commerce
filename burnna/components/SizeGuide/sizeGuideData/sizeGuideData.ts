const USA_SIZES = ['4', '6', '8', '10', '12']
const FRANCE_SIZES = ['36', '38', '40', '42', '44']
const UK_SIZES = ['8', '10', '12', '14', '16']

const UNDER_BUST_SIZES = ['70-73', '74-77', '78-82', '83-87', '88-92']
const WAIST_SIZES = ['70-73', '74-77', '78-82', '83-87', '88-92']
const HIP_SIZES = ['70-73', '74-77', '78-82', '83-87', '88-92']

export type Sizes = Array<string | number>

export interface SizeGuideItem {
	summary: string
	details: Sizes
}

export const bodySizeItems: SizeGuideItem[] = [
	{
		summary: 'USA',
		details: USA_SIZES,
	},
	{
		summary: 'France',
		details: FRANCE_SIZES,
	},
	{
		summary: 'UK',
		details: UK_SIZES,
	},
]

export const measurementsItems: SizeGuideItem[] = [
	{
		summary: 'Under Bust',
		details: UNDER_BUST_SIZES,
	},
	{
		summary: 'Waist',
		details: WAIST_SIZES,
	},
	{
		summary: 'Hip',
		details: HIP_SIZES,
	},
]
