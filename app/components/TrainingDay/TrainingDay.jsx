import styles from './TrainingDay.module.css'

export default function TrainingDay({day, date, events}) {
    return(
        <div className={styles.trainingItem}>
            <div className={styles.top}>
                <span className={styles.dayTitle}>{day}</span>
                <span className={styles.dayTitle}>{date}</span>
            </div>
            <ul className={styles.events}>
                {events.map((event, index) => (
                    <li className={styles.eventItem} key={index}>
                        <span className={styles.eventTime}>{event.time}</span>
                        <span className={styles.eventText}>{event.activity}</span>
                        <span className={styles.eventText}>{event.trainer}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}