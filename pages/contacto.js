import Head from 'next/head'
import Image from 'next/image'
import Animation from '../components/Animation'
import styles from '../styles/Contacto.module.css'

export default function Contacto() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contacto</title>
        <meta name="description" content="Página de contacto" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      {/* <Navbar /> */}

      <main className={styles.main}>
        <Animation fadeIn={true}>
          <div className={styles.flexbox}>
            <div>
              <h2 className={styles.title}>Contáctame</h2>
              <p className={styles.description}>
                ¡Mándame un mensaje! Anda, no muerdo... no siempre.
              </p>
              <p className={styles.subtitle}>
                Sígueme
              </p>
              <div className={styles.logo_container}>
                <div className={styles.logo} >
                  <a target="_blank" href="https://www.linkedin.com/in/josue-de-jesus-medina-villa/" rel="noopener noreferrer" >
                    <Image layout="fill" src='/linkedin_black.svg' alt="linkedin"></Image>
                  </a>
                </div>
                <div className={styles.logo} >
                  <a target="_blank" href="https://twitter.com/MedinaVilla23" rel="noopener noreferrer" >
                    <Image layout="fill" src='/twitter_black.svg' alt="twitter"></Image>
                  </a>
                </div>
                <div className={styles.logo} >
                  <a target="_blank" href="https://www.instagram.com/medinavilla/" rel="noopener noreferrer" >
                    <Image layout="fill" src='/instagram.svg' alt="instagram"></Image>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.form}>
              <input className={styles.input} placeholder='Nombre'></input>
              <input className={styles.input} placeholder='Correo electrónico'></input>
              <textarea rows={4} className={styles.input} placeholder='Mensaje'></textarea>
              <div align="right">
                <button className={styles.button_secondary}>Enviar</button>
              </div>
            </div>
          </div>
        </Animation>
      </main>
    </div>
  )
}
