import { Slider } from '../Slider'

import styles from './styles.module.scss'

const DEFAULT_DEALS = [
  { title: 'Produtos importados', subtitle: 'Produto de Alta Qualidade', icon: 'https://i.imgur.com/o6jS7Gc.png' },
  { title: 'Estoque no Brazil', subtitle: 'Produtos mais perto de você!', icon: 'https://i.imgur.com/QTFwPmU.png' },
  { title: 'Trocas Garantidas', subtitle: 'Trocas em até 48 horas, veja as regras', icon: 'https://i.imgur.com/5GTW9ii.png' },
  { title: 'Ganhe 4% off', subtitle: 'Pagando à vista no Cartão', icon: 'https://i.imgur.com/sxrqa57.png' },
  { title: 'Frete Grátis', subtitle: 'Em compras acima de R$ 499,00', icon: 'https://i.imgur.com/pyNUUin.png' },
]

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
