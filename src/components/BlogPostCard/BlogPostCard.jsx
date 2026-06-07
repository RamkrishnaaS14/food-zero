import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import styles from './BlogPostCard.module.css'

const BlogPostCard = ({ image, imageAlt, category, authorImg, authorName, date, time, comments, title, excerpt, link, horizontal }) => {
  return (
    <div className={horizontal ? styles.blogItemHorizontal : styles.blogItem}>
      <div className={styles.featuredImg}>
        <img src={image} alt={imageAlt} />
        <span className={styles.categoryBadge}>{category}</span>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.meta}>
          <img src={authorImg} alt={authorName} />
          <div className={styles.metaInfo}>
            <span className={styles.metaName}>{authorName}</span>
            {date && <><span className={styles.dot}>•</span><span>{date}</span></>}
            {time && <><span className={styles.dot}>•</span><span>{time}</span></>}
            {comments && <><span className={styles.dot}>•</span><span>{comments}</span></>}
          </div>
        </div>
        <h4>{title}</h4>
        <span className={styles.divider} />
        <p>{excerpt}</p>
        <Link to={link} className={styles.readMoreBtn}>
          Read More <FaArrowRight className={styles.arrowIcon} />
        </Link>
      </div>
    </div>
  )
}

export default BlogPostCard
