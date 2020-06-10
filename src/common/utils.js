import React from 'react';
import { Route } from 'react-router-dom';
import { keyframes } from 'styled-components';

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

export const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`
export const fromLeftToRight = x => keyframes`
  0% { transform: translateX(${x}px) }
  100% { transform: translateX(0) }
`;

export const fromRightToLeft = x => keyframes`
  0% { transform: translateX(${x}px) }
  100% { transform: translateX(0) }
`;
