import React, { FC } from 'react'

import { RouterWithHistory } from './RouterWithHistory'
import { AllRoutes } from './AllRoutes'

export const CompleteRouter: FC = () => (
  <RouterWithHistory>
    <AllRoutes />
  </RouterWithHistory>
)
