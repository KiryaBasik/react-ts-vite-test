import { useState } from 'react'

import { FixedActions } from './components/FixedActions'
import { ProductDetails } from './components/ProductDetails'
import { ProductGallery } from './components/ProductGallery'
import { SelectionBanner } from './components/SelectionBanner'
import { SimilarCarsSection } from './components/SimilarCarsSection'
import { productPageData } from './product-page.data'
import './product-page.css'

export function ProductPage() {
  const [activeImageId, setActiveImageId] = useState(
    productPageData.galleryImages[0]?.id ?? 0,
  )

  const activeImage =
    productPageData.galleryImages.find((image) => image.id === activeImageId) ??
    productPageData.galleryImages[0]

  if (!activeImage) {
    return null
  }

  return (
    <main className="product-page">
      <div className="product-page__content">
        <div className="product-page__main-sections">
          <section className="product-page__primary" aria-label="Карточка автомобиля">
            <div className="product-page__gallery-column">
              <ProductGallery
                activeImage={activeImage}
                catalogLabel={productPageData.catalogLabel}
                images={productPageData.galleryImages}
                onImageSelect={setActiveImageId}
              />
            </div>

            <div className="product-page__details-column">
              <ProductDetails
                characteristics={productPageData.characteristics}
                equipmentButtonLabel={productPageData.equipmentButtonLabel}
                equipmentGroups={productPageData.equipmentGroups}
                product={productPageData.product}
              />
            </div>
          </section>

          <SimilarCarsSection
            cars={productPageData.similarCars}
            title={productPageData.similarCarsTitle}
          />
        </div>

        <SelectionBanner banner={productPageData.selectionBanner} />
      </div>

      <FixedActions actions={productPageData.fixedActions} />
    </main>
  )
}
