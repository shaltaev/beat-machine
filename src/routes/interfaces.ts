import { ComponentType } from 'react'

import { ILayoutProps } from '@src/layout'

interface IRouteAddition {
  layout: ComponentType<ILayoutProps>
}

export interface IRouteParam {
  props: {
    path: string
    children: ComponentType
  }
  addition: IRouteAddition
}
