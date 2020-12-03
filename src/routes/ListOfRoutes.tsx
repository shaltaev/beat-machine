import React, { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { IRouteParam } from '@src/routes/interfaces'

interface IOwnProps {
  routes: IRouteParam[]
}

export const ListOfRoutes: FC<IOwnProps> = ({ routes }) => (
  <Switch>
    {routes.map(({ props: { path, children: Children }, addition: { layout: Layout } }, idx) => (
      <Route key={idx} path={path}>
        <Layout>
          <Children />
        </Layout>
      </Route>
    ))}
    <Redirect from="*" to="/create-beat" />
  </Switch>
)
