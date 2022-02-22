import styles from './styles.module.scss'
import React from 'react'
import logo from '../../../public/3.png'
import Image from 'next/image'
import {Button} from "../Button";


export function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <div>
                    <Image src={logo} alt="logo" width={40} height={40}/>
                </div>
                <p>Mauricio Rodrigues</p>
            </div>
            <div className={styles.nav}>
                <a>Services</a>
                <a>Work</a>
                <a>Portfolio</a>
                <Button title={"Contact"} theme={'secondary'}/>
            </div>
        </div>
    );
}
