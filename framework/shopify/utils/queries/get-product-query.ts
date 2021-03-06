const getProductQuery = /* GraphQL */ `
	query getProductBySlug($slug: String!) {
		productByHandle(handle: $slug) {
			id
			handle
			availableForSale
			title
			productType
			vendor
			description
			descriptionHtml
			options {
				id
				name
				values
			}
			priceRange {
				maxVariantPrice {
					amount
					currencyCode
				}
				minVariantPrice {
					amount
					currencyCode
				}
			}
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
			images(first: 250) {
				pageInfo {
					hasNextPage
					hasPreviousPage
				}
				edges {
					node {
						transformedSrc(maxWidth: 1100)
						altText
						width
						height
					}
				}
			}
			metafields(first: 100) {
				edges {
					node {
						id
						key
						value
					}
				}
			}
		}
	}
`

export default getProductQuery
