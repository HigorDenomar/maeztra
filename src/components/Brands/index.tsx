import { Slider } from '../Slider'

import styles from './styles.module.scss'

const DEFAULT_BRANDS = [
  { name: 'Comma', src: 'https://i.imgur.com/Qoc0YF7.png' },
  { name: 'Melissa', src: 'https://i.imgur.com/cHLLxR4.png' },
  { name: 'Forever 21', src: 'https://i.imgur.com/JOTNQgl.png' },
  { name: 'Zara', src: 'https://i.imgur.com/PN0nOAY.png' },
  { name: 'Ann Taylor', src: 'https://i.imgur.com/qZ1WvYA.png' },
]

type BrandsProps = {
  brands?: {
    name: string
    src: string
  }[]
}

export function Brands({ brands = DEFAULT_BRANDS }: BrandsProps) {
  if (!brands) return null

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Marcas Parceiras</h2>

      <Slider>
        {brands.map(brand => (
          <img key={brand.name} src={brand.src} alt={brand.name} />
        ))}
      </Slider>
    </div>
  )
}
