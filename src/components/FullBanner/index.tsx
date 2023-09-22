import Slider, { Settings } from 'react-slick';

// import mainBanner from '../../assets/banner-01.png';

import styles from './styles.module.scss';

import DEFAULT_IMAGES from '../../mocks/bannerImages.json';

type FullBannerProps = {
  images?: {
    src: string;
    alt?: string;
    title?: string
    description?: string
    href?: string;
  }[]
}

export function FullBanner({ images = DEFAULT_IMAGES }: FullBannerProps) {
  if (!images) return null

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings} className={styles.container}>
      {images?.map(image => (
        <div key={image.title} className={styles.item}>
          <img src={image.src} alt={image.alt} />

          <div className={styles.wrapper}>
            <div className={styles.content}>
              {image.title ? <h3>{image.title}</h3> : null}

              {image.description ? <p>{image.description}</p> : null}

              {image.href ? <a href="/">Conferir</a> : null}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}
