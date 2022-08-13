import styles from './header.module.css';
import { currentTime, currentDay, currentMonth, currentDate, currentYear } from '../../utils/GetDate';

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.title}>
          <p>Todo App</p>
      </div>
      <div className={styles.day}>
          <p className={styles.time}>{currentTime}</p>
          <h1>{currentDay}</h1>
      </div>
      <div className={styles.date}>
        <p>{currentMonth} {currentDate}, {currentYear}</p>
      </div>
    </div>
  )
}

export default Header