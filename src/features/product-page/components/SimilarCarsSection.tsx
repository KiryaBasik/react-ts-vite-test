import { useEffect, useState } from 'react'
import type { Swiper as SwiperInstance } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import {
  CarouselNextControlIcon,
  CarouselPrevControlIcon,
  FavoriteHeartIcon,
} from '../product-page.icons'
import type { SimilarCar } from '../product-page.types'

type SimilarCarsSectionProps = {
  cars: SimilarCar[]
  title: string
}

const getRootRemInPixels = () => {
  if (typeof window === 'undefined') {
    return 16
  }

  return Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16
}

export function SimilarCarsSection(props: SimilarCarsSectionProps) {
  const { cars, title } = props
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const [slideGap, setSlideGap] = useState(getRootRemInPixels)

  const syncNavigationState = (instance: SwiperInstance) => {
    setIsBeginning(instance.isBeginning)
    setIsEnd(instance.isEnd)
  }

  useEffect(() => {
    // Swiper expects spacing in px, while the layout defines it in rem.
    const syncSlideGap = () => {
      setSlideGap(getRootRemInPixels())
    }

    syncSlideGap()
    window.addEventListener('resize', syncSlideGap)

    return () => {
      window.removeEventListener('resize', syncSlideGap)
    }
  }, [])

  return (
    <section className="similar-cars" aria-labelledby="similar-cars-title">
      <header className="similar-cars__header">
        <h2 className="display-heading display-heading--section-title" id="similar-cars-title">
          {title}
        </h2>

        <div className="similar-cars__controls" aria-label="Навигация по похожим автомобилям">
          <button
            className="similar-cars__nav-button"
            type="button"
            aria-label="Показать предыдущие автомобили"
            onClick={() => swiper?.slidePrev()}
            disabled={!swiper || isBeginning}
          >
            <CarouselPrevControlIcon />
          </button>

          <button
            className="similar-cars__nav-button"
            type="button"
            aria-label="Показать следующие автомобили"
            onClick={() => swiper?.slideNext()}
            disabled={!swiper || isEnd}
          >
            <CarouselNextControlIcon />
          </button>
        </div>
      </header>

      <Swiper
        className="similar-cars__swiper"
        slidesPerView="auto"
        spaceBetween={slideGap}
        speed={500}
        watchOverflow
        onSwiper={(instance) => {
          setSwiper(instance)
          syncNavigationState(instance)
        }}
        onSlideChange={syncNavigationState}
        onResize={syncNavigationState}
      >
        {cars.map((car) => (
          <SwiperSlide className="similar-cars__slide" key={car.id}>
            <article className="similar-car-card">
              <div className="similar-car-card__image-wrapper">
                <img
                  className="similar-car-card__image"
                  src={car.imageSrc}
                  alt={car.imageAlt}
                />

                <button
                  className="similar-car-card__favorite-button"
                  type="button"
                  aria-label="Добавить в избранное"
                >
                  <FavoriteHeartIcon />
                </button>
              </div>

              <div className="similar-car-card__content">
                <h3 className="similar-car-card__title">{car.title}</h3>
                <p className="similar-car-card__price">{car.price}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
