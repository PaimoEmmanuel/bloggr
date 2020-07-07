import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AuthPage from '../components/AuthPage';
import BlogDashboardPage from '../components/BlogDashboardPage';
import CreateBlogPage from '../components/CreateBlogPage';
import EditBlogPage from '../components/EditBlogPage';
import ViewBlogPage from '../components/ViewBlogPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
            <Header />
            <Switch>
                {/* <Route path="/" component={AuthPage} exact={true} /> */}
                <Route path="/create-blog" component={CreateBlogPage} />
                <Route path="/edit/:id" component={EditBlogPage} />
                <Route path="/view/:id" component={ViewBlogPage} />
                <Route path="/" exact={true} component={BlogDashboardPage} />
                <Route component={NotFoundPage} />
            </Switch>
    </BrowserRouter>
);

export default AppRouter;