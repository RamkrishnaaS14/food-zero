import BlogPostCard from '../../components/BlogPostCard/BlogPostCard'
import styles from './Blog.module.css'

import blogImg1 from '@assets/images/blog-img-1.png'
import blogImg2 from '@assets/images/blog-img-2.png'
import author1 from '@assets/images/author-1.png'
import author2 from '@assets/images/author-2.png'

const blogPosts = [
  {
    image: blogImg1,
    imageAlt: 'Fruit & Vegetable',
    category: 'Vegetable',
    authorImg: author1,
    authorName: 'Julie Christie',
    date: 'October 17, 2021',
    title: 'Fruit and vegetables and protection against diseases',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/blog/fruit-and-vegetables-and-protection-against-diseases',
  },
  {
    image: blogImg2,
    imageAlt: 'Salad',
    category: 'Salad',
    authorImg: author2,
    authorName: 'Dianne Russell',
    date: 'October 17, 2021',
    title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/blog/fruit-and-vegetables-and-protection-against-diseases',
  },
]

const Blog = () => {
  return (
    <section className={styles.blogSec}>
      <div className="section-wrapper">
        <div className={styles.blogGrid}>
          {blogPosts.map((post, i) => (
            <BlogPostCard key={i} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
