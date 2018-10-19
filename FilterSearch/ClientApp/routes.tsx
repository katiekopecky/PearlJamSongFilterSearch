import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { FilterSearch } from './components/FilterSearch';
import {FilterMakeupSearch} from './components/FilterMakeupSearch';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata' component={ FetchData } />
    <Route path='/filtersearch' component={ FilterSearch } />
    <Route path='/filtermakeupsearch' component={ FilterMakeupSearch } />
</Layout>;
