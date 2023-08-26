'use client'

import styles from './TrainingAccordion.module.css'

export default function TrainingAccordion({active, setActive, title, text}){
    const onClickAccordion = () => {
        if (active === title) {
            setActive("");
          } else {
            setActive(title);
          }
    }

    return(
        <div className={styles.accordionItem}>
            <div onClick={onClickAccordion} className={styles.top}>
                <h4 className={styles.title}>{title}</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className={`${active == title && styles.svgActive}`} width="17" height="9" viewBox="0 0 17 9" fill="none" strokeWidth={2} stroke='black'>
                    <path d="M16 8L8.5 1L1 8"/>
                </svg>
            </div>
            <p className={`${styles.text} ${active == title && styles.opened}`}>{text}</p>
        </div>
    )
}