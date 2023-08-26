import { useState } from 'react'

import styles from './BarTabs.module.css'

export default function BarTabs({onSelectTab}) {
    const [tabActive, setTabActive] = useState('drinks')
    
    const onClickTab = (event) => {
        setTabActive(event.target.value)
        onSelectTab(event.target.value)
    }

    return(
        <div className={styles.tabs}>
            <button 
            className={`${styles.tabBtn} ${tabActive == 'drinks' ? styles.tabBtnActive : styles.tabBtnPassive}`} 
            onClick={onClickTab} 
            value='drinks' 
            type='button'>
                Напитки
            </button>

            <button 
            className={`${styles.tabBtn} ${tabActive == 'isotonic' ? styles.tabBtnActive : styles.tabBtnPassive}`} 
            onClick={onClickTab} 
            value='isotonic' 
            type='button'>
                Изотоники
            </button>

            <button 
            className={`${styles.tabBtn} ${tabActive == 'smoothies' ? styles.tabBtnActive : styles.tabBtnPassive}`} 
            onClick={onClickTab} 
            value='smoothies' 
            type='button'>
                Смузи
            </button>

            <button 
            className={`${styles.tabBtn} ${tabActive == 'snacks' ? styles.tabBtnActive : styles.tabBtnPassive}`} 
            onClick={onClickTab} 
            value='snacks' 
            type='button'>
                Закуски
            </button>
        </div>
    )
}