export const productConnectionFragment = /* GraphQL */ `
	fragment productConnection on ProductConnection {
		pageInfo {
			hasNextPage
			hasPreviousPage
		}
		edges {
			node {
				id
				title

				metafields(first: 100) {
					edges {
						node {
							id
							key
							value
						}
					}
				}

				vendor
				handle
				options {
					id
					name
					values
				}
				priceRange {
					minVariantPrice {
						amount
						currencyCode
					}
				}
				compareAtPriceRange {
					minVariantPrice {
						amount
						currencyCode
					}
				}
				images(first: 1) {
					pageInfo {
						hasNextPage
						hasPreviousPage
					}
					edges {
						node {
							transformedSrc(maxWidth: 680)
							altText
							width
							height
						}
					}
				}
			}
		}
	}
`

const getAllProductsQuery = /* GraphQL */ `
	query getAllProducts(
		$first: Int = 250
		$query: String = ""
		$sortKey: ProductSortKeys = RELEVANCE
		$reverse: Boolean = false
	) {
		products(first: $first, sortKey: $sortKey, reverse: $reverse, query: $query) {
			...productConnection
		}
	}

	${productConnectionFragment}
`
export default getAllProductsQuery
