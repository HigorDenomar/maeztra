
import { Menu } from '../Menu'
import { TopBar } from './TopBar'

import dressIcon from '../../assets/icons/dress.svg'
import heartIcon from '../../assets/icons/heart.svg'
import shoppingBagIcon from '../../assets/icons/shopping-bag.svg'
import userIcon from '../../assets/icons/user.svg'
import logoMaeztra from '../../assets/logos/maeztra.png'

import styles from './styles.module.scss'

const MENU_DEFAULT_ITEMS = [
  { title: 'Novidades', href: '#', openInNewTab: false, icon: dressIcon },
  { title: 'Vestidos', href: '#', openInNewTab: true },
  { title: 'Roupas', href: '#', openInNewTab: false },
  { title: 'Sapatos', href: '#', openInNewTab: false },
  { title: 'Lingerie', href: '#', openInNewTab: false },
  { title: 'Acessórios', href: '#', openInNewTab: false },
  { title: 'OUTLET', href: '#', openInNewTab: false },
]

export function Header() {
  return (
    <header className={styles.container}>
      <TopBar />

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <a href="/">
            <img src={logoMaeztra} alt="Maeztra" />
          </a>

          <div className={styles['search-container']}>
            <input type="text" placeholder='O Que Você Busca?' />

            <button type='button'>Buscar</button>
          </div>

          <div className={styles['actions-wrapper']}>
            <a href="#">
              <img src={userIcon} alt="Ícone de usuário" />

              Minha Conta
            </a>
            <a href="#">
              <img src={heartIcon} alt="Ícone de coração" />

              Minha Conta
            </a>

            <button type='button'>
              <img src={shoppingBagIcon} alt="Ícone de bolsa de compras" />

              Meu Carrinho
            </button>
          </div>
        </div>
      </div>

      <Menu items={MENU_DEFAULT_ITEMS} />
    </header>
  )
}
