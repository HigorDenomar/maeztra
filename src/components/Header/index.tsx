
import { Menu } from '../Menu'
import { TopBar } from './TopBar'

import drawerIcon from '../../assets/icons/drawer-menu.svg'
import dressIcon from '../../assets/icons/dress.svg'
import heartIcon from '../../assets/icons/heart.svg'
import searchIcon from '../../assets/icons/search.svg'
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
          <div className={styles['logo-wrapper']}>
            <button type="button">
              <img src={drawerIcon} alt="Menu Ícone" />
            </button>

            <a href="/">
              <img src={logoMaeztra} alt="Maeztra" />
            </a>
          </div>

          <div className={styles['search-container']}>
            <input type="text" placeholder='O Que Você Busca?' />

            <button type='button'>Buscar</button>
          </div>

          <div className={styles['actions-wrapper']}>
            <button type="button" className='search-button'>
              <img src={searchIcon} alt="Botão de pesquisa" />
            </button>

            <a href="#" className='account-link'>
              <img src={userIcon} alt="Ícone de usuário" />

              <span>Minha Conta</span>
            </a>

            <a href="#" className='wishlist-link'>
              <img src={heartIcon} alt="Ícone de coração" />

              <span>Minha Conta</span>
            </a>

            <button type='button'>
              <img src={shoppingBagIcon} alt="Ícone de bolsa de compras" />

              <span>Meu Carrinho</span>
            </button>
          </div>
        </div>
      </div>

      <Menu items={MENU_DEFAULT_ITEMS} />
    </header>
  )
}
