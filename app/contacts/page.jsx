import Link from 'next/link'
import GalleryImg from '../components/GalleryImg/GalleryImg'

import galleryData from '../database/galleryData'

import mainStyles from '../main.module.css'
import styles from './page.module.css'

export default function Contacts() {
    return(
        <>
            <section className={styles.contacts}>
                <div className={mainStyles.container}>
                    <div className={styles.conactcsInner}>
                        <h4 className={mainStyles.pagesTitle}>Контакты и галерея</h4>
                        <div className={styles.contactFlex}>
                            <div className={styles.left}>
                                <h5 className={styles.contactSubtitle}>Контактные данные:</h5>
                                <ul className={styles.contactsList}>
                                    <li className={styles.contact}>
                                        <Link href='tel:+7 888 555 35 35'>Телефон: +7 888 555 35 35</Link>
                                    </li>
                                    <li className={styles.contact}>
                                        <Link href='mailto:thisemailisnotexist@gmail.com'>Почта: thisemailisnotexist@gmail.com</Link>
                                    </li>
                                    <li className={styles.contact}>
                                        <Link target='a_blank' href='https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9C%D0%B0%D0%BB%D1%8B%D1%88%D0%B5%D0%B2%D0%B0,+126,+%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3,+%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+620062/@56.838987,60.6421156,17z/data=!4m6!3m5!1s0x43c16c27dea656cf:0x6d8b00594d76cdfb!8m2!3d56.8389547!4d60.6432958!16s%2Fg%2F11bw3xxlgg?entry=ttu'>
                                            Адрес: г. Екатеринбург ул. Малышева 126
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.map}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.4072754823333!2d60.64108565768115!3d56.83895760781316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16c27dea656cf%3A0x6d8b00594d76cdfb!2z0YPQuy4g0JzQsNC70YvRiNC10LLQsCwgMTI2LCDQldC60LDRgtC10YDQuNC90LHRg9GA0LMsINCh0LLQtdGA0LTQu9C-0LLRgdC60LDRjyDQvtCx0LsuLCA2MjAwNjI!5e0!3m2!1sru!2sru!4v1691250737121!5m2!1sru!2sru" width={560} height={200} style={{border:'0', borderRadius:'15px'}} loading={'lazy'}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.gallery}>
                <div className={mainStyles.container}>
                    <h5 className={styles.contactSubtitle}>Фотогалерея клуба:</h5>
                </div>    
                <div className={styles.galleryInner}>
                    {galleryData.map((gallery, id) => (
                        <GalleryImg key={id} img={gallery.img}/>
                    ))}
                </div>
            </section>

            <section className={styles.description}>
                <div className={mainStyles.container}>
                    <div className={styles.descriptionInner}>
                        <p className={mainStyles.text}>
                            Fusion начал свою деятельность в мире фитнеса и здоровья с 2010 года. С момента основания наш фитнес-клуб стремится предоставлять высококачественные услуги, вдохновляя людей на активный образ жизни и поддерживая их в пути к лучшей версии себя. Мы гордимся тем, что на протяжении многих лет Fusion стал местом встречи единомышленников, где дружелюбная атмосфера и профессиональные тренеры создают идеальные условия для достижения ваших фитнес-целей. Наш опыт и энтузиазм позволили нам стать надежным партнером на пути к здоровому образу жизни и вдохновить тысячи людей к более активной и счастливой жизни.
                        </p>
                        <p className={mainStyles.text}>
                            Наша миссия - вдохновлять и поддерживать наших участников на пути к фитнесу и здоровью. Мы верим, что каждый человек имеет потенциал стать сильнее, здоровее и счастливее, и наша команда экспертов готова помочь вам достичь ваших целей.
                        </p>
                        <p className={mainStyles.text}>
                            Fusion предлагает широкий спектр услуг и возможностей, включая современный тренажерный зал с последними инновационными технологиями, разнообразные групповые занятия под руководством профессиональных тренеров, зоны для функциональных тренировок, йоги, пилатеса и многое другое.
                        </p>
                    </div>    
                </div>    
            </section>

            <section className={styles.card}>
                <div className={mainStyles.container}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardLeft}>
                            <p className={mainStyles.text}>
                                Присоединяйтесь к нам сегодня и станьте частью Fusion! Разблокируйте свой потенциал, совершенствуйте свое тело и ум, и откройте для себя радость движения и здорового образа жизни. Вместе мы сделаем каждый шаг вашего фитнес-путешествия увлекательным и незабываемым!
                            </p>
                        </div>
                        <Link href='/card'>
                            <button className={styles.cardBtn}>Купить карту</button>
                        </Link>
                    </div>
                </div>    
            </section> 
        </>
    )
}