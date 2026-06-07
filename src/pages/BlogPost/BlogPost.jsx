import { Link } from 'react-router-dom'
import styles from './BlogPost.module.css'

import author1 from '@assets/images/author-1.png'
import beafImg from '@assets/images/beaf-images.jpg'
import sauceImg from '@assets/images/sauce.jpg'

const tags = ['Fruit', 'Vegetables', 'Beaf', 'Meat', 'Sauce', 'Recepie']

const BlogPost = () => {
  return (
    <>
      {/* BLOG HERO */}
      <section className={styles.blogHero}>
        <div className={`section-wrapper ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <h1>Fruit and vegetables and protection against diseases</h1>
            <div className={styles.authorDetails}>
              <div className={styles.authorImg}>
                <img src={author1} alt="Julie Christie" />
              </div>
              <div className={styles.authorContent}>
                <ul>
                  <li>Julie Christie</li>
                  <li>October 17, 2021</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className={styles.content}>
        <div className="section-wrapper">
          <div className={styles.breadcrumbs}>
            <span>
              <Link to="/">Home</Link> / <Link to="/blog">Blog</Link> / Three Ideas for Cooking Goat
              Meat at Home
            </span>
          </div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque
            ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.
            Elementum pellentesque non hendrerit et pharetra tellus leo tempus tellus.
          </h3>
          <div className={styles.photosInline}>
            <div className={styles.photo}>
              <img src={beafImg} alt="Beef" />
            </div>
            <div className={styles.photo}>
              <img src={sauceImg} alt="Sauce" />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque
            ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.
            Elementum pellentesque non hendrerit et pharetra tellus leo tempus tellus. Consectetur
            scelerisque facilisis nunc nunc. Sapien morbi dignissim id tortor vel volutpat facilisi.
            Cras lectus faucibus sed donec. Est pulvinar adipiscing eget at nunc amet bibendum enim
            vulputate.
          </p>
          <p>
            Elementum pellentesque non hendrerit et pharetra tellus leo tempus tellus. Consectetur
            scelerisque facilisis nunc nunc. Sapien morbi dignissim id tortor vel volutpat facilisi.
            Cras lectus faucibus sed donec. Est pulvinar adipiscing eget at nunc amet bibendum enim
            vulputate. Eu orci nec consequat amet. Id cursus purus et fringilla molestie a nulla
            turpis. Lobortis dui rutrum sed sit.
          </p>

          <div className={styles.tags}>
            <h4>Tags:</h4>
            {tags.map((tag) => (
              <span key={tag}>
                <Link to="#">{tag}</Link>
              </span>
            ))}
          </div>

          <div className={styles.authorBox}>
            <div className={styles.authorBoxImg}>
              <img src={author1} alt="Julie Christie" />
            </div>
            <div className={styles.authorMeta}>
              <h6>Julie Christie</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost
