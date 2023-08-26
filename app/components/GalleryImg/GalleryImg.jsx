'use client'

import { useState } from 'react'

import styles from './Gallery.module.css'

export default function GalleryImg({img}) {
    const [imgOpen, setImgOpen] = useState(false)

    const onClickImg = () => {
        setImgOpen(!imgOpen)
    }

    return(
        <>
            <div onClick={onClickImg} className={styles.galleryItem}>
                <img className={styles.gridImg} src={img}/>
            </div>
            { imgOpen &&
                <div onClick={onClickImg} className={`${styles.modal} ${imgOpen && styles.modalOpened}`}>
                    <div className={styles.modalDialog}>
                        <div className={styles.modalContent}>
                            <img className={styles.modalImg} src={img} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}