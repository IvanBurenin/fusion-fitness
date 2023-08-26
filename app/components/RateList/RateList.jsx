'use client'

import {useState} from 'react'

import mainStyles from '../../main.module.css'
import styles from './RateList.module.css'

export default function RateList({onChange}) {
    const [btnActive, setBtnActive] = useState(1)

    const onClickBtn = (event) => {
        setBtnActive(event.target.id)
        onChange(event.target.value)
    }

    return(
        <>
            <div className={styles.list}>
                <button onClick={onClickBtn} value='1.20' id='1' className={`${styles.btn} ${btnActive == 1 && styles.btnActive}`} type='button'>Базовый</button>
                <button onClick={onClickBtn} value='1.80' id='2' className={`${styles.btn} ${btnActive == 2 && styles.btnActive}`} type='button'>Продвинутый</button>
                <button onClick={onClickBtn} value='2.50' id='3' className={`${styles.btn} ${btnActive == 3 && styles.btnActive}`} type='button'>Все включено</button>
                <button onClick={onClickBtn} value='1.10' id='4' className={`${styles.btn} ${btnActive == 4 && styles.btnActive}`} type='button'>Студенческий</button>
            </div>
            <div className={styles.textSection}>
                {btnActive == 1 && <p className={mainStyles.text}>У вас будет доступ к спортивному залу с самым новым оборудованием, просторная кардио-зона, а также доступ к шкафчикам, полотенцам и душу.</p>}
                {btnActive == 2 && <p className={mainStyles.text}>У вас будет все, что есть в базовом, но вдобавок появится доступ к  игровой зоне, зоне йоги, к залу боевых искусств и стретчингу</p>}
                {btnActive == 3 && <p className={mainStyles.text}>У вас будет все, что есть в продвинутом, но у вас появится возможность раз в 2 недели бесплатно пользоваться солярием и 3 раза в неделю брать один из продуктов в фитнес-баре бесплатно</p>}
                {btnActive == 4 && <p className={mainStyles.text}>У вас будет доступ к спортивному залу с самым новым оборудованием, просторная кардио-зона, а также доступ к шкафчикам, полотенцам и душу. НО вы должны будете показать свой студенческий билет или другое доказательство что вы являетесь студентом</p>}
            </div>
        </>
    )
}