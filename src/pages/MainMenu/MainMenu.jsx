import ReservationForm from '../../components/ReservationForm/ReservationForm'
import styles from './MainMenu.module.css'
import mainMenuImg from '@assets/images/main-menu-image.jpg'
import starterMenuImg from '@assets/images/starter-menu-image.jpg'
import drinksMenuImg from '@assets/images/drinks-menu-image.jpg'

const starterItems = [
  { price: '$20', title: 'Grilled Okra and Tomatoes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { price: '$18', title: 'Cucumber Salad', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { price: '$12', title: 'Basil Pancakes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

const drinksItems = [
  { price: '$158', title: 'Wine Pairing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { price: '$168', title: 'Natural Wine Pairing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { price: '$90', title: 'Whisky Flyer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

const mainItems = [
  { price: '$20', title: 'Deep Sea Snow White Cod Fillet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { price: '$22', title: 'Steak With Rosemary Butter', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { price: '$20', title: 'Steaks with Grilled Kimchi', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

const MainMenu = () => {
  return (
    <>
      {/* MENU HERO */}
      <section className={styles.menuHero}>
        <div className="section-wrapper">
          <div className={styles.heroContent}>
            <h1>View Our<br />New Menu</h1>
            <p>The freshest ingredients for you every day</p>
          </div>
        </div>
      </section>

      {/* STARTERS SECTION */}
      <section className={styles.startersSection}>
        <div className="section-wrapper">
          <div className={styles.titleBox}>
            <h2>Starters</h2>
            <p>This is a section of your menu. Give your section a brief description</p>
          </div>
          <div className={styles.twoColumns}>
            <div className={styles.imageBox}>
              <img src={starterMenuImg} alt="Starters" />
            </div>
            <div className={styles.contentBox}>
              {starterItems.map((item, i) => (
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

      {/* MAINS SECTION */}
      <section className={styles.menuContent}>
        <div className="section-wrapper">
          <div className={styles.titleBox}>
            <h2>Mains</h2>
            <p>This is a section of your menu. Give your section a brief description</p>
          </div>
          <div className={styles.twoColumns}>
            <div className={styles.contentBox}>
              {mainItems.map((item, i) => (
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
              <img src={mainMenuImg} alt="Main Menu" />
            </div>
          </div>
        </div>
      </section>

      {/* DRINKS SECTION */}
      <section className={styles.drinksSection}>
        <div className="section-wrapper">
          <div className={styles.titleBox}>
            <h2>Pastries &amp; Drinks</h2>
            <p>This is a section of your menu. Give your section a brief description</p>
          </div>
          <div className={styles.twoColumns}>
            <div className={styles.imageBox}>
              <img src={drinksMenuImg} alt="Pastries & Drinks" />
            </div>
            <div className={styles.contentBox}>
              {drinksItems.map((item, i) => (
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

export default MainMenu
