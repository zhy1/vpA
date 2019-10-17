import React from 'react';
import AsyncComponent from 'components/AsyncComponent';
import { Route, Switch } from 'react-router-dom';

const Home = AsyncComponent(() => import('pages/Main/Home'));
const Antd = AsyncComponent(() => import('pages/Main/Antd'));
const User = AsyncComponent(() => import('pages/Main/User'));
const TaskManager = AsyncComponent(() => import('pages/Main/TaskManager'));

import { createNotFoundRoute } from '../utils/router';
const getRouter = _ => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/user' component={User} />
      <Route path='/task' component={TaskManager} />
      <Route exact path='/antd' component={Antd} />
      {createNotFoundRoute()}
    </Switch>
  </div>
);
export default getRouter;
