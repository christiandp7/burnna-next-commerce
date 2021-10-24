import React, { FC } from 'react'
import Image from 'next/image'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import type { ProductImage } from '@commerce/types/product'

interface Props {
	images: ProductImage[]
}

const ProductImageMobile: FC<Props> = ({ images }) => {
	const classes = useStyles()
	return (
		<Swiper
			loop={true}
			spaceBetween={0}
			slidesPerView={1}
			autoHeight={true}
			navigation={{
				hideOnClick: true,
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}}
			autoplay={true}
			pagination={{
				clickable: true,
			}}
			className={classes.swiper}>
			{images.map(img => (
				<SwiperSlide key={img.url}>
					<Image
						quality="100"
						src={img.url}
						alt={img.altText || 'product image'}
						width={img.width}
						height={img.height}
						layout="responsive"
					/>
				</SwiperSlide>
			))}

			<BsChevronLeft className="swiper-button-prev" />
			<BsChevronRight className="swiper-button-next" />
		</Swiper>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		swiper: {
			'& .swiper-pagination': {
				opacity: 0,
				transition: 'opacity ease 350ms',
			},
			'& .swiper-pagination-bullet.swiper-pagination-bullet-active': {
				background: theme.palette.neutral.main,
			},
			'& .swiper-button-prev, & .swiper-button-next': {
				color: theme.palette.neutral.light,
				width: '40px',
				height: 'auto',
				opacity: 0,
				transition: 'opacity ease 350ms',
				'&:hover': {
					color: theme.palette.neutral.main,
				},
			},
			'&:hover': {
				'& .swiper-button-prev, & .swiper-button-next, & .swiper-pagination': {
					opacity: 1,
				},
			},
		},
		swiperImg: {
			width: '100%',
		},
	}),
)

export default ProductImageMobile
