import Link from "next/link";
import localFont from 'next/font/local'

import Benefit from './components/Benefit/Benefit'
import TrainingAccordions from "./components/TrainingAccordions/TrainingAccordions";
import HomeSwiper from "./components/HomeSwiper/HomeSwiper";

import benefitsData from './database/benefitsData'

import styles from './page.module.css'
import mainStyles from './main.module.css'
import 'swiper/css';

const myFont = localFont({
    src: './fonts/RS-semibold.otf',
    display: 'swap',
})

export default function HomeFitness(){
    return(
        <>
            <section style={{backgroundImage: `url("./fusion-fitness/home-images/top-bg.jpg")`}} className={styles.top}>
                <div className={styles.container}>
                    <div className={styles.topInner}>
                        <h1 className={`${styles.topTitle} ${myFont.className}`}>Фитнес-клуб в центре Екатеринбурга</h1>
                        <h2 className={styles.topSubtitle}>
                            Достигайте новых высот с нашими профессиональными тренерами и современным оборудованием
                        </h2>
                        <Link href='/card'>
                            <button className={styles.topBtn}>Купить карту</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.benefits}>
                <div className={mainStyles.container}>
                    <h3 className={mainStyles.title}>Что вы получите:</h3>
                    <div className={styles.benefitsInner}>
                    {benefitsData.map((benefit, index) => (
                        <Benefit key={index} img={benefit.img} title={benefit.title} text={benefit.text} />
                    ))}
                    </div>
                </div>
            </section>

            <section className={styles.trainings}>
                <div className={mainStyles.container}>
                    <div className={styles.trainingsInner}>
                        <div className={styles.trainingsLeft}>
                            <h3 className={mainStyles.title}>Погрузитесь в тренировочный процесс</h3>
                            <p className={mainStyles.text}>
                                Мы стремимся предоставить вам самые эффективные тренировки и оптимальное развитие вашего физического состояния. Наш тренировочный процесс - это гармоничное сочетание современных подходов, профессионального руководства и индивидуального подхода к каждому участнику.
                            </p>
                            <div className={styles.accordionList}>
                                <TrainingAccordions/>
                            </div>
                        </div>
                        <div className={styles.trainingsRight}>
                            <img className={styles.trainingsNonAdaptive} src="./fusion-fitness/home-images/trainings-img.jpg" alt="" />
                            <Link href='/schedule'>
                                <button className={styles.trainingsBtn}>Тренировки</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.gallery}>
                <video preload="auto" autoPlay loop muted playsInline style={{ width: '100%', height: '652px', objectFit: 'cover' }}>
                    <source src="fusion-fitness/videos/background-video.mp4" type="video/mp4" />
                </video>
                <div className={`${mainStyles.container} ${styles.galleryContainer}`}>
                    <div className={styles.galleryInner}>
                        <Link href='/contacts'>
                            <button className={styles.galleryBtn}>Галерея клуба</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.bar}>
                <div className={mainStyles.container}>
                    <div className={styles.barInner}>
                        <h3 className={mainStyles.title}>Фитнес-бар</h3>
                        <p className={`${mainStyles.text} ${styles.marginBottom}`}>
                            Идеальное место для восстановления сил и удовлетворения ваших потребностей в питательных веществах после тренировки. В нашем фитнес-баре вы найдете широкий выбор свежих и здоровых напитков, изотоников, смузи и питательных закусок, чтобы пополнить запасы энергии и поддерживать здоровый образ жизни.
                        </p>
                        <HomeSwiper/>
                        <Link href='/fit-bar'>
                            <button className={styles.barBtn}>Перейти</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.card}>
                <div className={mainStyles.container}>
                    <h3 className={mainStyles.title}>Карта</h3>
                    <div className={styles.cardInner}>
                        <div className={styles.cardLeft}>
                            <p className={mainStyles.text}>
                                Мы предлагаем карту-проход, которая станет вашим надежным спутником в пути к фитнесу и здоровью. Вот почему наша карта-проход является одним из наших ключевых преимуществ:
                            </p>
                            <ol className={styles.cardList}>
                                <li className={styles.cardItem}>
                                    <p className={mainStyles.text}>
                                        Ваша карта обеспечивает полный доступ ко всему, что предлагает Fusion. Вы будете посещать все доступные места и процедуры в пределах вашего тарифа.
                                    </p>
                                </li>
                                <li className={styles.cardItem}>
                                    <p className={mainStyles.text}>
                                        В случае потери или кражи карты, вы можете легко заблокировать ее и получить замену.
                                    </p>
                                </li>
                                <li className={styles.cardItem}>
                                    <p className={mainStyles.text}>
                                        Карта позволяет вам упростить процесс оплаты за услуги фитнес-клуба. Вы можете связать вашу карту с вашими финансовыми средствами.
                                    </p>
                                </li>
                            </ol>
                            <Link href='/card'>
                                <button className={`${styles.cardBtn} ${styles.cardNonAdaptive}`}>Приобрести</button>
                            </Link>
                        </div>
                        <div className={styles.cardRight}>
                            <Link href='/card'>
                                <button className={`${styles.cardBtn} ${styles.cardAdaptive}`}>Приобрести</button>
                            </Link>
                            <img src="./fusion-fitness/home-images/card-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
