import { Link } from 'react-router-dom'
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import styles from './BlogSidebar.module.css'

import author1 from '@assets/images/author-1.png'
import author2 from '@assets/images/author-2.png'
import blogImg1 from '@assets/images/blog-img-1.png'
import blogImg2 from '@assets/images/blog-img-2.png'
import featureImage5 from '@assets/images/sidebar-blog-2.png'
import featureImage4 from '@assets/images/Feature-image4.png'
import featureImage6 from '@assets/images/Feature-image6.png'
import mainMenuImg from '@assets/images/sidebar-blog-3.png'
import starterMenuImg from '@assets/images/Feature-image5.png'
import janeCooper from '@assets/images/jane-cooper.jpg'
import featureImage3 from '@assets/images/Feature-image3.png'


const tags = ['Design', 'Photography', 'Images', 'Video', 'Music', 'Travel']

const categories = [
  { name: 'Fashion', count: 16 },
  { name: 'Food',    count: 20 },
  { name: 'Music',   count: 12 },
  { name: 'Travel',  count: 36 },
]

const recentComments = [
  { author: 'Julie Christie', on: 'Vegan baked oatmeal with fresh berries' },
  { author: 'Alex',           on: '80 Foods That Are Super Healthy' },
  { author: 'Cody Fisher',    on: 'How Many Carbs Should You Eat for Weight Loss?' },
  { author: 'Tom',            on: '22 Foods That Can Give You More Energy' },
]

const archives = [
  { month: 'October 2021',   count: 12 },
  { month: 'September 2021', count: 6  },
  { month: 'August 2021',    count: 23 },
]

const recentPosts = [
  { image: blogImg1,       title: 'Vegan baked oatmeal with fresh berries', author: 'Julie Christie', date: 'October 17, 2021' },
  { image: blogImg2,       title: 'Vegan baked oatmeal with fresh berries', author: 'Julie Christie', date: 'October 17, 2021' },
  { image: featureImage3,    title: 'Vegan baked oatmeal with fresh berries', author: 'Julie Christie', date: 'October 17, 2021' },
  { image: starterMenuImg, title: 'Vegan baked oatmeal with fresh berries', author: 'Julie Christie', date: 'October 17, 2021' },
]

const comments = [
  { avatar: author2,    name: 'Leslie Alexander', date: 'March 12, 2020, 7:08 pm', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.' },
  { avatar: author1,    name: 'Jenifier Lopez',   date: 'March 12, 2020, 7:08 pm', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.' },
  { avatar: janeCooper, name: 'Jane Cooper',      date: 'March 12, 2020, 7:08 pm', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.' },
  { avatar: author2,    name: 'Jenny Wilson',     date: 'March 12, 2020, 7:08 pm', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.' },
]

const BlogSidebar = () => {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroBadge}>Fashion</span>
          <h1>Three Ideas for Cooking<br />Goat Meat at Home</h1>
          <div className={styles.heroMeta}>
            <img src={author1} alt="Julie Christie" className={styles.heroAvatar} />
            <span className={styles.metaName}>Julie Christie</span>
            <span className={styles.dot}>•</span>
            <span>October 17, 2021</span>
            <span className={styles.dot}>•</span>
            <span>3:33 pm</span>
            <span className={styles.dot}>•</span>
            <span>2 comments</span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className={styles.bodySec}>
        <div className="section-wrapper">

          {/* BREADCRUMB */}
          <nav className={styles.breadcrumbNav}>
            <Link to="/">Home</Link>
            <span> / </span>
            <Link to="/blog">Blog</Link>
            <span> / </span>
            <span>Three Ideas for Cooking Goat Meat at Home</span>
          </nav>

          <div className={styles.layout}>
            {/* MAIN ARTICLE */}
            <article className={styles.article}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.</p>

              <div className={styles.imageGallery}>
                <img src={featureImage5} alt="Article image 1" />
                <div className={styles.galleryRight}>
                  <img src={mainMenuImg}    alt="Article image 2" />
                  <img src={starterMenuImg} alt="Article image 3" />
                </div>
              </div>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <blockquote className={styles.pullQuote}>
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.
              </blockquote>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet.</p>

              {/* TAGS */}
              <div className={styles.tagsRow}>
                <span className={styles.tagsLabel}>Tags:</span>
                <div className={styles.tagsList}>
                  {tags.map(tag => (
                    <span key={tag} className={styles.tagPill}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* AUTHOR BIO */}
              <div className={styles.authorBio}>
                <img src={author1} alt="Julie Christie" className={styles.authorAvatar} />
                <div>
                  <h5 className={styles.authorName}>Julie Christie</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.</p>
                </div>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className={styles.sidebar}>

              {/* SEARCH */}
              <div className={styles.sideWidget}>
                <div className={styles.searchBox}>
                  <input type="text" placeholder="Search......" className={styles.searchInput} />
                  <button className={styles.searchBtn} aria-label="Search"><FaSearch /></button>
                </div>
              </div>

              {/* TAGS WIDGET */}
              <div className={styles.sideWidget}>
                <h4 className={styles.widgetTitle}>Tags</h4>
                <span className={styles.widgetDivider} />
                <div className={styles.sideTagsList}>
                  {tags.map(tag => (
                    <span key={tag} className={styles.sideTagPill}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* CATEGORIES */}
              <div className={styles.sideWidget}>
                <h4 className={styles.widgetTitle}>Categories</h4>
                <span className={styles.widgetDivider} />
                <ul className={styles.categoryList}>
                  {categories.map(({ name, count }) => (
                    <li key={name}><span>{name}</span><span>{count}</span></li>
                  ))}
                </ul>
              </div>

              {/* RECENT COMMENTS */}
              <div className={styles.sideWidget}>
                <h4 className={styles.widgetTitle}>Recent Comments</h4>
                <span className={styles.widgetDivider} />
                <ul className={styles.commentList}>
                  {recentComments.map(({ author, on }, i) => (
                    <li key={i}>
                      <span className={styles.commentAuthor}>{author}</span>
                      <span> on </span>
                      <Link to="/blog">{on}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ARCHIVES */}
              <div className={styles.sideWidget}>
                <h4 className={styles.widgetTitle}>Archives</h4>
                <span className={styles.widgetDivider} />
                <ul className={styles.categoryList}>
                  {archives.map(({ month, count }) => (
                    <li key={month}><span>{month}</span><span>{count}</span></li>
                  ))}
                </ul>
              </div>

              {/* RECENT POSTED */}
              <div className={styles.sideWidget}>
                <h4 className={styles.widgetTitle}>Recent Posted</h4>
                <span className={styles.widgetDivider} />
                <ul className={styles.recentList}>
                  {recentPosts.map(({ image, title, author, date }, i) => (
                    <li key={i} className={styles.recentItem}>
                      <img src={image} alt={title} className={styles.recentThumb} />
                      <div className={styles.recentInfo}>
                        <Link to="/blog" className={styles.recentTitle}>{title}</Link>
                        <span>{author} • {date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* PREV / NEXT POST */}
      <div className={styles.postNav}>
        <div className={styles.postNavPrev}>
          <div className={styles.postNavOverlay}>
            <span className={styles.postNavLabel}><FaArrowLeft /> PREVIOUS POST</span>
            <h3>7 Reasons to Start Your Day With Lemon Water</h3>
          </div>
        </div>
        <div className={styles.postNavNext}>
          <div className={styles.postNavOverlay}>
            <span className={styles.postNavLabel}>NEXT POST <FaArrowRight /></span>
            <h3>12 Sparkling Wines We're Loving This Summer</h3>
          </div>
        </div>
      </div>

      {/* COMMENTS */}
      <section className={styles.commentsSec}>
        <div className="section-wrapper">
          <h2 className={styles.commentsTitle}>{comments.length} Comments</h2>
          <div className={styles.commentItems}>
            {comments.map(({ avatar, name, date, text }, i) => (
              <div key={i} className={styles.commentRow}>
                <img src={avatar} alt={name} className={styles.commentAvatar} />
                <div className={styles.commentBody}>
                  <div className={styles.commentHeader}>
                    <div>
                      <span className={styles.commentName}>{name}</span>
                      <span className={styles.commentDate}>{date}</span>
                    </div>
                    <button className={styles.replyBtn}>Reply</button>
                  </div>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <span className={styles.commentsDivider} />

          {/* LEAVE A REPLY FORM */}
          <div className={styles.replyBox}>
            <h2 className={styles.replyTitle}>Leave a Reply</h2>
            <form className={styles.replyForm} onSubmit={e => e.preventDefault()}>
              <div className={styles.replyField}>
                <label className={styles.replyLabel}>Comment</label>
                <textarea className={styles.replyTextarea} rows={6} />
              </div>
              <div className={styles.replyField}>
                <label className={styles.replyLabel}>Name*</label>
                <input type="text" className={styles.replyInput} />
              </div>
              <div className={styles.replyField}>
                <label className={styles.replyLabel}>Email*</label>
                <input type="email" className={styles.replyInput} />
              </div>
              <div className={styles.replyField}>
                <label className={styles.replyLabel}>Website</label>
                <input type="url" className={styles.replyInput} />
              </div>
              <button type="submit" className={styles.postCommentBtn}>Post Comment</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogSidebar
