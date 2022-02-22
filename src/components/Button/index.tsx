import React from 'react'
import styles from './styles.module.scss'

type ButtonProps = {
    title: string
    theme: 'primary' | 'secondary'
}

export function Button(data: ButtonProps) {
    return (
        <div className={data.theme === 'primary' ? styles.container : styles.containerSecondary}>
            <p>
                {data.title}
            </p>
        </div>
    )
}