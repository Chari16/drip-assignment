import React, { useEffect, useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import CardContainer from "../cardContainer";
import Blog from '../blog';
import Header from '../header';
import Footer from "../footer";
import './dashboard.css';

const Dashboard = () => {

    return (
        <div className="container">
            <Header/>
            <Switch>
                <Route exact path="/blogs/:id" exact component={Blog}/>
                <Route path="/" exact component={CardContainer}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default withRouter(Dashboard);