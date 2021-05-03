import React, { memo } from 'react';

import favorites from './favorites';

const listContainers = [favorites];

export default function containers(WrappedComponent) {
  const WithContainers = props => {
    let CompleteComponent = null;

    listContainers.forEach(withContainer => {
      CompleteComponent = withContainer(CompleteComponent || WrappedComponent);
    });

    return <CompleteComponent {...props} />;
  };

  return memo(WithContainers);
}
