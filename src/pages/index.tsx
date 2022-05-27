import React from 'react'
import styles from './home.module.scss'
import Image from "next/image";
import me from '../../public/me.jpg'

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.apresentation}>

                <div className={styles.image}>
                    <Image src={me} width={'300'} height={'300'} alt={"me.pic"}/>
                </div>

                <div>

                    <h2>Hi! My name is <span>Mauricio Rodrigues.</span></h2>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h3>and i'm a <span>Web and Mobile Developer .</span></h3>
                </div>
            </div>

            <div className={styles.services}>

            </div>
            <div className={styles.work}>

            </div>
            <div className={styles.portfolio}>

            </div>
            <div className={styles.contact}>

            </div>
        </div>
    )
}