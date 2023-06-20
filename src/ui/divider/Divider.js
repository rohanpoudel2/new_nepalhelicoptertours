import styles from "./divider.module.scss";

const Divider = ({ width }) => {
  return (
    <div className={styles.divider} style={{ width: width }}>

    </div>
  )
}

export default Divider