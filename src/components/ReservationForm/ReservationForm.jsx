import { useState } from 'react'
import { Form, Button } from 'reactstrap'
import styles from './ReservationForm.module.css'

const timeSlots = [
  '06:00 P.M', '06:30 P.M', '07:00 P.M', '07:30 P.M',
  '08:00 P.M', '08:30 P.M', '09:00 P.M', '09:30 P.M',
  '10:00 P.M', '10:30 P.M', '11:00 P.M', '11:30 P.M',
  '12:00 A.M', '12:30 A.M',
]

const peopleCounts = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25]

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '06:00 P.M',
    people: '2',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className={styles.reservation}>
      <div className="section-wrapper">
        <div className={styles.content}>
          <h2>Make a Reservation</h2>
          <p>Get in touch with restaurant</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className={styles.quickReservation}>
            <div className={styles.formContainer}>
              <div className={styles.fieldBox}>
                <input
                  type="date"
                  name="book-date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className={styles.formInput}
                />
              </div>
              <div className={styles.fieldBox}>
                <select
                  name="time-slot"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className={styles.formInput}
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
              <div className={styles.fieldBox}>
                <select
                  name="number-of-people"
                  value={formData.people}
                  onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                  className={styles.formInput}
                >
                  {peopleCounts.map((n) => (
                    <option key={n} value={n}>{n} peoples</option>
                  ))}
                </select>
              </div>
            </div>
            <Button type="submit" className={styles.bookBtn}>
              Book Now
            </Button>
          </div>
        </Form>
      </div>
    </section>
  )
}

export default ReservationForm
