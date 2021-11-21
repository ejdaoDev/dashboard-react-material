import React from 'react';
import { Redirect } from 'react-router-dom';
import homeRoute from './app/components/modules/home/homeRoute';
import loansRoutes from './app/components/modules/loans/loansRoutes';
import securityRoutes from './app/components/modules/security/securityRoutes';

const redirectRoute = [{path: '/',exact: true,component: () => <Redirect to="/" />}];
const errorRoute = [{component: () => <Redirect to="/session/404" />}];
const routes = [
    ...homeRoute,
    ...loansRoutes,
    ...securityRoutes,
    ...redirectRoute,
    ...errorRoute,
];
export default routes;
