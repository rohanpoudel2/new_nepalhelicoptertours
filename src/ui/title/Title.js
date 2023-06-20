import styles from "./title.module.scss";
import Divider from '@/ui/divider/Divider'

const Title = ({ text, props }) => {
  return (
    <h3 className={`${styles.title} ${props}`}>
      🚁 {text} 🚁
      <Divider width="150px" />
    </h3>
  )
}

export default Title