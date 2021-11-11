import React from 'react';
import {MoviesProvider} from './movies';

const composeProviders =
  (...providers) =>
  ({children}) => {
    return providers.reduceRight(
      (child, Provider) => <Provider>{child}</Provider>,
      children,
    );
  };

const Providers = composeProviders(MoviesProvider);

export default Providers;
