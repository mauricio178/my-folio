import React from 'react'
import styles from './styles.module.scss'
import Image from "next/image";
import me from '../../../public/me.jpg'
import homeMobile from '../../../public/home-mobile.png'
import { BackgroundStelar } from '../../components/BackgroundStelar';
import {MdDevices} from 'react-icons/md'
import {RiBuildingLine} from 'react-icons/ri'

export default function Home() {
    return (
        <BackgroundStelar title='About'>
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image src={me} width={'300'} height={'300'} alt={"me.pic"} />
                </div>

                <div>
                    <h2>Hi! My name is <br /><span>Mauricio Rodrigues.</span></h2>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h3>and i'm a <br /><span>Front end Developer.</span></h3>
                </div>

                <div className={styles.imageMobile}>
                    <Image src={homeMobile} width={'140'} height={'140'} alt={"mobileHome.pic"} />
                </div>
            </div>

            <div className={styles.about}>
                <h2>What i do</h2>

                <div className={styles.cards}>
                    <div>
                        <MdDevices/>
                        <p>Development Web & Mobile</p>
                    </div>

                    <div>
                        <RiBuildingLine/>
                        <p>Build Front-page</p>
                    </div>
                </div>
            </div>
        </BackgroundStelar>
    )
}