'use client'

import { useState } from 'react'

import barData from '../database/barData'

import BarTabs from '../components/BarTabs/BarTabs'
import BarItem from '../components/BarItem/BarItem'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export default function FitBar() {
    const [selectedTab, setSelectedTab] = useState('drinks')
    const filteredBarData = barData.filter((item) => item.group === selectedTab);

    const onSelectTab = (tabValue) => {
        setSelectedTab(tabValue)
    }

    return(
        <section className={styles.fitBar}>
            <div className={mainStyles.container}>
                <div className={styles.fitBarInner}>
                    <h4 className={`${mainStyles.pagesTitle} ${styles.margin}`}>Фитнес-бар</h4>
                    <div className={styles.topSection}>
                        <BarTabs onSelectTab={onSelectTab}/>
                        <p className={styles.postScruptuim}>
                            *Мы не осуществляем доставку содержимого из фитнес бара. Вы сможете приобрести содержимое в нашем фитнес клубе. При покупке можно будет попросить как полную банку, так и одну кружку
                        </p>
                    </div>
                    {filteredBarData.map((barItem, index) => (
                        <div className={styles.barItems} key={index}>
                            {barItem.barGroup.map((bar, nestedIndex) => (
                                <BarItem key={nestedIndex} img={bar.img} manufacturer={bar.manufacturer} title={bar.title} price={bar.price}/>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}