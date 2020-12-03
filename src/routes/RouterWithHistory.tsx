import React, { FC, ReactNode } from 'react'
import { Router } from 'react-router-dom'

import { history } from '@src/history'

interface IProps {
  children?: ReactNode
}

export const RouterWithHistory: FC<IProps> = ({ children }) => <Router history={history}>{children}</Router>
