import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import AllAddresses from './components/all_addresses';
import NewAddress from './components/new_address';


export default (
    <Route path="/" component={App}>
        <Route path="new" component={NewAddress} />
        <Route path="all" component={AllAddresses} />
    </Route>
);