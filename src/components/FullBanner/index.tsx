import Slider, { Settings } from 'react-slick';

import mainBanner from '../../assets/banner-01.png';

import styles from './styles.module.scss';

const DEFAULT_IMAGES = [
  { src: mainBanner, alt: '#', title: 'Promoções de Outono', description: 'Confira os melhores looks para combinar com você nesse Outono', href: '#' },
  { src: 'https://dummyimage.com/1920x600/0ff/fff', alt: '#', title: 'Promoções de Outono', description: 'Confira os melhores looks para combinar com você nesse Outono', href: '#' },
  { src: 'https://dummyimage.com/1920x600/00f/fff', alt: '#', title: 'Promoções de Outono', description: 'Confira os melhores looks para combinar com você nesse Outono', href: '#' },
  { src: 'https://dummyimage.com/1920x600/f0f/fff', alt: '#', title: 'Promoções de Outono', description: 'Confira os melhores looks para combinar com você nesse Outono', href: '#' },
  { src: 'https://dummyimage.com/1920x600/ff0/fff', alt: '#', title: 'Promoções de Outono', description: 'Confira os melhores looks para combinar com você nesse Outono', href: '#' },
  { src: 'https://dummyimage.com/1920x600/f00/fff', alt: '#', title: 'Promoções de Outono', description: 'Confira os melhores looks para combinar com você nesse Outono', href: '#' },
  { src: 'https://dummyimage.com/1920x600/0f0/fff', alt: '#', title: 'Promoções de Outono', description: 'Confira os melhores looks para combinar com você nesse Outono', href: '#' },
]

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
    dots: false,
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

          <div className={styles.content}>
            {image.title ? <h3>{image.title}</h3> : null}

            {image.description ? <p>{image.description}</p> : null}

            {image.href ? <a href="/">Conferir</a> : null}
          </div>
        </div>
      ))}
    </Slider>
  )
}
