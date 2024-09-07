import styles from "../styles/Footer.module.css"
const ContenedorDatosFooter = ({children}:any) => {
  return (
    <section className={styles.footerDatosContent}>
        {children}
    </section>
  )
}

export default ContenedorDatosFooter