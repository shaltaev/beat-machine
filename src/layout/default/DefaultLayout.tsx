import React, { FC } from 'react'

import styles from './style.css'
import { DefaultLayoutHeader } from '@src/components'
import { ILayoutProps } from '@src/layout/interface'

export const DefaultLayout: FC<ILayoutProps> = ({ children }) => (
  <div className={styles.defaultLayout}>
    <DefaultLayoutHeader />
    <main className={styles.content}>{children}</main>
  </div>
)
