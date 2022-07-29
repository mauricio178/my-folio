import styles from './styles.module.scss'
import React, { useState } from 'react'
import logo from '../../../public/3.png'
import Image from 'next/image'
import { Button } from "../Button";
import { HiMenu } from 'react-icons/hi'
import { MenuMobile } from '../MenuMobile';
import { useAsideBar } from '../../hooks/menuMobile';


export function Header() {

    const { openMenu, setOpenMenu, activeItem } = useAsideBar()

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <div>
                    <Image src={logo} alt="logo" width={40} height={40} />
                </div>
            </div>
            <div className={styles.nav}>
                <a>Services</a>
                <a>Work</a>
                <a>Portfolio</a>
                <Button title={"Contact"} theme={'secondary'} />
            </div>

            <div className={styles.menuMobile}>
                {!openMenu&&<HiMenu onClick={() => setOpenMenu(!openMenu)} />}
            </div>

            <MenuMobile />

        </div>
    );
}
