import styles from './MenuItemCard.module.css'

const MenuItemCard = ({ price, title, description }) => {
  return (
    <div className={styles.menuItem}>
      <div className={styles.price}>
        <p>{price}</p>
        <span className={styles.itemDivider} />
      </div>
      <div className={styles.menuDetails}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default MenuItemCard
