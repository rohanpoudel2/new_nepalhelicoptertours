"use client"
import styles from "./tripform.module.scss"

const TripForm = ({ title }) => {
  return (
    <form action="https://formsubmit.co/mactrek@gmail.com" method="POST" className={styles.form} onSubmit={(e) => (e.preventDefault())}>
      <input type="hidden" name="_subject" value={`${title} Inquiry`} />
      <div className={styles.formItem}>
        <label>Number of Person</label>
        <input type="number" name="Number of People" placeholder="Example: 2" required />
      </div>
      <div className={styles.formItem}>
        <label>Email</label>
        <input type="email" name="Email" placeholder="Example: you@email.com" required />
      </div>
      <div className={styles.formItem}>
        <label>Contact Number/ Whatsapp</label>
        <input type="email" name="Contact Number / Whatsapp" placeholder="Example: you@email.com" required />
      </div>
      <div className={styles.formItem}>
        <label>Select Date</label>
        <input type="date" name="Date Requested" required />
      </div>
      <button>
        Check Availability
      </button>
    </form>
  )
}

export default TripForm