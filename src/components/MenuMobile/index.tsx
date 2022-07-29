import React from 'react'
import styles from './styles.module.scss'
import Router from 'next/router'
import { useAsideBar } from '../../hooks/menuMobile'
import { FiX } from 'react-icons/fi'

export function MenuMobile() {

    function go(path: string) {
        Router.push(path)
    }

    const { openMenu, setOpenMenu } = useAsideBar()

    const list = [
        { id: 1, name: "Services", path: '/services' },
        { id: 2, name: "Works", path: '/new-home' },
        { id: 3, name: "Portfolio", path: '/portfolio' },
        { id: 4, name: "Contact", path: '/contact' }
    ]

    return (
        <div className={openMenu ? styles.container : styles.off}>
            <div className={styles.menu}>
                <div className={styles.top}>
                    <FiX onClick={() => setOpenMenu(!openMenu)} />
                </div>

                <ul>
                    {list.map((item: any) => {
                        return (
                            <li key={item.id} onClick={() => go(item.path)}>{item.name}</li>
                        )
                    })}
                </ul>


            </div>
        </div>

    )
}