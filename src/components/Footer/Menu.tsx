import styles from './styles.module.scss';

import DEFAULT_MENU from '../../mocks/menuFooter.json';

type MenuProps = {
  menus?: {
    title: string;
    submenu: {
      title: string;
      link: string;
      openInNewTab: boolean;
    }[]
  }[]
}

export function Menu({ menus = DEFAULT_MENU }: MenuProps) {
  if (!menus?.length) return null

  return (
    <nav className={styles.container}>
      {menus.map(menu => (
        <div key={menu.title}>
          <h5 className={styles.title}>{menu.title}</h5>

          <ul className={styles.list}>
            {menu.submenu?.map(sub => (
              <li key={sub.title}>
                <a
                  href={sub.link}
                  target={sub.openInNewTab ? '_blank' : '_self'}
                >{sub.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
