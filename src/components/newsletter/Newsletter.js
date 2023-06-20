"use client"
import styles from "./newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <span className={styles.title}>
        Connect with us for exciting announcement
      </span>
      <span className={styles.subtitle}>
        Follow us or sign up for emails
      </span>
      <div className={styles.items}>
        <div className={styles.socialIcons}>
          <div className={styles.socialIcon}>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className={styles.socialIcon}>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <div className={styles.socialIcon}>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
        <form action="https://formsubmit.co/mactrek@gmail.com" method="POST" className={styles.form} onSubmit={(e) => (e.preventDefault())}>
          <input type="hidden" name="_subject" value="Helicopter Tours Newsletter" />
          <input type="email" name="Email" placeholder="Enter Your Email" required className={styles.input} />
          <button className={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter