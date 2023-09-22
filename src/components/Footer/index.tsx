import { FaCcMastercard, FaCcVisa, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';

import { Newsletter } from '../Newsletter';
import { Menu } from './Menu';

import maeztraLogo from '../../assets/logos/maeztra-white.png';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer>
      <Newsletter />
      <Menu />

      <div className={styles['copy-wrapper-container']}>
        <div className={styles['copy-wrapper-wrapper']}>
          <ul>
            <li>
              <a href="https://facebook.com/" target='_blank'>
                {/* <FaFacebookSquare size={25} color='#FFF' /> */}
                <IoLogoFacebook size={25} color='#FFF' />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/" target='_blank'>
                <FaLinkedinIn size={25} color='#FFF' />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/" target='_blank'>
                <FaInstagram size={25} color='#FFF' />
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/" target='_blank'>
                <FaYoutube size={25} color='#FFF' />
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <FaCcVisa size={25} />
            </li>

            <li>
              <FaCcMastercard size={25} />
            </li>

            <li>
              <FaCcVisa size={25} />
            </li>

            <li>
              <FaCcMastercard size={25} />
            </li>
          </ul>

          <ul>
            <div>
              <p>Powered by</p>

              VTEX
            </div>
            <div>
              <p>Developed by</p>

              <img src={maeztraLogo} alt="Maeztra" />
            </div>
          </ul>
        </div>
      </div>
    </footer>
  )
}
