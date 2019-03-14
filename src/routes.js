import React from 'react';
import { Route , Switch } from 'react-router-dom';

//components
import App from './components/App';
import Abount from './components/Abount';
import Contact from './components/Contact';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/" component={Home} />            
            <Route exact path="/abount" component={Abount} />
            <Route exact path="/contact" component={Contact} />            
            <Route component={Page404} />
        </Switch>
    </App>

export default AppRoutes;
