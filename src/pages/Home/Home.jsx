import { useState } from 'react'
import MenuItemCard from '../../components/MenuItemCard/MenuItemCard'
import BlogPostCard from '../../components/BlogPostCard/BlogPostCard'
import CTAFeatureBox from '../../components/CTAFeatureBox/CTAFeatureBox'
import ReservationForm from '../../components/ReservationForm/ReservationForm'
import styles from './Home.module.css'

import dishImg from '@assets/images/dish-image.png'
import spices1 from '@assets/images/spices1.png'
import spices2 from '@assets/images/spices2.png'
import spices3 from '@assets/images/spices3.png'
import dish2 from '@assets/images/dish-2.png'
import dish3 from '@assets/images/dish-3.png'
import cookPaste from '@assets/images/cook-paste-indegradients.png'
import leafIcon from '@assets/images/Leaf.png'
import fishIcon from '@assets/images/fish-icon.png'
import gajjerIcon from '@assets/images/gajjer-icon.png'
import lemonIcon from '@assets/images/lemon-icon.png'
import blogImg1 from '@assets/images/blog-img-1.png'
import blogImg2 from '@assets/images/blog-img-2.png'
import author1 from '@assets/images/author-1.png'
import author2 from '@assets/images/author-2.png'
import starterMenuImg from '@assets/images/starters.png'
import mainMenuImg from '@assets/images/mains.png'
import soup from '@assets/images/soup.png'
import janeCooper from '@assets/images/jane-cooper.jpg'

const menuItems = [
  { price: '$20', title: 'Deep Sea Snow White Cod Fillet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { price: '$22', title: 'Steak With Rosemary Butter', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { price: '$18', title: 'Cucumber Salad', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { price: '$90', title: 'Natural Wine Pairing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

const blogPosts = [
  {
    image: blogImg1,
    imageAlt: 'Fruit & Vegetable',
    category: 'Fashion',
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
    category: 'Fashion',
    authorImg: author2,
    authorName: 'Dianne Russell',
    date: 'October 17, 2021',
    title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/blog/fruit-and-vegetables-and-protection-against-diseases',
  },
]

const ctaFeatures = [
  { icon: <img src={fishIcon} alt="Fish Icon" />, title: 'Premium Quality', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu' },
  { icon: <img src={gajjerIcon} alt="Seasonal Vegetables" />, title: 'Seasonal Vegetables', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu' },
  { icon: <img src={lemonIcon} alt="Fresh Fruit" />, title: 'Fresh Fruit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu' },
]

const testimonials = [
  {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet.',
    authorImg: author1,
    authorName: 'John Doe',
    authorRole: 'Blogger',
  },
  {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet.',
    authorImg: author2,
    authorName: 'Jane Cooper',
    authorRole: 'Chef',
  },
  {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet.',
    authorImg: janeCooper,
    authorName: 'Sarah Miles',
    authorRole: 'Food Critic',
  },
]

const caloriesCards = [
  { img: starterMenuImg, label: 'Starters' },
  { img: mainMenuImg,   label: 'Mains'    },
  { img: soup,         label: 'Soups'    },
]

const Home = () => {
  const [slide, setSlide] = useState(1)
  const total = testimonials.length
  const prev = () => setSlide(s => (s - 1 + total) % total)
  const next = () => setSlide(s => (s + 1) % total)
  const t = testimonials[slide]

  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className="section-wrapper">
          <div className={styles.sectionWrapper}>
            <img src={dishImg} alt="Dish" className={styles.dishImg} />
            <div className={styles.heroContent}>
              <h1>Healthy Eating is important part of lifestyle</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
            </div>
            <div className={styles.icons}>
              <div className={styles.iconWrapper}>
                <img src={spices1} alt="Spicy Ingredient" />
                <img src={spices2} alt="Spicy Ingredient" />
                <img src={spices3} alt="Spicy Ingredient" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO INNER SECTION */}
      <section className={styles.heroInner}>
        <div className="section-wrapper">
          <div className={styles.heroInnerWrapper}>
            <div className={styles.heroLeft}>
              <img src={dish2} alt="Dish" />
              <h3>
                Start to plan <br />
                your diet today
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
            </div>
            <div className={styles.heroRight}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
              <img src={dish3} alt="Dish" />
            </div>
          </div>
        </div>
      </section>

      {/* OUR MENU SECTION */}
      <section className={styles.ourMenu}>
        <div className="section-wrapper">
          <div className={styles.titleBox}>
            <h2>Our Menu</h2>
            <p>This is a section of your menu. Give your section a brief description</p>
          </div>
          <div className={styles.menuContainer}>
            {menuItems.map((item, i) => (
              <MenuItemCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* EXCELLENT SECTION */}
      <section className={styles.excellent}>
        <div className="section-wrapper">
          <div className={styles.columnBoxes}>
            <div className={styles.colLeft}>
              <img src={cookPaste} alt="Cook Paste Ingredients" />
            </div>
            <div className={styles.colRight}>
              <h2>Excellent cook</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus
                imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.
              </p>
              <img src={leafIcon} alt="Leaf Icon" className={styles.leafIcon} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.cta}>
        <div className="section-wrapper">
          <div className={styles.threeColumns}>
            {ctaFeatures.map((feature, i) => (
              <CTAFeatureBox key={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className={styles.blogSec}>
        <div className="section-wrapper">
          <div className={styles.blogGrid}>
            {blogPosts.map((post, i) => (
              <BlogPostCard key={i} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION SECTION */}
      <ReservationForm />

      {/* CALORIES ENERGY BALANCE SECTION */}
      <section className={styles.calories}>
        <div className="section-wrapper">
          <div className={styles.caloriesHeader}>
            <h2>Calories Energy Balance</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className={styles.caloriesCards}>
            {caloriesCards.map(({ img, label }) => (
              <div className={styles.caloriesCard} key={label}>
                <img src={img} alt={label} />
                <div className={styles.cardOverlay}>
                  <span className={styles.cardLabel}>{label}</span>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.testimonialWrap}>
            <div className={styles.testimonialLeft}>
              <p className={styles.quoteText}>
                &ldquo; {t.quote}
              </p>
              <div className={styles.testimonialFooter}>
                <div className={styles.authorInfo}>
                  <img src={t.authorImg} alt={t.authorName} className={styles.authorAvatar} />
                  <div>
                    <span className={styles.authorName}>{t.authorName}</span>
                    <span className={styles.authorRole}>{t.authorRole}</span>
                  </div>
                </div>
                <div className={styles.testimonialNav}>
                  <button className={styles.navBtn} onClick={prev}>←</button>
                  <span className={styles.navCount}>{slide + 1} / {total}</span>
                  <button className={styles.navBtn} onClick={next}>→</button>
                </div>
              </div>
            </div>
            <div className={styles.testimonialRight}>
              <span className={styles.quoteDecor}>&rdquo;</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
