import React, { FC } from 'react'
import { Route, RouteProps } from 'react-router-dom'

interface IOwnProps {
  routes: RouteProps[]
}

export const ListOfRoutes: FC<IOwnProps> = ({ routes }) => (
  <>
    {routes.map((routeProps, idx) => (
      <Route key={idx} {...routeProps} />
    ))}
  </>
)
