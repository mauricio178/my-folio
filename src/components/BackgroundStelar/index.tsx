import React from 'react'
import styles from './styles.module.scss'

type ContainerProps = React.HTMLProps<HTMLDivElement> & {
    title: string
}

export function BackgroundStelar({ title, children }: ContainerProps) {
    return (
        <div className={styles.container}>

            <div className={styles.children}>
                {children}
            </div>

            <div className={styles.content}>
                <div className={styles.star} />
                <div className={styles.stars2} />
            </div>

        </div>

    )
}