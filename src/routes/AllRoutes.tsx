import React, { FC } from 'react'
import { RouteProps } from 'react-router-dom'

import { PageBeatMachine } from '../pages/BeatMachine'
import { ListOfRoutes } from '@src/routes/ListOfRoutes'

const routes: RouteProps[] = [
  {
    path: '/',
    children: PageBeatMachine,
  },
]

export const AllRoutes: FC = () => <ListOfRoutes routes={routes} />
