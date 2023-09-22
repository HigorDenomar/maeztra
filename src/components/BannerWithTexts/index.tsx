import styles from './styles.module.scss'

type BannerWithTextsProps = {
  title?: string
  description?: string
  image: string
  alt?: string
}

export function BannerWithTexts({
  title,
  description,
  image,
  alt
}: BannerWithTextsProps) {
  if (!image) return null

  return (
    <div className={styles.container}>
      {title ? (
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>

          {description ? (
            <p className={styles.description}>
              {description}
            </p>
          ) : null}
        </div>
      ) : null}

      <img src={image} alt={alt} />
    </div>
  )
}
