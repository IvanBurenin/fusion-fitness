import trainingsData from '../database/trainingsData'
import trKindsData from '../database/trkindsData'

import TrainingDay from '../components/TrainingDay/TrainingDay'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export default function Schedule() {
    return(
        <>
            <section className={styles.trainings}>
                <div className={mainStyles.container}>
                    <div className={styles.trainingsInner}>
                        <h3 className={mainStyles.pagesTitle}>Расписание тренировок</h3>
                        <div className={styles.trainingsGrid}>
                            {trainingsData.map((training, index) => (
                                <TrainingDay key={index} day={training.day} date={training.date} events={training.events}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.trainingKinds}>
                <div className={mainStyles.container}>
                    <div className={styles.items}>
                        {trKindsData.map((kind, index) => (
                            <div key={index} className={styles.item}>
                                <h4 className={styles.kindTitle}>{kind.title}</h4>
                                <p className={mainStyles.text}>{kind.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}