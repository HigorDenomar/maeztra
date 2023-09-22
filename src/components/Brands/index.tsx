import { Slider } from '../Slider'

import styles from './styles.module.scss'

import DEFAULT_BRANDS from '../../mocks/brands.json'

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
