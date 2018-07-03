import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () =>{
    return(<p>Loading...</p>)
}
const Routes = () => {
    const WrapHome = Loadable({
        loader: () => import('./view/home/index'),
        loading:Loading
    })

    return (
        <Switch>
            <Route exact component={WrapHome} path="/home" />
        </Switch>
    )
}

export default Routes
