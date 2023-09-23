import * as Dialog from '@radix-ui/react-alert-dialog';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';


import drawerIcon from '../../assets/icons/drawer-menu.svg';
import styles from './styles.module.scss';

type MenuProps = {
  items?: {
    title: string,
    href: string,
    openInNewTab: boolean,
    icon?: string,
  }[]
}

function Mobile({ items }: MenuProps) {
  const [menuIsOpened, setMenuIsOpened] = useState(false)

  if (!items) return null

  return (
    <Dialog.Root open={menuIsOpened} onOpenChange={setMenuIsOpened}>
      <Dialog.Trigger asChild >
        <button type="button">
          <img src={drawerIcon} alt="Menu Ícone" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className={styles.dialog_overlay}
          onClick={() => setMenuIsOpened(false)}
        />

        <Dialog.Content className={styles.dialog_content}>
          <div className={styles.dialog_header}>
            <Dialog.Cancel asChild>
              <button type='button' className={styles.closeButton}>
                <FiX size={25} />
              </button>
            </Dialog.Cancel>
          </div>

          <ul>
            {items.map(item => (
              <li key={item.title}>
                <a href={item.href} target={item.openInNewTab ? '_blank' : '_self'}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function Desktop({ items }: MenuProps) {
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

export default {
  Desktop,
  Mobile
}
