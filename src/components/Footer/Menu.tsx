import * as Accordion from '@radix-ui/react-accordion';
import styles from './styles.module.scss';

import { useMediaQuery } from '../../hooks/useRuntime';
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

function MenuMobile({ menus = DEFAULT_MENU }: MenuProps) {
  return (
    <Accordion.Root type='single' className={styles.container}>
      {menus.map(menu => (
        <Accordion.Item value={menu.title} key={menu.title} className={styles.item}>
          {/* <Accordion.Header className={styles.header}> */}
          <Accordion.Trigger className={styles.title}>
            <p>{menu.title}</p>

            <span>+</span>
          </Accordion.Trigger>

          {/* + */}
          {/* </Accordion.Header> */}

          <Accordion.Content>
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
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

export function Menu({ menus = DEFAULT_MENU }: MenuProps) {
  const isMobile = useMediaQuery(720)

  if (!menus?.length) return null

  if (isMobile) return <MenuMobile menus={menus} />

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
