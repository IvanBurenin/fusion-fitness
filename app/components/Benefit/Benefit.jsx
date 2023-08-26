import styles from './Benefit.module.css'

export default function Benefit({img, title, text}){
    return(
        <div className={styles.benefitItem}>
            <div className={styles.top}>
                <img src={img} />
                <h4 className={styles.benefitTitle}>{title}</h4>
            </div>
            <p className={styles.benefitText}>{text}</p>
        </div>
    )
}