import { getSearchStaticProps } from '@lib/search-props'
import type { GetStaticPropsContext } from 'next'
import { CollectionView } from '@burnna/views'

export async function getStaticProps(context: GetStaticPropsContext) {
	return getSearchStaticProps(context)
}

export default CollectionView
