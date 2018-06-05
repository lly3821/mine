import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './app'
import Loadable from 'react-loadable'

const Loading = () =>{
    return(<p>Loading</p>)
}
const AppRoutes = () => {
    const WrapApp = Loadable({
        loader: () => import('./animate'),
        loading:Loading
    })

    return (<Switch>
        <Route component={WrapApp} path="/" />
    </Switch>)
}

export default AppRoutes
