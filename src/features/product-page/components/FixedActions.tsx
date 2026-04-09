import type { FixedActionsData } from '../product-page.types'

type FixedActionsProps = {
  actions: FixedActionsData
}

export function FixedActions(props: FixedActionsProps) {
  const { actions } = props

  return (
    <div className="fixed-actions" aria-label="Основные действия">
      <button className="fixed-actions__button fixed-actions__button--primary" type="button">
        {actions.primary}
      </button>
      <button className="fixed-actions__button fixed-actions__button--secondary" type="button">
        {actions.secondary}
      </button>
    </div>
  )
}
