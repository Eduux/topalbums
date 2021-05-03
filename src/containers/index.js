import React, { memo } from 'react';

const listContainers = [];

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
