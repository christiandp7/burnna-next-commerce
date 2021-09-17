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
				vendor
				handle

				variants(first: 250) {
					pageInfo {
						hasNextPage
						hasPreviousPage
					}
					edges {
						node {
							id
							title
							sku
							availableForSale
							requiresShipping
							selectedOptions {
								name
								value
							}
							priceV2 {
								amount
								currencyCode
							}
							compareAtPriceV2 {
								amount
								currencyCode
							}
						}
					}
				}

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
				images(first: 1) {
					pageInfo {
						hasNextPage
						hasPreviousPage
					}
					edges {
						node {
							originalSrc
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
