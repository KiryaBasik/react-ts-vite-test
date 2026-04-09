import { LongArrowRightIcon } from '../product-page.icons'
import type {
  Characteristic,
  EquipmentGroup,
  ProductSummary,
} from '../product-page.types'

type ProductDetailsProps = {
  characteristics: Characteristic[]
  equipmentButtonLabel: string
  equipmentGroups: EquipmentGroup[]
  product: ProductSummary
}

export function ProductDetails(props: ProductDetailsProps) {
  const { characteristics, equipmentButtonLabel, equipmentGroups, product } = props
  const leftColumnItems = characteristics.filter((item) => item.column === 'left')
  const rightColumnItems = characteristics.filter((item) => item.column === 'right')

  return (
    <>
      <section className="details-card details-card--summary" aria-labelledby="product-title">
        <header className="details-card__header">
          <div className="details-card__title-block">
            <h1 className="display-heading display-heading--hero" id="product-title">
              {product.title}
            </h1>
            <p className="display-heading display-heading--price">{product.price}</p>
          </div>

          <span className="status-badge">{product.badge}</span>
        </header>

        <div className="details-card__summary-content">
          <h2 className="display-heading display-heading--section">Характеристики</h2>

          <div className="characteristics-columns">
            <dl className="characteristics-column">
              {leftColumnItems.map((item) => (
                <div key={item.id} className="characteristics-grid__item">
                  <dt className="characteristics-grid__label">{item.label}</dt>
                  <dd className="characteristics-grid__value">{item.value}</dd>
                </div>
              ))}
            </dl>

            <dl className="characteristics-column characteristics-column--secondary">
              {rightColumnItems.map((item) => (
                <div key={item.id} className="characteristics-grid__item">
                  <dt className="characteristics-grid__label">{item.label}</dt>
                  <dd className="characteristics-grid__value">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="details-card details-card--equipment" aria-labelledby="equipment-title">
        <div className="details-card__equipment-content">
          <h2 className="display-heading display-heading--section" id="equipment-title">
            Комплектация
          </h2>

          <dl className="equipment-list">
            {equipmentGroups.map((group) => (
              <div key={group.id} className="equipment-list__group">
                <dt className="equipment-list__label">{group.label}</dt>
                <dd className="equipment-list__content">
                  <ul className="equipment-list__items">
                    {group.items.map((item) => (
                      <li key={item} className="equipment-list__item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <button className="wide-action-button" type="button">
          <span>{equipmentButtonLabel}</span>
          <LongArrowRightIcon className="wide-action-button__icon" />
        </button>
      </section>
    </>
  )
}
