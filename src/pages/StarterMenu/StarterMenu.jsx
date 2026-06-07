import ReservationForm from '../../components/ReservationForm/ReservationForm'
import styles from './StarterMenu.module.css'
import starterMenuImg from '@assets/images/starter-menu-image.jpg'

const menuItems = [
  { price: '$20', title: 'Grilled Okra and Tomatoes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { price: '$18', title: 'Cucumber Salad', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { price: '$12', title: 'Basil Pancakes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

const StarterMenu = () => {
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
            <h2>Starters</h2>
            <p>This is a section of your menu. Give your section a brief description</p>
          </div>
          <div className={styles.twoColumns}>
            <div className={styles.imageBox}>
              <img src={starterMenuImg} alt="Starter Menu" />
            </div>
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
          </div>
        </div>
      </section>

      <ReservationForm />
    </>
  )
}

export default StarterMenu
