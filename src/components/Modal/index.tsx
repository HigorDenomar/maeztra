import * as Dialog from '@radix-ui/react-alert-dialog';
import { useState } from 'react';

import mailIcon from '../../assets/icons/mail.svg';

import styles from './styles.module.scss';

export function Modal() {
  const [modalIsOpen, setModalIsOpen] = useState(true)

  return (
    <Dialog.Root defaultOpen open={modalIsOpen}>
      <Dialog.Portal >
        <Dialog.Overlay className={styles.alertDialog_Overlay} onClick={() => setModalIsOpen(false)} />

        <Dialog.Content className={styles.alertDialog_Content}>
          <img src="/maeztra/images/banner-newsletter.png" aria-hidden />

          <div className={styles.content}>
            <div>
              <img src={mailIcon} alt="Ícone de e-mail" />

              <strong>Bem vindo à Maeztra</strong>

              <p>
                Receba em Primeira mão <br />

                <span>descontos e ofertas exclusivas</span>
              </p>

              <form>
                <input type="email" placeholder='Digite seu e-mail' />

                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
