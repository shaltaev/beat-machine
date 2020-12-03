import React, { FC } from 'react'

import styles from './style.css'

export const SixteenthTitle: FC<{ title: string }> = ({ title }) => <span className={styles.label}>{title}</span>
