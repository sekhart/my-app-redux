import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage'
import StudentsPage from './pages/StudentsPage'

import { Navbar } from './components/Navbar'


const App = () => {
    return (
        <Router basename="reduxTest">
            <Navbar />
            <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/posts" component={PostsPage} />
                <Route exact path="/students" component={StudentsPage} />
                <Redirect to="/" />
            </Switch>
        </Router>

    );
}

export default App;