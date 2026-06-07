import { useState } from 'react'
import styles from './Contact.module.css'

import contactImg1 from '@assets/images/contact-section-image-1.jpg'
import contactImg2 from '@assets/images/contact-section-image-2.jpg'
import flowerIcon from '@assets/images/Mint.png'

const openTimes = [
  { label: 'Brunch', time: '11:00 - 12:00' },
  { label: 'Lunch', time: '13:00 - 17:00' },
  { label: 'Dinner', time: '18:00 - 20:00' },
]

const timeSlots = [
  '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm',
  '8:00 pm', '8:30 pm', '9:00 pm', '9:30 pm',
]

const peopleCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    date: '', time: '6:00 pm', people: '2',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => e.preventDefault()

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="section-wrapper">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <h1>Get in Touch</h1>
              <p>The freshest ingredients for you every day</p>
            </div>
            <div className={styles.openTime}>
              <div className={styles.titleHeader}>
                <h6>Open Time</h6>
                <p>Sunday - Friday</p>
              </div>
              <div className={styles.details}>
                {openTimes.map(({ label, time }) => (
                  <div key={label}>
                    <span>{label}</span>
                    <p>{time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT ICON SECTION */}
      <section className={styles.contactIconSec}>
        <div className="section-wrapper">
          <div className={styles.twoCol}>
            <div className={styles.imgCol}>
              <img src={contactImg1} alt="Contact Details" />
            </div>
            <div className={styles.content}>
              <p>
                We can be contacted via
                <br />
                email{' '}
                <a href="mailto:info@foodzero-app.netlify.app">info@foodzero-app.netlify.app</a>
                <br />
                or telephone on <a href="tel:88123456789">+88 123 456 789</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className={styles.location}>
        <div className="section-wrapper">
          <div className={styles.twoCol}>
            <div className={styles.content}>
              <p>We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230</p>
              <a href="#" target="_blank" rel="noreferrer" className={styles.outlineBtn}>
                View in map
              </a>
            </div>
            <div className={styles.imgCol}>
              <img src={contactImg2} alt="Location Details" />
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATION SECTION */}
      <section className={styles.contactReservation}>
        <div className="section-wrapper">
          <div className={styles.resHeader}>
            <img src={flowerIcon} alt="" className={styles.flowerIcon} aria-hidden="true" />
            <div className={styles.resHeadingBox}>
              <h2>Make a Reservation</h2>
              <p>Get in touch with restaurant</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.resForm}>
            <div className={styles.row2}>
              <input className={styles.resInput} type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
              <input className={styles.resInput} type="text" name="lastName"  placeholder="Last Name"  value={form.lastName}  onChange={handleChange} />
            </div>
            <div className={styles.row1}>
              <input className={styles.resInput} type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            </div>
            <div className={styles.row1}>
              <input className={styles.resInput} type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
            </div>
            <div className={styles.row2}>
              <input className={styles.resInput} type="date" name="date" value={form.date} onChange={handleChange} />
              <select className={styles.resInput} name="time" value={form.time} onChange={handleChange}>
                {timeSlots.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className={styles.row1}>
              <select className={styles.resInput} name="people" value={form.people} onChange={handleChange}>
                {peopleCounts.map(n => <option key={n} value={n}>{n} Person</option>)}
              </select>
            </div>
            <div className={styles.resSubmit}>
              <button type="submit" className={styles.bookBtn}>Book Now</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
