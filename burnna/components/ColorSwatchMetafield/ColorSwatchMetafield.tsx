import React, { FC } from 'react'
import { Metafield } from '@commerce/types/product'

interface Props {
	metafields: Metafield[]
}

const ColorSwatchMetafield: FC<Props> = ({ metafields }) => {
	const variant_1 = metafields.filter(item => item.key.includes('varaiant_1'))
	return <div></div>
}

export default ColorSwatchMetafield
