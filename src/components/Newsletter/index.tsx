import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';

import styles from './styles.module.scss';

export function Newsletter() {
  const [email, setEmail] = useState('')

  function handleToSubmit(event: FormEvent) {
    event.preventDefault()
    toast.success('Email registrado com sucesso, confira sua caixa de entrada!')
  }

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Receba Nossa Newsletter</h5>

      <form onSubmit={handleToSubmit}>
        <input
          type="email"
          placeholder='Digite seu e-mail'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
