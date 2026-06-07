import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'
import { Form, Input, Button } from 'reactstrap'
import styles from './Footer.module.css'
import footerLogo from '@assets/images/footer-logo.png'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className={styles.footer}>
      <div className="section-wrapper">
        <div className={styles.footerTop}>
          <div className={styles.logoColumn}>
            <Link to="/">
              <img src={footerLogo} alt="Food Zero Footer Logo" />
            </Link>
          </div>

          <div className={styles.contactColumn}>
            <h4>Contact</h4>
            <p>
              <a href="tel:88123456789">+88 123 456 789</a>
              <br />
              <a href="mailto:info@foodzero.com">info@foodzero.com</a>
            </p>
            <p>
              <a href="#">1959 Sepulveda Blvd. Culver City, CA, 90230</a>
            </p>
          </div>

          <div className={styles.formColumn}>
            <h4>Never Miss a Recipe</h4>
            <div className={styles.newsletterForm}>
              <Form onSubmit={handleSubscribe}>
                <div className={styles.formContainer}>
                  <div className={styles.fieldBox}>
                    <Input
                      type="email"
                      placeholder="Enter Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.emailInput}
                    />
                  </div>
                  <Button type="submit" className={styles.subscribeBtn}>
                    Subscribe
                  </Button>
                </div>
              </Form>
              <p>Join our subscribers and get best recipe delivered each week!</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerDivider} />

      <div className="section-wrapper">
        <div className={styles.bottomFooter}>
          <div className={styles.footerLeft}>
            <p>&copy; 2026 Food Zero Inc. All rights Reserved.</p>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.socialIcons}>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
