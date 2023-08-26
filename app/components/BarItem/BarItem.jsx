import styles from './BarItem.module.css'
  
export default function BarItem({img, manufacturer, title, price}) {
    return(
        <div className={styles.barItem}>
            <img className={styles.barImg} src={img}/>
            <h6 className={styles.barManufacturer}>{manufacturer}</h6>
            <p className={styles.barName}>{title}</p>
            <p className={styles.price}>{`${price} ₽`}</p>
        </div>
    )
}