import { BannerArrowRightIcon } from '../product-page.icons'
import type { SelectionBannerData } from '../product-page.types'

type SelectionBannerProps = {
  banner: SelectionBannerData
}

export function SelectionBanner(props: SelectionBannerProps) {
  const { banner } = props

  return (
    <section className="selection-banner" aria-labelledby="selection-banner-title">
      <div className="selection-banner__panel">
        <div className="selection-banner__content">
          <h2 className="display-heading display-heading--banner" id="selection-banner-title">
            {banner.title}
          </h2>
          <p className="selection-banner__description">{banner.description}</p>
        </div>

        <button className="selection-banner__button" type="button">
          <span>{banner.buttonLabel}</span>
          <BannerArrowRightIcon />
        </button>
      </div>

      <div className="selection-banner__media" aria-hidden="true">
        <img className="selection-banner__image" src={banner.imageSrc} alt="" />
      </div>
    </section>
  )
}
