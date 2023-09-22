import { Slider } from '../Slider'

import styles from './styles.module.scss'

import DEFAULT_DEALS from '../../mocks/deals.json'

type DealsProps = {
  deals?: {
    title: string
    subtitle: string
    icon: string
  }[]
}

export function Deals({ deals = DEFAULT_DEALS }: DealsProps) {
  if (!deals) return null

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Por que comprar na Maeztra?</h2>

      <Slider>
        {deals.map(deal => (
          <div key={deal.title} className={styles.deal}>
            <div className={styles.dealContent}>
              <img src={deal.icon} alt={deal.title} />

              <div>
                <strong>{deal.title}</strong>

                <p>{deal.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
