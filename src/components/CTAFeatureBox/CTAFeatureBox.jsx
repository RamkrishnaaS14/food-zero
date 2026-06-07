import styles from './CTAFeatureBox.module.css'

const CTAFeatureBox = ({ icon, title, description }) => {
  return (
    <div className={styles.innerColumn}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default CTAFeatureBox
