import ReservationForm from '../../components/ReservationForm/ReservationForm'
import styles from './DrinksMenu.module.css'
import drinksMenuImg from '@assets/images/drinks-menu-image.jpg'

const menuItems = [
  { price: '$158', title: 'Wine Pairing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { price: '$168', title: 'Natural Wine Pairing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { price: '$90', title: 'Whisky Flyer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

const DrinksMenu = () => {
  return (
    <>
      {/* MENU HERO */}
      <section className={styles.menuHero}>
        <div className="section-wrapper">
          <div className={styles.heroContent}>
            <h1>Our Menu</h1>
            <p>The freshest ingredients for you every day</p>
          </div>
        </div>
      </section>

      {/* MENU CONTENT */}
      <section className={styles.menuContent}>
        <div className="section-wrapper">
          <div className={styles.titleBox}>
            <h2>Pastries &amp; Drinks</h2>
            <p>This is a section of your menu. Give your section a brief description</p>
          </div>
          <div className={styles.twoColumns}>
            <div className={styles.contentBox}>
              {menuItems.map((item, i) => (
                <div key={i} className={styles.singleItem}>
                  <div className={styles.price}>
                    <p>{item.price}</p>
                    <span className={styles.itemDivider} />
                  </div>
                  <div className={styles.menuDetails}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.imageBox}>
              <img src={drinksMenuImg} alt="Pastries & Drinks Menu" />
            </div>
          </div>
        </div>
      </section>

      <ReservationForm />
    </>
  )
}

export default DrinksMenu
