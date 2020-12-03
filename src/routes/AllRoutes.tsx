import React, { FC } from 'react'

import { PageAbout, PageCreateBeat } from '@src/pages'
import { DefaultLayout } from '@src/layout'
import { RoutesEnum } from '@src/routes/routes_enum'
import { IRouteParam } from '@src/routes/interfaces'
import { ListOfRoutes } from '@src/routes/ListOfRoutes'

const routes: IRouteParam[] = [
  {
    props: {
      path: RoutesEnum.About,
      children: PageAbout,
    },
    addition: {
      layout: DefaultLayout,
    },
  },
  {
    props: {
      path: RoutesEnum.CreateBeat,
      children: PageCreateBeat,
    },
    addition: {
      layout: DefaultLayout,
    },
  },
]

export const AllRoutes: FC = () => <ListOfRoutes routes={routes} />
