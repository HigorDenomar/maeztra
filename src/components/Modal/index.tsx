import * as Dialog from '@radix-ui/react-alert-dialog';
import { FormEvent, useState } from 'react';

import mailIcon from '../../assets/icons/mail.svg';

import styles from './styles.module.scss';

export function Modal() {
  const [email, setEmail] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(true)


  function handleToSendEmail(event: FormEvent) {
    event.preventDefault()

    console.log('Email enviado!')

    setModalIsOpen(false)
  }


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

              <form onSubmit={handleToSendEmail}>
                <input
                  type="email"
                  placeholder='Digite seu e-mail'
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />

                <button type="submit" disabled={!email}>Enviar</button>
              </form>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
