import React from 'react';
import { Route } from 'react-router-dom';

export const showPageContent = routes => {
    let result = null;

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} exact={route.exact} path={route.path} component={route.main} />
        )
      });
    }
    return result;
};