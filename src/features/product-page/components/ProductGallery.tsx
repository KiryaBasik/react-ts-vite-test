import { LongArrowLeftIcon } from '../product-page.icons'
import type { GalleryImage } from '../product-page.types'

type ProductGalleryProps = {
  activeImage: GalleryImage
  catalogLabel: string
  images: GalleryImage[]
  onImageSelect: (imageId: number) => void
}

export function ProductGallery(props: ProductGalleryProps) {
  const { activeImage, catalogLabel, images, onImageSelect } = props
  const thumbnailSlots = [
    ...images,
    ...Array.from({ length: Math.max(0, 4 - images.length) }, () => null),
  ]

  return (
    <>
      <button className="catalog-button" type="button">
        <LongArrowLeftIcon className="catalog-button__icon" />
        <span>{catalogLabel}</span>
      </button>

      <section className="product-gallery" aria-label="Галерея автомобиля">
        <div className="product-gallery__main">
          <img
            className="product-gallery__main-image"
            src={activeImage.src}
            alt={activeImage.alt}
          />
        </div>

        <ul className="product-gallery__thumbnails" aria-label="Превью фотографий">
          {thumbnailSlots.map((image, index) => {
            if (!image) {
              return (
                <li key={`empty-slot-${index}`} className="product-gallery__thumbnail-item">
                  <div className="product-gallery__thumbnail-placeholder" aria-hidden="true" />
                </li>
              )
            }

            const isActive = image.id === activeImage.id

            return (
              <li key={image.id} className="product-gallery__thumbnail-item">
                <button
                  className={`product-gallery__thumbnail-button${
                    isActive ? ' product-gallery__thumbnail-button--active' : ''
                  }`}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => onImageSelect(image.id)}
                >
                  <img
                    className="product-gallery__thumbnail-image"
                    src={image.thumbnailSrc}
                    alt={image.alt}
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
