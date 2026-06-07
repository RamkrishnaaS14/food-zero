import { Link } from 'react-router-dom'
import BlogPostCard from '../../components/BlogPostCard/BlogPostCard'
import styles from './Blog1Column.module.css'

import blogImg1 from '@assets/images/blog-img-1.png'
import blogImg2 from '@assets/images/blog-img-2.png'
import featureImage3 from '@assets/images/Feature-image3.png'
import featureImage4 from '@assets/images/Feature-image4.png'
import featureImage5 from '@assets/images/Feature-image5.png'
import featureImage6 from '@assets/images/Feature-image6.png'
import author1 from '@assets/images/author-1.png'
import author2 from '@assets/images/author-2.png'

const blogPosts = [
  {
    image: blogImg1,
    imageAlt: 'Dumplings',
    category: 'Fashion',
    authorImg: author1,
    authorName: 'Jeniffer Lopez',
    date: 'October 17, 2021',
    time: '3:33 pm',
    comments: '2 comments',
    title: 'Fruit and vegetables and protection against diseases',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/blog/fruit-and-vegetables-and-protection-against-diseases',
  },
  {
    image: blogImg2,
    imageAlt: 'Salad',
    category: 'Fashion',
    authorImg: author2,
    authorName: 'Dianne Russell',
    date: 'October 17, 2021',
    time: '3:33 pm',
    comments: '2 comments',
    title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/blog/fruit-and-vegetables-and-protection-against-diseases',
  },
  {
    image: featureImage3,
    imageAlt: 'Goat Meat',
    category: 'Fashion',
    authorImg: author1,
    authorName: 'Jeniffer Lopez',
    date: 'October 17, 2021',
    time: '3:33 pm',
    comments: '2 comments',
    title: 'The Best Style of Dough for Dumplings',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/blog/fruit-and-vegetables-and-protection-against-diseases',
  },
  {
    image: featureImage4,
    imageAlt: 'Lemon Water',
    category: 'Fashion',
    authorImg: author2,
    authorName: 'Leslie Alexander',
    date: 'October 17, 2021',
    time: '3:33 pm',
    comments: '2 comments',
    title: '7 Reasons to Start Your Day With Lemon Water',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/blog/fruit-and-vegetables-and-protection-against-diseases',
  },
  {
    image: featureImage5,
    imageAlt: 'Cooking',
    category: 'Fashion',
    authorImg: author1,
    authorName: 'Cody Fisher',
    date: 'October 17, 2021',
    time: '3:33 pm',
    comments: '2 comments',
    title: 'Three Ideas for Cooking Goat Meat at Home',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/blog/fruit-and-vegetables-and-protection-against-diseases',
  },
  {
    image: featureImage6,
    imageAlt: 'Sparkling Wine',
    category: 'Fashion',
    authorImg: author2,
    authorName: 'Leslie Alexander',
    date: 'October 17, 2021',
    time: '3:33 pm',
    comments: '2 comments',
    title: "12 Sparkling Wines We're Loving This Summer",
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/blog/fruit-and-vegetables-and-protection-against-diseases',
  },
]

const Blog1Column = () => {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Blog List - One Column</h1>
          <p>It is easy way to create your beautiful blog for daily</p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className={styles.breadcrumb}>
        <div className="section-wrapper">
          <nav className={styles.breadcrumbNav}>
            <Link to="/">Home</Link>
            <span> / </span>
            <Link to="/blog">Blog</Link>
            <span> / </span>
            <span>Blog One Column</span>
          </nav>
        </div>
      </div>

      {/* BLOG LIST */}
      <section className={styles.blogSec}>
        <div className="section-wrapper">
          <div className={styles.blogGrid}>
            {blogPosts.map((post, i) => (
              <BlogPostCard key={i} {...post} horizontal />
            ))}
          </div>

          {/* LOAD MORE */}
          <div className={styles.loadMoreWrap}>
            <button className={styles.loadMoreBtn}>Load More</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog1Column
