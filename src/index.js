import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppRoutes from './appRoutes'

render(<Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root')
)