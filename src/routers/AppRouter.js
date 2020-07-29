import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'history/browser';
import SignupPage from '../components/SignupPage';
import SigninPage from '../components/SigninPage';
import BlogDashboardPage from '../components/BlogDashboardPage';
import CreateBlogPage from '../components/CreateBlogPage';
import EditBlogPage from '../components/EditBlogPage';
import ViewBlogPage from '../components/ViewBlogPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
//const history = createBrowserHistory();
const AppRouter = () => (
    <Router history = {history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={SignupPage} exact={true} />
                <PublicRoute path="/signin" component={SigninPage} exact={true} />
                <PrivateRoute path="/create-blog" component={CreateBlogPage} />
                <PrivateRoute path="/edit/:id" component={EditBlogPage} />
                <Route path="/view/:id" component={ViewBlogPage} />
                <PrivateRoute path="/dashboard" exact={true} component={BlogDashboardPage} />
                <Route component={NotFoundPage} />
            </Switch>
            {/*<Footer />*/}
        </div>
    </Router>
);

export default AppRouter;