import React, { FC } from 'react'

import styles from './style.css'
import { RoutesEnum } from '@src/routes/routes_enum'

export const DefaultLayoutHeader: FC = () => (
  <div className={styles.defaultLayoutHeader}>
    <a href={RoutesEnum.About} className={styles.anchor}>
      About
    </a>{' '}
    <a href="/create-beat" className={styles.anchor}>
      Create Beat
    </a>
  </div>
)
