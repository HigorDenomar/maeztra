import styles from './styles.module.scss'

type MenuProps = {
  items?: {
    title: string,
    href: string,
    openInNewTab: boolean,
    icon?: string,
  }[]
}

export function Menu({ items }: MenuProps) {
  if (!items) return null

  return (
    <nav className={styles.container}>
      <ul>
        {
          items?.map(item => (
            <li key={item.title} data-selected={!!item.icon}>
              <a href={item.href} target={item.openInNewTab ? '_blank' : '_self'}>
                {item.icon ? (
                  <img src={item.icon} alt="Menu Item" />
                ) : null}

                {item.title}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
