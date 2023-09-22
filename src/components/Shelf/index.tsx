import { Settings } from 'react-slick';
import { Slider } from '../Slider';

import styles from './styles.module.scss';

import products from '../../mocks/products.json';

export function Shelf() {
  if (!products?.length) return null

  const settings: Settings = {
    arrows: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          centerMode: true,
          centerPadding: '15px',
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          centerPadding: '15px',
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: '15px',
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: '15px',
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '15px',
          arrows: false
        }
      }
    ],
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>As Mais Pedidas</h2>

      <Slider
        className={styles.slider}
        {...settings}
      >
        {products.map(product => (
          <div key={product.id} className={styles.product}>
            <img src={product.image} alt={product.name} />

            <div className={styles.content}>
              <div className={styles.colors}>
                {product.colors?.map(color => (
                  <a href="#" key={color}>
                    <span style={{ background: color }} />
                  </a>
                ))}
              </div>

              <strong>{product.price}</strong>

              <h5 className={styles.name}>
                <a href={product.link}>
                  {product.name}
                </a>
              </h5>

              <p>{product.description}</p>

              <button type='button'>Adicionar</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
