import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"
import { ArrowRight, Check, Globe, Download, Zap } from "lucide-react"


const arrayPersonas = [
  {
    id:1,
    foto: "/Angelica.png",
    puesto: "CEO",
    descripcion:"Directora Ejecutiva",
    nombre: "Argañaraz Angelica"
  },
  {
    id:2,
    foto: "/Matias.png",
    puesto: "CTO",
    descripcion:"Director de Tecnología",
    nombre: "Alderete Matias"
  },
  {
    id:3,
    foto: "/Camila.png",
    puesto: "CPO",
    descripcion:"Directora de Producto",
    nombre: "Brahim Camila"
  },
  {
    id:4,
    foto: "/Ivan.png",
    puesto: "CFO",
    descripcion:"Director Financiero",
    nombre: "Ochoa Ivan"
  }
]

export default function NosotrosPage() {
  return (
    <main className={styles.main}>
  
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>Transformamos la forma en que las personas manejan su dinero</h1>
              <p>En DreamCash trabajamos para que todos puedan manejar su dinero de forma simple, transparente y segura.</p>
              <button className={styles.buttonPrimary}>
                Descargá la app <ArrowRight className={styles.icon} />
              </button>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.imageWrapper}>
                <Image src="/TelefonoDreamCash.png" alt="DreamCash App" fill className={styles.image} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Nuestra Historia</h2>
            <p>
              Nacimos en abril de 2025 con la misión de llevar la revolución financiera a Argentina.
            </p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
              <Download />
              </div>
              <h3>+300 mil</h3>
              <p>Descargas en toda Argentina</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Globe />
              </div>
              <h3>Referentes</h3>
              <p>En el NOA, NEA y AMBA Argentino</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Zap />
              </div>
              <h3>+400 colaboradores</h3>
              <p>Buscando potenciar la fuente de trabajo de los argentinos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Misión */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <div className={styles.missionImage}>
              <div className={styles.imageWrapper}>
                <Image src="/logoDreamCash.png" alt="Nuestra Misión" fill className={styles.image} />
              </div>
            </div>
            <div className={styles.missionText}>
              <h2>Nuestra Misión</h2>
              <p>
                Nuestra misión es crear soluciones financieras innovadoras que mejoren la vida de las personas en
                Argentina, promoviendo la inclusión financiera y democratizando el acceso a servicios financieros
                de calidad.
              </p>
              <ul className={styles.checkList}>
                {["Inclusión financiera", "Innovación tecnológica", "Experiencia de usuario", "Transparencia"].map(
                  (item, index) => (
                    <li key={index}>
                      <Check className={styles.checkIcon} />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Nuestro Equipo</h2>
            <p>
              Contamos con un equipo diverso y talentoso comprometido con nuestra misión de transformar los servicios
              financieros en Argentina.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {arrayPersonas.map((persona) => (
              <div key={persona.id} className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src={persona.foto}
                    alt="Foto de Persona"
                    fill
                    className={styles.teamImage}
                  />
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.puesto_persona}>{persona.puesto}</h3>
                  <p>{persona.descripcion}</p>
                  <h4 className={styles.nombre_persona}>{persona.nombre}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.teamSlogan}>
            <h1>+400 Colaboradores dando lo mejor cada dia...</h1>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Sé parte de la revolución financiera</h2>
            <p>Descargá la app y comenzá a disfrutar de una nueva forma de manejar tu dinero.</p>
            <div className={styles.ctaButtons}>
              <button className={styles.buttonPrimary}>
                Descargá la app <ArrowRight className={styles.icon} />
              </button>
              <button className={styles.buttonOutline}>Conocé más</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerColumn}>
              <h3>DreamCash</h3>
              <p>Transformamos la forma en que las personas manejan su dinero en Argentina.</p>
            </div>

            <div className={styles.footerColumn}>
              <h3>Productos</h3>
              <ul>
                {["Cuenta", "Tarjeta", "Inversiones", "Préstamos", "Seguros"].map((item, index) => (
                  <li key={index}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3>Empresa</h3>
              <ul>
                {["Nosotros", "Carreras", "Prensa", "Blog", "Ayuda"].map((item, index) => (
                  <li key={index}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3>Legal</h3>
              <ul>
                {["Términos y condiciones", "Privacidad", "Defensa del consumidor", "Seguridad"].map((item, index) => (
                  <li key={index}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} DreamCash. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
