import { GridSize } from '@material-ui/core'

export type ExploreItemImg = {
	src: string
	width: number
	height: number
	alt: string
}

export type ExploreItem = {
	caption: string
	img: ExploreItemImg
	xsCol?: GridSize
	mdCol?: GridSize
}

export const exploreItems: ExploreItem[] = [
	{
		caption: 'art',
		img: {
			src: '/images/explore/explore-1.jpg',
			width: 647,
			height: 969,
			alt: 'explore',
		},
	},
	{
		caption: 'art',
		img: {
			src: '/images/explore/explore-2.jpg',
			width: 647,
			height: 969,
			alt: 'explore',
		},
	},
	{
		caption: 'art',
		img: {
			src: '/images/explore/explore-3.jpg',
			width: 647,
			height: 969,
			alt: 'explore',
		},
	},
	{
		caption: 'art',
		img: {
			src: '/images/explore/explore-4.jpg',
			width: 647,
			height: 971,
			alt: 'explore',
		},
	},
	{
		caption: 'art',
		img: {
			src: '/images/explore/explore-5.jpg',
			width: 1273,
			height: 1273,
			alt: 'explore',
		},
		xsCol: 12,
		mdCol: 8,
	},
]
